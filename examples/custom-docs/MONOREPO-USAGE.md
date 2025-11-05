# Using Custom Docs Within Fumadocs Monorepo

This is a quick guide for developers working within the Fumadocs monorepo who want to use this example.

## Within This Monorepo

Since this example is inside the Fumadocs monorepo, it uses workspace packages:

### Install Dependencies

From the **root** of the monorepo:

```bash
pnpm install
```

### Build Workspace Packages First

Before running this example, build the required Fumadocs packages:

```bash
# Build all packages
pnpm run build

# Or build specific packages
pnpm --filter fumadocs-core --filter fumadocs-ui --filter fumadocs-mdx build
```

### Run Development Server

```bash
pnpm --filter custom-docs dev
```

### Build for Production

```bash
pnpm --filter custom-docs build
```

The static site will be generated in `examples/custom-docs/out/`.

## Key Differences from Standalone

- Uses `workspace:*` for fumadocs packages instead of npm versions
- Requires workspace packages to be built first
- Part of the pnpm workspace defined in root `pnpm-workspace.yaml`

## For Your Own Project

If you want to use this as a template for your own project (outside this monorepo):

1. Copy the `examples/custom-docs` folder to your desired location
2. Update `package.json` to use npm package versions:
   ```json
   {
     "dependencies": {
       "fumadocs-core": "^16.0.7",
       "fumadocs-mdx": "^13.0.5",
       "fumadocs-ui": "^16.0.7"
     }
   }
   ```
3. Run `npm install` (or `pnpm install`)
4. Start developing!

See the main [README.md](./README.md) for full documentation.
