import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Thiago Thimóteo" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Blog() {
  return (<h1>Blog</h1>)
}
