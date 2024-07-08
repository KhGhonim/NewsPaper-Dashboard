import "../globals.css";
import AuthProvider from "../Providers/AuthProvider";

export const metadata = {
  title: "KG Blog",
  description: "App for all new blog posts",
};

export default function RootLayout({ children }) {
  return (
        <AuthProvider>
          {children}
        </AuthProvider>
  );
}
