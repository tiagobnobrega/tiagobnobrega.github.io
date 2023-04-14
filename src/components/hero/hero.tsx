import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import Typed from "typed.js";
import { isServer } from "@builder.io/qwik/build";
import TypingMessage from "~/components/hero/typing-message";

export default component$(() => {
  return (
    <section class="app-section">
      <div class="content">
        <TypingMessage />
      </div>
    </section>
  );
});
