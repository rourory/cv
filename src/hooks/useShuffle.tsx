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
  { color: "#444", roughness: 0 },
  { color: "#555", roughness: 0.6 },
  { color: "#666", roughness: 0.4 },
  { color: "green", roughness: 0.1 },
  { color: "cyan", roughness: 0.5 },
  { color: "black", roughness: 0.7 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.9, accent: true },
  { color: accents[accent], roughness: 0.3, accent: true },
];

export const useShuffle = () => {
  const [accent, click] = React.useReducer(
    (state) => ++state % accents.length,
    0
  );

  const connectors = React.useMemo(() => shuffle(accent), [accent]);

  return { connectors, click };
};
