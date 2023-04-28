import type { QwikDOMAttributes } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

import "./gauge.css";
export interface GaugeProps extends QwikDOMAttributes {
  radius: number;
  strokePct: number;
  percent: number;
}
export default component$(
  ({ radius, strokePct = 0.3, percent = 0, ...rest }: GaugeProps) => {
    const strokeWidth = radius * Math.min(strokePct, 1);
    const innerRadius = radius - strokeWidth / 2;
    const circumference = innerRadius * 2 * Math.PI;
    const arc = circumference * (270 / 360);
    const dashArray = `${arc} ${circumference}`;
    const transform = `rotate(135, ${radius}, ${radius})`;
    const percentNormalized = Math.min(Math.max(percent, 0), 100);
    const offset = arc - (percentNormalized / 100) * arc;

    return (
      <>
        <svg {...rest} height={radius * 2} width={radius * 2}>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="15%" class="skills-gauge-grad-to" />
              <stop offset="85%" class="skills-gauge-grad-from" />
            </linearGradient>
          </defs>
          <circle
            class="skill-gauge-base"
            cx={radius}
            cy={radius}
            fill="transparent"
            r={innerRadius}
            stroke-width={strokeWidth}
            stroke-dasharray={dashArray}
            stroke-linecap="round"
            transform={transform}
          />
          <circle
            class="gauge_percent"
            cx={radius}
            cy={radius}
            fill="transparent"
            stroke="url('#grad')"
            r={innerRadius}
            stroke-width={strokeWidth}
            stroke-linecap="round"
            stroke-dasharray={dashArray}
            stroke-dashoffset={offset}
            transform={transform}
            style={{
              transition: "stroke-dashoffset 0.3s",
            }}
          />
        </svg>
        <p>{/*{strokeWidth} | {innerRadius}*/}</p>
      </>
    );
  }
);
