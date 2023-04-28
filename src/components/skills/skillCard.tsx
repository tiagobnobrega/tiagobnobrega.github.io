import { component$ } from "@builder.io/qwik";
import type { GaugeProps } from "~/components/skills/gauge";
import Gauge from "~/components/skills/gauge";
import "./skillCard.css";

export interface SkillCardProps extends GaugeProps {
  title: string;
  label?: string;
  labelSmall?: string;
  badge?: string;
}
export default component$(
  ({
    radius,
    strokePct,
    percent,
    label,
    labelSmall,
    title,
    badge,
  }: SkillCardProps) => {
    return (
      <div class="skill-card w-auto inline-block mr-6 mb-2 rounded-lg shadow-2xl relative">
        {!!badge && (
          <div class="absolute inline-block top-2 right-0">
            <div class="-z-10 block w-[28px] h-[28px] bg-ds-secondary brightness-50 absolute top-[18px] -right-[12px] rotate-45" />
            <div class="z-20 inline-block bg-ds-secondary min-w-[150px] relative top-0 -right-[18px] p-1 rounded-tl-md rounded-tr-md rounded-bl-md">
              {badge}
            </div>
          </div>
        )}
        <div class="relative">
          <Gauge
            class="mx-4 mt-12 mb-6"
            radius={radius}
            strokePct={strokePct}
            percent={percent}
          />
          <div class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col mb-2">
            <div class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ds-primary to-ds-secondary ">
              {!!label && <div class="text-3xl">{label}</div>}
              {!!labelSmall && <div class=" text-xl">{labelSmall}</div>}
            </div>
          </div>
        </div>
        <div class="relative block w-100 bottom-2 left-0">
          <div class="-z-10 block w-[28px] h-[28px] bg-ds-secondary brightness-50 absolute -top-[18px] -left-[12px] rotate-45" />
          <div class="z-20 text-center text-3xl inline-block shadow-md bg-ds-secondary w-full relative -top-[5px] -left-[18px] p-1 rounded-tr-md rounded-br-md rounded-bl-md">
            {title}
          </div>
        </div>
      </div>
    );
  }
);
