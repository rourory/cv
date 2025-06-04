
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Mesh, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    connector: Mesh;
  };
  materials: {
    base: MeshStandardMaterial;
  };
};

export default function ConnectorModel({
  children,
  color = "white",
  roughness = 0,
  ...props
}: any) {
  const materialRef = React.useRef<MeshStandardMaterial>(null!);

  useFrame((state, delta) => {
    if (materialRef.current) {
      easing.dampC(materialRef.current.color, color, 0.25, delta);
    }
  });

  React.useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.set(color);
    }
  }, []);

  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/connector.glb`
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.connector.geometry}
        castShadow
        receiveShadow
        material={materials.base}
        scale={10}
      >
        <meshStandardMaterial
          metalness={0.2}
          roughness={roughness}
          map={materials.base.map}
          ref={materialRef}
        />
        {children}
      </mesh>
    </group>
  );
}

useGLTF.preload(`${process.env.PUBLIC_URL}/models/connector.glb`);
