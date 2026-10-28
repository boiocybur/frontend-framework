
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNavigation from "./components/BottomNavigation";
import FavoritesInitializer from "./components/FavoritesInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Family Friends",
  description:
    "Browse a list of breeds, view pictures, and learn about each dog's size, personality, activity level, and care needs.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <FavoritesInitializer />
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
