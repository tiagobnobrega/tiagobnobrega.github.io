import { component$ } from "@builder.io/qwik";
import TypingMessage from "./typing-message";
import ThreeJsScene from "./ThreeJsScene";
import Bio from "./bio";
import Divider from "./divider";

// position: absolute;
// top: 0;
// left: 0;
// width: 100%;
// overflow: hidden;
// line-height: 0;
// transform: rotate(180deg);

export default component$(() => {
  return (
    <section class="app-section pb-10 relative">
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
