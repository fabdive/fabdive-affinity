// app/layout.tsx
import React from 'react';

export const metadata = {
  title: 'Fabdive Affinity',
  description: 'L’app qui révèle vos affinités invisibles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
