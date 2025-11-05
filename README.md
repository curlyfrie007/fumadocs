# Custom Fumadocs Static Site

A streamlined Fumadocs setup for creating static documentation sites. This repository contains only the essential packages needed to build and deploy a static documentation site.

## What's Inside

This is a minimal Fumadocs monorepo containing:

### 📦 Packages

- **fumadocs-core** - Core functionality for documentation
- **fumadocs-ui** - UI components and layouts
- **fumadocs-mdx** - MDX support for content

### 📚 Example

- **custom-docs** - A complete documentation site example configured for static export

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Build Required Packages

```bash
pnpm run build:packages
```

### 3. Run Development Server

```bash
pnpm run dev
```

Visit `http://localhost:3000` to see your docs site.

### 4. Build Static Site

```bash
pnpm run build:docs
```

The static site will be generated in `examples/custom-docs/out/`.

## Project Structure

```
.
├── packages/
│   ├── core/           # Core Fumadocs functionality
│   ├── ui/             # UI components and layouts
│   └── mdx/            # MDX content processing
├── examples/
│   └── custom-docs/    # Static docs example
├── package.json        # Root workspace config
└── pnpm-workspace.yaml # Workspace definition
```

## Using This for Your Own Docs

### Option 1: Use This Repository Directly

1. Clone this repository
2. Modify `examples/custom-docs/` with your content
3. Update branding in `examples/custom-docs/lib/layout.shared.tsx`
4. Add your MDX files to `examples/custom-docs/content/docs/`

### Option 2: Create a Standalone Project

For a standalone project outside this monorepo, use the official CLI:

```bash
npx create-fumadocs-app my-docs
```

Then apply the static export configuration from `examples/custom-docs/README.md`.

## Static Export Configuration

This setup is configured for static site generation:

- ✅ `output: 'export'` in next.config.mjs
- ✅ No server-side API routes
- ✅ Unoptimized images for static compatibility
- ✅ Deploy to any static hosting (Vercel, Netlify, GitHub Pages, etc.)

## Available Commands

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Build only Fumadocs packages
pnpm run build:packages

# Build only the docs site
pnpm run build:docs

# Run development server
pnpm run dev

# Clean build artifacts
pnpm run clean
```

## Deployment

After building, deploy the `examples/custom-docs/out/` folder to any static hosting:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod --dir=examples/custom-docs/out`
- **GitHub Pages**: Push the `out/` folder to your gh-pages branch
- **Others**: Upload the `out/` folder contents to any static host

## Documentation

For detailed documentation on using and customizing your docs site, see:

- [Custom Docs README](./examples/custom-docs/README.md)
- [Fumadocs Official Docs](https://fumadocs.dev)

## Requirements

- Node.js >= 18.17.0
- pnpm 10.18.3+

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Learn More

- [Fumadocs Documentation](https://fumadocs.dev)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [MDX](https://mdxjs.com/)
