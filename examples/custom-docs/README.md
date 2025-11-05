# Custom Docs with Fumadocs - Static Export

This is a Fumadocs documentation site configured for **static site export**. Use this as a template for creating your own documentation with Fumadocs.

## What is This?

This example demonstrates how to:
- Set up a Fumadocs documentation site
- Configure it for static site generation (no server required!)
- Deploy as static HTML/CSS/JS files to any hosting provider

## For Your Own Project

If you want to create your own Fumadocs site (outside this repo), follow these steps:

### Quick Start

```bash
# Create a new Fumadocs project
npx create-fumadocs-app my-docs

# Or with pnpm
pnpm create fumadocs-app my-docs

# Navigate to your project
cd my-docs
```

Then apply the static export configuration (see below).

## Static Export Configuration

### 1. next.config.mjs

The key change for static export is in `next.config.mjs`:

```js
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',           // ← Enable static export
  images: {
    unoptimized: true,        // ← Required for static export
  },
};

export default withMDX(config);
```

### 2. API Routes Removed

For static export, server-side API routes don't work. I've removed:
- `/app/api/search/` - Server-side search
- `/app/og/` - OpenGraph image generation
- `/app/llms-full.txt/` - LLM text route

**Note:** You can use client-side search with Orama or Algolia instead of server-side search.

### 3. Package Configuration

Your `package.json` should look like:

```json
{
  "name": "my-docs",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build"
  },
  "dependencies": {
    "fumadocs-core": "^16.0.7",
    "fumadocs-mdx": "^13.0.5",
    "fumadocs-ui": "^16.0.7",
    "next": "16.0.1",
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  }
}
```

## Project Structure

```
custom-docs/
├── app/
│   ├── (home)/          # Homepage
│   ├── docs/            # Documentation pages
│   ├── layout.tsx       # Root layout
│   └── global.css       # Global styles
├── content/
│   └── docs/            # Your MDX documentation files
│       ├── index.mdx
│       └── ...
├── lib/
│   ├── source.ts        # Content source configuration
│   └── layout.shared.tsx # Shared layout options
├── next.config.mjs      # Next.js config with static export
├── source.config.ts     # MDX source configuration
└── package.json
```

## Writing Documentation

Add your MDX files to `content/docs/`:

```mdx
---
title: My Page
description: Page description
---

# My Page

Your content here...
```

## Building for Production

```bash
# Install dependencies
npm install  # or pnpm install

# Build static site
npm run build

# Output will be in the `out/` directory
```

The `out/` directory contains your static site ready to deploy!

## Deployment

Deploy the `out/` folder to any static hosting:

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod --dir=out
```

### GitHub Pages
```bash
# Just push the out/ folder to your gh-pages branch
```

### Cloudflare Pages, AWS S3, etc.
Upload the `out/` folder contents.

## Customization

### Update Site Title

Edit `lib/layout.shared.tsx`:

```tsx
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Your Docs Title',  // ← Change this
    },
  };
}
```

### Add Navigation Links

In `lib/layout.shared.tsx`:

```tsx
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Your Docs',
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'API Reference',
        url: '/api-reference',
      },
    ],
  };
}
```

### Styling

- Edit `app/global.css` for custom styles
- Fumadocs uses Tailwind CSS - configure in `tailwind.config.js`
- The theme supports dark/light modes out of the box

## Features

✅ Static site generation (no server needed)
✅ MDX support for rich documentation
✅ Built-in table of contents
✅ Dark/light mode
✅ Mobile-friendly responsive design
✅ Code syntax highlighting
✅ Fast full-text search (with Orama/Algolia)
✅ SEO optimized

## Limitations of Static Export

When using `output: 'export'`, be aware:
- No server-side API routes
- No dynamic server-side rendering (SSR)
- No image optimization (hence `unoptimized: true`)
- No ISR (Incremental Static Regeneration)

But you still get:
- All static pages pre-rendered
- Fast client-side navigation
- Full React interactivity
- Client-side search capabilities

## Learn More

- [Fumadocs Documentation](https://fumadocs.dev)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [MDX Documentation](https://mdxjs.com/)

## Support

For issues or questions:
- [Fumadocs GitHub](https://github.com/fuma-nama/fumadocs)
- [Fumadocs Discord](https://discord.gg/fumadocs)

---

Happy documenting! 📚
