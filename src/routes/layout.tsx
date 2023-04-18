import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/layout/header";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="w-full text-ds-base bg-gradient-to-r bg-ds-page-grad-from from-ds-page-grad-from to-ds-page-grad-to">
      <Header />
      <main class="w-full pt-20">
        <Slot />
      </main>
    </div>
  );
});
