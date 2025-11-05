import { RootProvider } from 'fumadocs-ui/provider/next';
import SearchProvider from '@/components/search-provider';
import './global.css';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <SearchProvider />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
