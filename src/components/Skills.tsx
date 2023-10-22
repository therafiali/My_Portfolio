import { getSkills } from "@/utils/sanity-utils";
import { Skill } from "@/utils/types/Skill";
import React from "react";
import Motion from "./Motion";
import SkillCircle from "./SkillsCircle";

type Props = {};

const Skills = async (props: Props) => {
  const skillData: Skill[] = await getSkills();

  return (
    <section className="relative h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24  mt-20 md:mt-0">
      <h1 className="absolute top-14 text-2xl uppercase tracking-wider md:tracking-[20px] text-violet-500">
        skills
      </h1>
      <Motion delay={1} direction={""}>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
          {skillData.map((s: Skill, index: number) => (
            <SkillCircle key={index} props={s} />
          ))}
        </div>
      </Motion>
      <div className=" mx-auto w-3/4  md:hidden grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 gap-4 md:gap-8">
        {skillData.map((s: Skill, index: number) => (
          <div className=" flex items-center justify-center">
            <SkillCircle key={index} props={s} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
