interface Technology {
  icon?: string;
  technology: string;
  link?: string;
}

interface InfoBlockData {
  technology: Technology;
  level: "beginner" | "intermediate" | "advanced";
}

interface IInfoBlock extends React.PropsWithChildren, IComponentWithClassName {
  icon?: string;
  localizedTitleId: string;
  techlologies?: Array<InfoBlockData>;
}
