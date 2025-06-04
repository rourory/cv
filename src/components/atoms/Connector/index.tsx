import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React from "react";
import { MathUtils, PointLight, Vector3 } from "three";
import Icosahedron from "../../../models/Icosahedron";
import { easing } from "maath";
import ConnectorModel from "../../../models/ConnectorModel";

export default function Connector({
  position,
  children,
  vec = new Vector3(),
  scale,
  r = MathUtils.randFloatSpread,
  accent,
  ...props
}: any) {
  const api = React.useRef<any>(null);
  const pointLightRef = React.useRef<PointLight>(null);

  const pos = React.useMemo(() => position || [r(10), r(10), r(10)], []);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
    );
    if (pointLightRef.current) {
      easing.dampC(pointLightRef.current.color, props.color, 0.25, delta);
    }
  });

  React.useEffect(() => {
    if (pointLightRef.current) {
      pointLightRef.current.color.set(props.color);
    }
  }, []);
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <ConnectorModel {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}
