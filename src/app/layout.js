import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wachirawit Portfolio Website",
  description: "Hi I'm Wachirawit Web Developer using JavaScript and Next.js, You can contact me via Email in this website's form"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
