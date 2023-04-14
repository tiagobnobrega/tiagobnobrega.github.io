import { component$, Slot, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/layout/header";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="w-full text-ds-base bg-ds-page-grad-from bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-ds-page-grad-from via-ds-page-grad-via to-ds-page-grad-to">
      <Header />
      <main class="w-full pt-20">
        <Slot />
      </main>
    </div>
  );
});
