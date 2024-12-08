import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Thiago Thimóteo" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Blog() {
  return (
    <main>
      <header className="base-container">
        <h1 className="main-heading">Blog</h1>
        <p className="max-w-[570px] text-xl text-gray-500">This is a space to explore new frontend technologies and trends, experiment with them firsthand, and share my discoveries along the way.</p>
      </header>
      <hr className="border-t border-blue-100 my-4" />

      <Link to="/blog/lorem-ipsum">What is Lorem Ipsum?</Link>

    </main>
  )
}
