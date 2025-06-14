interface IPortfolioProjectBlock
  extends React.PropsWithChildren,
    AnimationPresenceSectionProps {
  icon?: string;
  title: string;
  language: "JavaScript" | "Java" | "C#";
  technologies?: Array<Technology>;
  order: number;
  projectLink?: string;
}
