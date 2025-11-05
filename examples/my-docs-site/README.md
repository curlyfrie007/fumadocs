# My Docs Site

A documentation site built with [Fumadocs](https://fumadocs.dev), configured for static site export.

## Features

✅ **Static Site Generation** - Deploy anywhere (Vercel, Netlify, GitHub Pages, etc.)
✅ **Client-Side Search** - Full-text search powered by Orama (no server required!)
✅ **MDX Support** - Write docs in Markdown with React components
✅ **Dark Mode** - Beautiful light/dark themes out of the box
✅ **Mobile Responsive** - Works great on all devices
✅ **Code Highlighting** - Syntax highlighting with Shiki
✅ **Table of Contents** - Auto-generated TOC for easy navigation

> **Search:** This template includes fully client-side search using Orama. Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to search. The search index is generated at build time and works 100% offline.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your docs site.

### 3. Build for Production

```bash
npm run build
```

The static site will be generated in the `out/` directory.

## Project Structure

```
my-docs-site/
├── app/
│   ├── (home)/          # Landing page
│   ├── docs/            # Documentation pages
│   ├── search.json/     # Search index route
│   │   └── route.ts     # Generates search.json at build time
│   ├── layout.tsx       # Root layout
│   └── global.css       # Global styles
├── components/
│   ├── search-provider.tsx  # Search context provider
│   └── search.tsx           # Search dialog component
├── content/
│   └── docs/            # Your MDX documentation files
│       ├── index.mdx    # Home page
│       └── test.mdx     # Example page
├── lib/
│   ├── source.ts        # Content source configuration
│   └── layout.shared.tsx # Shared layout options
├── next.config.mjs      # Next.js config (with static export)
├── source.config.ts     # MDX source configuration
└── package.json
```

## Adding Documentation

Create new MDX files in `content/docs/`:

```mdx
---
title: My Page
description: Page description
---

# My Page

Your content here...

## Features

- Feature 1
- Feature 2

\`\`\`typescript
const example = "code block";
\`\`\`
```

## Customization

### Update Site Title

Edit `lib/layout.shared.tsx`:

```tsx
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Your Site Name',  // ← Change this
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
        text: 'GitHub',
        url: 'https://github.com/yourusername/your-repo',
      },
    ],
  };
}
```

### Customize Styling

- Edit `app/global.css` for custom styles
- Fumadocs uses Tailwind CSS
- Modify theme colors in your Tailwind config

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

### GitHub Pages

1. Build the site: `npm run build`
2. Push the `out/` folder to your `gh-pages` branch

### Other Static Hosts

Upload the contents of the `out/` directory to:
- Cloudflare Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Any static file hosting service

## Static Export Configuration

This project is configured for static export in `next.config.mjs`:

```js
const config = {
  output: 'export',        // Enable static site generation
  images: {
    unoptimized: true,     // Required for static export
  },
};
```

**Note:** Server-side API routes have been removed for static export compatibility.

## Search

This template includes **client-side search** using Orama, which works perfectly with static site export:

### How It Works

1. **Build Time**: When you run `npm run build`, a search index is generated at `search.json`
2. **Runtime**: The search dialog loads this pre-built index and performs all searches in the browser
3. **No Server Needed**: Everything runs client-side - perfect for static hosting

### Using Search

- Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to open the search dialog
- Search across all page titles, descriptions, headings, and content
- Results update instantly as you type

### Implementation

The search implementation consists of:
- `app/search.json/route.ts` - Generates the search index at build time
- `components/search-provider.tsx` - Wraps the app with search context
- `components/search.tsx` - The search dialog component

### Alternative Search Options

If you prefer a different search solution:

- **Algolia**: Powerful hosted search (requires account)
- **Server-side Search**: If deploying to Vercel/Netlify, you can use edge functions
- See [Fumadocs Search Documentation](https://fumadocs.dev/docs/headless/search) for other options

## Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build static site (output to out/)
npm run start        # Preview production build locally
```

## Learn More

- [Fumadocs Documentation](https://fumadocs.dev)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [MDX](https://mdxjs.com/)

## Tech Stack

- **Framework:** Next.js 16
- **Documentation:** Fumadocs
- **Content:** MDX
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

## License

MIT

---

Built with [Fumadocs](https://fumadocs.dev) 📚
