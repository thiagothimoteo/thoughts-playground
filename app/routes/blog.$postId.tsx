import type { MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import { getStrapiData } from "~/utils/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Post } from "./blog._index";

export const meta: MetaFunction = ({ data }) => {
  const post = (data as Post[])?.[0];

  return [
    { title: `Thiago Thimóteo - Blog - ${post.title}` },
    { name: "description", content: post.preview },
  ];
};

export async function loader({ params }: { params: { postId: string;} }) {
  const { postId } = params;

  return getStrapiData(`blog-posts?filters[id][$eq]=${postId}&populate=author`);
}

export default function BlogPost() {
  const post = useLoaderData<Post[]>()[0];

  const formattedPublishedAt = new Date(post.publishedAt).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="base-container max-w-[780px] mx-auto">
      <nav className="flex flex-row gap-x-2">
        <Link to="/blog" className="text-gray-400 hover:underline">Blog</Link>
        {`>`}
        <div>{post.title}</div>
      </nav>
      <article className="base-container">
        <header className="base-container">
          <h1 className="main-heading">{post.title}</h1>
          {post.preview && <h2 className="font-serif font-light text-gray-500 text-2xl">A brief explanation of what is lorem ipsum</h2>}
          <address>
            <h3>{post?.author?.name}</h3>
            <time dateTime={post.publishedAt}>{formattedPublishedAt}</time>
          </address>
        </header>
        <BlocksRenderer content={post.content} />
      </article>
    </main>
  )
}
