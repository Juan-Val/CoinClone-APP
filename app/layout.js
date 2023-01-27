import "../src/styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="base">{children}</body>
    </html>
  );
}
