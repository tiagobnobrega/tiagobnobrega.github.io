import { component$ } from "@builder.io/qwik";
import Divider from "~/components/hero/divider";
import Gauge from "./gauge";

export default component$(() => {
  return (
    <>
      <section class="app-section pb-10 bg-ds-primary sticky top-[-100px]">
        <Divider />
        <div class="content">
          <div class="h-48">other content</div>
          Skills
          <Gauge radius={100} strokePct={0.2} percent={90} />
        </div>
      </section>
      <div style={{ height: "6000px" }} class="bg-ds-primary block p-4"></div>
    </>
  );
});
