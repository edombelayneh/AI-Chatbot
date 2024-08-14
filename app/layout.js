import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAway Stays",
  description: "AI Chatbot for NextAway Stays",
  icons: {
    icons: [
      { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
    ],
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
