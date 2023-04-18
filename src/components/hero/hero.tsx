import { component$, useStore } from "@builder.io/qwik";
import TypingMessage from "./typing-message";
import Bio from "./bio";
import type { AvatarCardRotationStore } from "~/components/hero/avatarCard";
import AvatarCard from "~/components/hero/avatarCard";

function getMouseRectPercent(e: MouseEvent): { x: number; y: number } {
  const el = e.target as HTMLDivElement;
  const { clientX, clientY } = e;
  const rect = el.getBoundingClientRect();
  const middleX = rect.left + rect.width / 2;
  const middleY = rect.top + rect.height / 2;
  const x = ((clientX - middleX) / rect.width) * 2;
  const y = ((clientY - middleY) / rect.height) * 2;
  return { x, y };
}
const CARD_ROTATION_MAX_X = 20;
const CARD_ROTATION_MAX_Y = 20;

export default component$(() => {
  const avatarCardStore = useStore<AvatarCardRotationStore>({ x: 0, y: 0 });

  return (
    <section class="app-section pb-10 relative min-h-[500px]">
      <div class="content">
        <TypingMessage />
        <div class="flex mt-2 justify-around">
          <div
            class="w-[400px] flex justify-center items-center"
            onmousemove$={(e: MouseEvent) => {
              const { x, y } = getMouseRectPercent(e);
              avatarCardStore.x = Math.round(x * CARD_ROTATION_MAX_X);
              avatarCardStore.y = Math.round(y * CARD_ROTATION_MAX_Y) * -1;
            }}
            onmouseleave$={() => {
              avatarCardStore.x = 0;
              avatarCardStore.y = 0;
            }}
          >
            <AvatarCard store={avatarCardStore} />
          </div>
          <div class="flex w-1/3 min-w-[400px] pt-4 justify-center items-center">
            <Bio />
          </div>
        </div>
      </div>
    </section>
  );
});
