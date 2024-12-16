import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";
import type { LinksFunction } from "react-router";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;600&family=Poppins:wght@400;600;800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body data-path={location.pathname}>
        <nav className="font-regular flex items-center gap-x-6 text-xl font-sans justify-end mb-6">
          <Link to="/">about me</Link>
          <Link to="/blog">blog</Link>
        </nav>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
