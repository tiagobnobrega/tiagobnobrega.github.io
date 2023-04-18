import { component$ } from "@builder.io/qwik";
import "./bio.css";

export default component$(() => {
  return (
    <div class="card-ring-3d min-h-[500px]">
      <div class="text">
        <div class="content">
          <div class="caption">TL;DR</div>
          <h3 class="text-3xl">About me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit
            tellus, vehicula sit amet lacinia tincidunt, lobortis ut nisl. Sed
            quis condimentum diam, sit amet volutpat libero. Curabitur blandit
            lacus eu dictum scelerisque. Duis purus tortor, euismod id tempor
            quis, tempus id nulla. Phasellus euismod mauris nec dictum dapibus.
            Cras sed ipsum egestas, tristique leo sed, viverra neque. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Fusce dignissim
            luctus leo non volutpat.
          </p>
        </div>
      </div>
    </div>
  );
});
