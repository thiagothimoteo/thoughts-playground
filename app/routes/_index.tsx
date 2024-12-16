import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Thiago Thimóteo" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="flex flex-col items-center justify-between md:flex-row gap-y-8 md:gap-x-8">
      <article className="flex flex-col gap-y-6 max-w-[675px] order-1 md:order-[-1]">
        <h1 className="text-3xl md:text-5xl">
          <span className="text-blue-200 block md:inline">Hi! I’m&nbsp;</span>
          <span
            className="text-white font-extrabold"
            style={{ backgroundImage: 'linear-gradient(to bottom, transparent 70%, #1C709D 30%' }}
          >
            Thiago Thimóteo
          </span>
        </h1>
        <p className="text-l md:text-xl">
          But that’s just my name. I’m also a father, husband, and son, plus a huge fan of Vasco da Gama and the Philadelphia 76ers.
          Professionally, I’m a frontend developer with over 10 years in tech and a passion for lifelong learning.
        </p>
      </article>
      <img
        src="/me.png"
        alt="me"
        className="max-h-[75vh]"
      />
    </main>
  );
}
