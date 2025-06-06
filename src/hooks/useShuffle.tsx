import React from "react";

const accents: string[] = [
  "#4060ff",
  "#20ffa0",
  "#ff4060",
  "#ffcc00",
  "#ff00ff",
  "#ff8000",
  "#8000ff",
];
const shuffle: Shuffle = (accent = 0) => [
  { color: "green", roughness: 0.1 },
  { color: "cyan", roughness: 0.15 },
  { color: "black", roughness: 0.1 },
  { color: "white", roughness: 0.1 },
  { color: "grey", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.01, accent: true },
  { color: accents[accent], roughness: 0.05, accent: true },
  { color: accents[accent], roughness: 0.05, accent: true },
];

export const useShuffle = () => {
  const [accent, click] = React.useReducer(
    (state) => ++state % accents.length,
    0
  );

  const connectors = React.useMemo(() => shuffle(accent), [accent]);

  return { connectors, click };
};
