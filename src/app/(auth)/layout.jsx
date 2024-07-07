import { Inter } from "next/font/google";
import "../globals.css";
import AuthProvider from "../Providers/AuthProvider";
import { ToastContainer } from "react-toastify";

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
          {children}
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
