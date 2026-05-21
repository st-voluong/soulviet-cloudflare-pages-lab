import type { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return <div className="min-h-screen overflow-hidden bg-[#f8fbf8] text-ink">{children}</div>;
}
