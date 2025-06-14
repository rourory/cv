interface PortfolioProject {
  title: string;
  language: "JavaScript" | "Java" | "C#";
  technologies?: Array<Technology>;
  projectLink?: string;
  icon: string;
  description?: string;
}
