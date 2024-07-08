import "../globals.css";
import BannerAD from "../../components/BannerAd/BannerAD";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar/Navbar";
import FloatingCatagories from "../../components/SideBars/FloatingCatagories/FloatingCatagories";
import AuthProvider from "../Providers/AuthProvider";

export const metadata = {
  title: "KG Blog",
  description: "App for all new blog posts",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <Navbar />
      <FloatingCatagories />
      {children}
      <BannerAD />
      <Footer />
    </AuthProvider>
  );
}
