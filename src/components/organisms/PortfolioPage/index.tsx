import React from "react";
import Scrollable from "../../atoms/Scrollable";
import PortfolioProjectBlock from "../../molecules/PortfolioProjectBlock";
import { FormattedMessage } from "react-intl";


const PortfolioPage: React.FC<IPortfolioSection> = ({
  projects,
  animate,
  initial,
  exit,
}) => {

  return (
    <section className="relative flex flex-col z-20 h-[calc(100vh-280px)] min-w-[375px] w-[100vw] text-app pointer-events-none overflow-scroll p-5 md:p-10 gap-5">
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
           <FormattedMessage id={project.description} />
          {/* {project.description}  */}
        </PortfolioProjectBlock>
      ))}
    </section>
  );
};

export default PortfolioPage;
