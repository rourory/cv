import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import React, { Suspense } from "react";
import Pointer from "../../atoms/Pointer";
import Connector from "../../atoms/Connector";
import Icosahedron from "../../../models/Icosahedron";
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import ModelLoader from "../../molecules/ModelLoader";

const Scene = (props: any) => {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      {...props}
    >
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
            props.connectors.map((props: any, i:number) => <Connector key={i} {...props} />) /* prettier-ignore */
          }
          <Connector position={[10, 10, 5]}>
            <Icosahedron>
              <MeshTransmissionMaterial
                clearcoat={1}
                thickness={0.1}
                anisotropicBlur={0.1}
                chromaticAberration={0.1}
                samples={8}
                resolution={512}
              />
            </Icosahedron>
          </Connector>
        </Physics>
        <EffectComposer enableNormalPass={false} multisampling={8}>
          <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
        </EffectComposer>
        <Environment resolution={256} preset="studio" environmentIntensity={0.2}>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            <Lightformer
              form="circle"
              intensity={4}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={2}
            />
            <Lightformer
              form="circle"
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, 1, -1]}
              scale={2}
            />
            <Lightformer
              form="circle"
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, -1, -1]}
              scale={2}
            />
            <Lightformer
              form="circle"
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[10, 1, 0]}
              scale={8}
            />
          </group>
        </Environment>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
