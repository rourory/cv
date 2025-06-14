import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { MeshStandardMaterial } from "three";

export default function ConnectorModel({
  children,
  color = "white",
  roughness = 0,
  ...props
}: any) {
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/connector.glb`
  ) as unknown as GLTFResult;

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
