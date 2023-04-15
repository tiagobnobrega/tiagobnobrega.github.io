import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const isScrollAtTop = useSignal(true);
  return (
    <header
      document:onScroll$={() => {
        isScrollAtTop.value = window.scrollY <= 20;
      }}
      class="w-full h-20 flex justify-center fixed"
    >
      <div class="w-full max-w-screen-2xl z-10 px-8">
        content
        <nav>nav</nav>
      </div>
      <div
        class={`absolute w-full h-20 transition duration-200 ease-in ${
          isScrollAtTop.value
            ? "opacity-0"
            : "bg-ds-header bg-opacity-5 backdrop-blur-sm drop-shadow-lg"
        }`}
      ></div>
    </header>
  );
});
