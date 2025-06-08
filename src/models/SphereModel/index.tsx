import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

type GLTFResult = GLTF & {
  nodes: {
    Outer: Mesh;
    Inner: Mesh;
  };
  materials: {
    base: MeshStandardMaterial;
    Metal: MeshStandardMaterial;
  };
};

export function SphereModel({
  children,
  color = "white",
  roughness = 0,
  ...props
}: any) {
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/sphere.glb`
  ) as unknown as GLTFResult;

  const materialRef = React.useRef<MeshStandardMaterial>(null!);

  useFrame((state, delta) => {
    if (materialRef.current) {
      easing.dampC(materialRef.current.color, color, 0.25, delta);
      easing.dampC(materialRef.current.emissive, color, 0.25, delta);
    }
  });

  React.useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.set(color);
      materialRef.current.emissive.set(color);
    }
  }, []);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Outer.geometry}
        material={materials.base}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          metalness={0.5}
          emissiveIntensity={0.4}
          roughness={roughness}
          map={materials.base.map}
          ref={materialRef}
        />
      </mesh>
      <mesh geometry={nodes.Inner.geometry} material={materials.Metal}>
        <meshStandardMaterial
          color={"#474747"}
          metalness={0.6}
          roughness={0.1}
          map={materials.Metal.map}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(`${process.env.PUBLIC_URL}/models/sphere.glb`);
