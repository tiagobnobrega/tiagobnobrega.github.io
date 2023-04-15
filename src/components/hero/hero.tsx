import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import Typed from "typed.js";
import { isServer } from "@builder.io/qwik/build";
import TypingMessage from "./typing-message";
import ThreeJsScene from "./ThreeJsScene";
import Bio from "./bio";
export default component$(() => {
  return (
    <section class="app-section pb-10">
      <div class="content">
        <TypingMessage />
        <div class="flex mt-2 justify-around">
          <div class="max-w-[400px]">
            <ThreeJsScene />
          </div>
          <div class="flex w-1/3 min-w-[400px] pt-4 justify-center items-center">
            <Bio />
          </div>
        </div>
      </div>
    </section>
  );
});
