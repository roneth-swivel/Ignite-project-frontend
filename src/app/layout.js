import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <header className="bg-purple-700 text-white py-4 px-6">
          <h1 className="text-2xl font-bold">InfoNest</h1>
        </header>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
