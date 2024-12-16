import type { MetaFunction } from "react-router";
import { Link, useLoaderData, data as json } from "react-router";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { getStrapiData } from "~/utils/api";
import { formatDate } from "~/utils/helpers";

export type Post = {
  id: number;
  title: string;
  preview?: string;
  content: BlocksContent;
  publishedAt: string;
  author?: {
    name: string;
  }
  cover?: any;
}

const BLOG_DESCRIPTION = `This is a space to explore new frontend technologies and trends, experiment with them firsthand, and share my discoveries along the way.`

export const meta: MetaFunction = () => {
  return [
    { title: `Thiago Thimóteo - Blog` },
    { name: "description", content: BLOG_DESCRIPTION },
  ];
};

export async function loader() {
  const posts = await getStrapiData('blog-posts?populate=*');

  return json({
    posts: posts.data,
    ENV: {
      STRAPI_URL_BASE: process.env.STRAPI_URL_BASE,
    },
  });
}

export default function Blog() {
  const { posts, ENV } = useLoaderData<{ ENV: any; posts: Post[]}>();

  console.log('posts', posts)

  return (
    <main>
      <header className="base-container">
        <h1 className="main-heading">Blog</h1>
        <p className="max-w-[570px] text-xl text-gray-500">{BLOG_DESCRIPTION}</p>
      </header>
      <hr className="border-t border-blue-100 my-6" />

      <article className="base-container">
        <h2 className="text-xl text-gray-800 mb-4">Featured Posts</h2>

        <section className="grid md:grid-cols-3 gap-x-8 gap-y-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <div className="flex flex-col gap-y-1 hover:opacity-[90%]">
                <figure className="flex align-center h-[250px]">
                  <img
                    src={`${ENV.STRAPI_URL_BASE}/${post?.cover?.formats?.small?.url}`}
                    alt={post?.cover?.formats?.thubmnail?.name}
                    className="rounded-2xl mb-3"
                  />
                </figure>
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-lg">{post.title}</h3>
                  <p className="text-md line-clamp-3">{post.preview}</p>
                  <p className="text-xs text-gray-500 font-sans">{formatDate(post?.publishedAt)}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </article>
    </main>
  )
}
