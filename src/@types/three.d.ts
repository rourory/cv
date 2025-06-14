type Shuffle = (accent?: number) => Array<IShuffleObject>;

interface IShuffleObject {
  color: string;
  roughness: number;
}

type GLTFResult = GLTF & {
  nodes: {
    connector: Mesh;
  };
  materials: {
    base: MeshStandardMaterial;
  };
};
