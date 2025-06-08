import React from "react";
import PortfolioProjectBlock from "../../molecules/PortfolioProjectBlock";
import Scrollable from "../../atoms/Scrollable";
import * as technologies from "../../../db/technologies";
import {frontendProjects} from "../../../db/frontend-projects";


const Frontend: React.FC<AnimationPresenceSectionProps> = ({
  initial,
  animate,
  exit,
}) => {
  return (
    <section className="relative flex flex-col z-20 h-[calc(100vh-280px)] min-w-[375px] w-[100vw] text-app pointer-events-none overflow-scroll p-5 md:p-10 gap-5">
      <Scrollable />
      {frontendProjects.map((project,i) => (
        <PortfolioProjectBlock
          key={project.title}
          title={project.title}
          language={project.language}
          technologies={project.technologies}
          animate={animate}
          initial={initial}
          exit={exit}
          order={i}
          icon={project.icon}
          projectLink={project.projectLink}
        >
          {project.description}
        </PortfolioProjectBlock>
      ))}
    </section>
  );
};

export default Frontend;
