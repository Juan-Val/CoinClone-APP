import { Navbar } from "@/components/Navbar";
import "../src/styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="base layout__global">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
