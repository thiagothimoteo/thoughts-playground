import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Thiago Thimóteo" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function BlogPost() {
  return (
    <main>
      <article className="base-container max-w-[780px] mx-auto">
        <header className="base-container">
          <h1 className="main-heading">What is Lorem Ipsum?</h1>
          <h2>A brief explanation of what is lorem ipsum</h2>
          <address>
            <h3>Thiago Thimóteo</h3>
            <time>7 de Dezembro 2024</time>
          </address>
        </header>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </article>
    </main>
  )
}
