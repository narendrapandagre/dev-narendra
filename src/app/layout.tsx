// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio built with Next.js and CSS Modules',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
