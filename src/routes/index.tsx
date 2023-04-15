import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero/hero";
import Skills from "~/components/skills/skills";

export default component$(() => {
  return (
    <>
      <Hero />
      <Skills />
    </>
  );
});

export const head: DocumentHead = {
  title: "Tiago Nobrega",
  meta: [
    {
      name: "Tiago Nobrega - Full-Stack developer",
      content: "Get to know who Tiago is what he is capable of",
    },
  ],
};
