import React from "react";
import Scrollable from "../../atoms/Scrollable";
import PortfolioProjectBlock from "../../molecules/PortfolioProjectBlock";
import { useI18nContext } from "../../../i18n/i18n-react";

const PortfolioPage: React.FC<IPortfolioSection> = ({
  projects,
  animate,
  initial,
  exit,
}) => {
  const { LL } = useI18nContext();

  return (
    <section className="relative flex flex-col z-20 h-[calc(100vh-230px)] min-w-[320px] w-[100vw] text-app pointer-events-none overflow-scroll p-5 md:p-10 gap-5">
      <Scrollable />
      {projects.map((project, i) => (
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
          {project.description ? LL[project.description as keyof typeof LL]() : "No Content"}
        </PortfolioProjectBlock>
      ))}
    </section>
  );
};

export default PortfolioPage;
