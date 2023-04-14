import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero/hero";

export default component$(() => {
  return (
    <>
      <Hero />
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
