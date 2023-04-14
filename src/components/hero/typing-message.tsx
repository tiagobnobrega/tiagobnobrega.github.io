import { component$, useVisibleTask$ } from "@builder.io/qwik";
import Typed from "typed.js";

const typedStrings = [
  "Tiago.",
  "a full-stack developer.",
  "curious.",
  "very disciplined.",
];
export default component$(() => {
  useVisibleTask$(({ cleanup }) => {
    const typed = new Typed("#hero-typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 80,
      backSpeed: 20,
      loop: true,
      cursorChar: "_",
    });
    cleanup(typed.destroy);
  });

  return (
    <div class="hero-typing">
      <div id="typed-strings" class="hidden">
        {typedStrings.map((str) => {
          return <p key={str}>{str}</p>;
        })}
      </div>
      <div class="font-mono font-bold text-3xl mt-8">
        Hi, I am{" "}
        <span class="mr-1 bg-ds-secondary p-3">
          <span id="hero-typed"></span>
        </span>
      </div>
    </div>
  );
});
