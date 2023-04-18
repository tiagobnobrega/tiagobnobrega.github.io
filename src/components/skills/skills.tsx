import { component$ } from "@builder.io/qwik";
import Divider from "~/components/hero/divider";

export default component$(() => {
  return (
    <section class="app-section pb-10 relative bg-ds-primary">
      <Divider />
      <div class="content">
        <div class="h-48">other content</div>
        Skills
      </div>
    </section>
  );
});
