import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";
import React, { useEffect } from "react";
import { easing } from "maath";

type GLTFResult = GLTF & {
  nodes: {
    Icosphere: THREE.Mesh;
  };
  materials: {
    base: THREE.MeshStandardMaterial;
  };
};

export default function Icosahedron({
  children,
  color = "white",
  roughness = 0,
  ...props
}: any) {
  const { nodes, materials } = useGLTF(
    "/models/icosphere.glb"
  ) as unknown as GLTFResult;

  const materialRef = React.useRef<MeshStandardMaterial>(null!);

  useFrame((state, delta) => {
    if (materialRef.current) {
      easing.dampC(materialRef.current.color, color, 0.25, delta);
    }
  });

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.set(color);
    }
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        scale={0.8}
        geometry={nodes.Icosphere.geometry}
        material={materials.base}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          // color={color}
          metalness={0.2}
          roughness={roughness}
          map={materials.base.map}
          ref={materialRef}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/icosphere.glb");
