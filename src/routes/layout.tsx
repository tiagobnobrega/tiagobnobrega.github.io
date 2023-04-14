import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/starter/header/header";
import Footer from "~/components/starter/footer/footer";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="space-light w-full text-ds-base bg-ds-page-grad-from bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-ds-page-grad-from via-ds-page-grad-via to-ds-page-grad-to">
      <header class="w-full  h-20 flex justify-center fixed">
        <div class="w-full max-w-screen-2xl z-10">
          content
          <nav>nav</nav>
        </div>
        <div class="absolute w-full h-20 bg-ds-header bg-opacity-5 backdrop-blur-sm rounded drop-shadow-lg"></div>
      </header>
      <main class="w-full flex justify-center pt-20">
        <div class="w-full max-w-screen-2xl">
          <Slot />
        </div>
      </main>
    </div>
  );
});
