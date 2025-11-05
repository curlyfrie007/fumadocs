import { create, insertMultiple, save } from '@orama/orama';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

export async function GET() {
  // Create Orama database with schema
  const db = await create({
    schema: {
      content: 'string',
      page_id: 'string',
      type: 'string',
      breadcrumbs: 'string[]',
      tags: 'enum[]',
      url: 'string',
    },
  });

  // Build search index from all pages
  const documents: any[] = [];

  for (const page of source.getPages()) {
    const tags: string[] = [];
    const data = page.data.structuredData;

    let id = 0;
    const nextId = () => `${page.url}-${id++}`;

    // Index page itself
    documents.push({
      id: page.url,
      page_id: page.url,
      type: 'page',
      content: page.data.title,
      breadcrumbs: [],
      tags,
      url: page.url,
    });

    // Index description
    if (page.data.description) {
      documents.push({
        id: nextId(),
        page_id: page.url,
        tags,
        type: 'text',
        url: page.url,
        content: page.data.description,
      });
    }

    // Index headings
    if (data?.headings) {
      for (const heading of data.headings) {
        documents.push({
          id: nextId(),
          page_id: page.url,
          type: 'heading',
          tags,
          url: `${page.url}#${heading.id}`,
          content: heading.content,
        });
      }
    }

    // Index content sections
    if (data?.contents) {
      for (const content of data.contents) {
        documents.push({
          id: nextId(),
          page_id: page.url,
          tags,
          type: 'text',
          url: content.heading ? `${page.url}#${content.heading}` : page.url,
          content: content.content,
        });
      }
    }
  }

  // Insert all documents
  await insertMultiple(db, documents);

  // Export database
  const exported = await save(db);

  return Response.json({ type: 'advanced', ...exported });
}
