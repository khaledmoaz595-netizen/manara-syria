import './globals.css';

export const metadata = {
  title: 'Manara Syria',
  description: 'Real Estate Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

