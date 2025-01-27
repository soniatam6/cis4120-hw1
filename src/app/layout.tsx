import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-yellow-300 to-orange-400 text-gray-900">{children}</body>
    </html>
  );
}
