import * as technologies from "./technologies";

const printiqueApp: PortfolioProject = {
  title: "Printique",
  language: "JavaScript",
  projectLink: "https://printiqueapp.vercel.app/services/sweatshot",
  icon: "apps/printique.webp",
  technologies: [
    technologies.typescript,
    technologies.nextJs,
    technologies.reactJs,
    technologies.shadcn,
    technologies.zustand,
    technologies.blender,
    technologies.threeJs,
    technologies.vscode,
    technologies.postgresql,
    technologies.prisma,
  ],
  description: "projects.frontend.printiqueApp",
};

const telephonyApp: PortfolioProject = {
  title: "Telephony",
  language: "JavaScript",
  projectLink: "https://rourory.github.io/telephony-demo",
  icon: "apps/telephony.svg",
  technologies: [
    technologies.typescript,
    technologies.electronJs,
    technologies.reactJs,
    technologies.reduxToolkit,
    technologies.devExtremeUI,
    technologies.materialUI,
    technologies.vscode,
  ],
  description: "projects.frontend.telephonyApp",
};

export const frontendProjects: Array<PortfolioProject> = [
  printiqueApp,
  telephonyApp,
];
