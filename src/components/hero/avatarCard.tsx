import {
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
//TODO: Use scoped css strategy
import "./avatarCard.css";

export interface AvatarCardRotationStore {
  x?: number;
  y?: number;
}

export interface AvatarCardProps {
  store: AvatarCardRotationStore;
}

export default component$(({ store }: AvatarCardProps) => {
  const avatarEl = useSignal<HTMLElement>();

  useVisibleTask$(({ track }) => {
    track(() => store.x + "-" + store.y);
    if (avatarEl.value) {
      avatarEl.value.style.setProperty("--rotateX", `${store.x || 0}deg`);
      avatarEl.value.style.setProperty("--rotateY", `${store.y || 0}deg`);
    }
  });

  return (
    <div
      ref={avatarEl}
      class={`avatar-card w-72 h-96 text-black relative ${
        store.x !== 0 ? "active" : ""
      }`}
      style={`transform: rotateX(${store.y}deg) rotateY(${store.x}deg);`}
    >
      <div class="faded-title absolute top-8 text-center font-bold text-6xl text-white left-0 right-0 mx-auto w-auto">
        Full Stack
      </div>
      <div class="slide-title absolute top-6 text-center font-bold text-2xl text-black left-0 right-0 mx-auto w-auto">
        Tiago Nobrega
      </div>
      <div class="circle " />
      <div class="avatar">
        <img
          class="aspect-square rounded-full z-10"
          alt="developer image"
          src="/assets/images/avatar.png"
        />
      </div>
      <div class="faded-title absolute bottom-8 text-center font-bold text-5xl opacity-50 text-white left-0 right-0 mx-auto w-auto">
        Developer
      </div>
    </div>
  );
});
