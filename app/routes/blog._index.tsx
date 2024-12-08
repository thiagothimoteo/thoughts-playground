import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getStrapiData } from "~/utils/api";

export const meta: MetaFunction = () => {
  return [
    { title: "Thiago Thimóteo" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return getStrapiData('blog-posts');
}

export default function Blog() {
  const posts = useLoaderData();

  console.log('posts', posts)

  return (
    <main>
      <header className="base-container">
        <h1 className="main-heading">Blog</h1>
        <p className="max-w-[570px] text-xl text-gray-500">This is a space to explore new frontend technologies and trends, experiment with them firsthand, and share my discoveries along the way.</p>
      </header>
      <hr className="border-t border-blue-100 my-4" />

      {posts.map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`}>{post.title}</Link>
      ))}
    </main>
  )
}
