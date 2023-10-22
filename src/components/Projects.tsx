import React from "react";
import Project from "./Project";
import Motion from "./Motion";
import Link from "next/link";
import { ProjectType } from "@/utils/types/Project";
import { getProjects } from "@/utils/sanity-utils";

type Props = {};

const Projects = async (props: Props) => {
  const projectData: ProjectType[] = await getProjects();

  return (
    <section className="relative h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24   md:mt-0">
      <h1 className="absolute  top-14 text-2xl uppercase tracking-wider md:tracking-[20px] text-violet-500">
        projects
      </h1>
      <Motion delay={1} direction={""}>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectData.slice(1, 5).map((p: ProjectType, index: number) => (
            <Project key={index} props={p} />
          ))}
        </div>
      </Motion>
      <div className="block md:hidden absolute top-4 ">
        <div className="grid md:hidden grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {projectData.slice(2, 6).map((p: ProjectType, index: number) => (
            <Project key={index} props={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            type="submit"
            className=" bg-gradient-to-r from-violet-500 to-pink-500 p-3 rounded-full font-bold w-32 text-white hover:opacity-90"
          >
            <Link href="/projects">See more...</Link>
          </button>

        </div>
      </div>
      <button
            type="submit"
            className="hidden md:block bg-gradient-to-r from-violet-500 to-pink-500 p-3 rounded-full font-bold w-32 text-white hover:opacity-90"
          >
            <Link href="/projects">See more...</Link>
          </button>
    </section>
  );
};

export default Projects;
