import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import Pointer from "../../atoms/Pointer";
import Connector from "../../atoms/Connector";
import {
  PerformanceMonitor,
} from "@react-three/drei";
import {
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import ModelLoader from "../../molecules/ModelLoader";
import React from "react";

const Scene = (props: any) => {
  const [effects, setEffects] = React.useState(true);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      {...props}
    >
      <PerformanceMonitor
        threshold={0.5}
        onDecline={() => {
          setEffects(false);
        }}
      />
      <Suspense fallback={<ModelLoader />}>
        <color attach="background" args={["#141622"]} />
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <Physics /*debug*/ gravity={[0, 0, 0]}>
          <Pointer />
          {
            props.connectors.map((props: any, i:number) => <Connector key={i} {...props} ></Connector>) /* prettier-ignore */
          }
        </Physics>
        {effects && (
          <EffectComposer enableNormalPass={false} multisampling={8}>
            <DepthOfField
              target={[0, 10, 30]}
              focalLength={0.4}
              bokehScale={4}
              height={700}
            />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        )}
      </Suspense>
    </Canvas>
  );
};

export default Scene;
