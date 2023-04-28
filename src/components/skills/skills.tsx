import { component$ } from "@builder.io/qwik";
import Divider from "~/components/hero/divider";
import SectionHeader from "~/components/shared/sectionHeader";
import SkillCard from "~/components/skills/skillCard";

const SKILLSET = [
  { category: "Language", name: "Javascript", years: 15 },
  { category: "Language", name: "Typescript", years: 7 },
  { category: "Language", name: "NodeJS", years: 6 },
  { category: "Framework", name: "React", years: 7 },
  { category: "Framework", name: "React-Native", years: 6 },
  { category: "Framework", name: "Svelte", years: 6 },
  { category: "Framework", name: "Qwik", years: 6 },
];

const PROFESSIONAL_SINCE = 2005;
export default component$(() => {
  // const totalYears = new Date().getFullYear() - PROFESSIONAL_SINCE;
  const totalYears = Math.max(...SKILLSET.map((sk) => sk.years));

  return (
    <>
      <section class="app-section pb-10 bg-ds-primary sticky top-[-100px]">
        <Divider />
        <div class="content mt-48">
          <SectionHeader>Skills</SectionHeader>
          <div>
            {SKILLSET.map((skill) => (
              <SkillCard
                key={`${skill.category}-${skill.name}`}
                radius={100}
                strokePct={0.2}
                percent={Math.round((skill.years / totalYears) * 100)}
                label={`${skill.years}+`}
                labelSmall="Years"
                title={skill.name}
                badge={skill.category}
              />
            ))}
          </div>
        </div>
      </section>
      <div style={{ height: "6000px" }} class="block p-4 bg-ds-primary"></div>
    </>
  );
});
