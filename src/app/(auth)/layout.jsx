import { ToastContainer } from "react-toastify";
import "../globals.css";
import AuthProvider from "../Providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: "KG Blog",
  description: "App for all new blog posts",
};

export default function RootLayout({ children }) {
  return (
        <AuthProvider>
          {children}
          <ToastContainer />
        </AuthProvider>
  );
}
