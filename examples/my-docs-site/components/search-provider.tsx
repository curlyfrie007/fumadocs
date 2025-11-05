'use client';

import { SearchProvider as FumadocsSearchProvider } from 'fumadocs-ui/provider';
import dynamic from 'next/dynamic';

const SearchDialog = dynamic(() => import('./search'));

export default function SearchProvider() {
  return (
    <FumadocsSearchProvider
      SearchDialog={SearchDialog}
    />
  );
}
