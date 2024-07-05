import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Header/Navbar/Navbar";
import AuthProvider from "./Providers/AuthProvider";
import Footer from "../components/Footer/Footer";
import BannerAD from "../components/BannerAd/BannerAD";
import FloatingCatagories from "../components/SideBars/FloatingCatagories/FloatingCatagories";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KG Blog",
  description: "App for all new blog posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <FloatingCatagories />
          {children}
          <BannerAD />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
