import * as technologies from "./technologies";

const telephonyDemoApi: PortfolioProject = {
  title: "Telephony Demo API",
  language: "JavaScript",
  projectLink: "https://telephony-demo-api.vercel.app/",
  icon: "apps/telephony.svg",
  technologies: [
    technologies.typescript,
    technologies.nextJs,
    technologies.prisma,
    technologies.postgresql,
    technologies.nodeJs,
    technologies.vscode,
  ],
  description: "projectsBackendTelephonyDemoApi",
};

const telephonyServer: PortfolioProject = {
  title: "Telephony Server",
  language: "Java",
  icon: "apps/telephony.svg",
  technologies: [
    technologies.springBoot3,
    technologies.springDataJPA,
    technologies.springWeb,
    technologies.springSecurity,
    technologies.swaggerOpenAPI,
    technologies.gradle,
    technologies.hibernate5,
    technologies.queryDSL,
    technologies.postgresql,
    technologies.liquibase,
    technologies.intellijidea,
  ],
  description: "projectsBackendTelephonyServer",
};

const telephonyRemoteTerminal: PortfolioProject = {
  title: "Telephony Service",
  language: "C#",
  icon: "apps/telephony.svg",
  technologies: [
    technologies.vs2022,
    technologies.voskAPI,
    technologies.flaUI,
    technologies.nAudio,
    technologies.fleck,
  ],
  description: "projectsBackendTelephonyRemoteTerminal",
};

export const backendProjects: Array<PortfolioProject> = [
  telephonyDemoApi,
  telephonyServer,
  telephonyRemoteTerminal,
];
