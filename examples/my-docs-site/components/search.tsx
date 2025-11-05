'use client';

import DefaultSearchDialog from 'fumadocs-ui/components/dialog/search-default';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';

export default function SearchClient({ open, onOpenChange }: SharedProps) {
  return (
    <DefaultSearchDialog
      open={open}
      onOpenChange={onOpenChange}
      type="static"
      api="/search.json"
    />
  );
}
