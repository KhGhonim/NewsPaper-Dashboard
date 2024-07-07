import { Inter } from "next/font/google";
import "../globals.css";
import BannerAD from "../../components/BannerAd/BannerAD";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar/Navbar";
import FloatingCatagories from "../../components/SideBars/FloatingCatagories/FloatingCatagories";
import AuthProvider from "../Providers/AuthProvider";

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
