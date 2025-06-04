declare interface AnimationPresenceSectionProps {
  initial: boolean | TargetAndTransition | VariantLabels | undefined;
  animate:
    | boolean
    | TargetAndTransition
    | VariantLabels
    | AnimationControls
    | undefined;
  exit: TargetAndTransition | VariantLabels | undefined;
}
