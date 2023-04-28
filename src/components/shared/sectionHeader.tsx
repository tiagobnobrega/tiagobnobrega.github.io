import type { HTMLAttributes } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";

export default component$((props: HTMLAttributes<HTMLHeadingElement>) => {
  const { class: cssClass, ...rest } = props;
  return (
    <h2
      class={`font-mono font-bold text-3xl bg-ds-secondary p-3 mb-3 w-auto inline-block ${
        cssClass || ""
      }`}
      {...rest}
    >
      <Slot />
    </h2>
  );
});
