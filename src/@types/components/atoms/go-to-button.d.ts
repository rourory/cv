interface IGoToButton
  extends React.PropsWithChildren,
    IComponentWithClassName {
  direction: "left" | "right" | "up" | "down" | "none";
  onClick?: () => void;
}
