export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/cart", "/politics", "/technology", "/health", "/sports"],
};
