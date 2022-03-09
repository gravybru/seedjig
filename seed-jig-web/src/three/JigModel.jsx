import React, { useRef, useEffect, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import theme from "../theme";
import modelPath from "/assets/model6.obj?url";

const JigModel = () => {
  const [meshEnabled, setMeshEnabled] = useState(true);
  const ref = useRef();
  const obj = useLoader(OBJLoader, modelPath);

  useEffect(() => {
    ref.current.rotation.x = 0.6;
    ref.current.position.set(0, -0.5, 0);
  }, []);

  useFrame(() => (ref.current.rotation.y += 0.001));

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  return (
    <mesh
      ref={ref}
      geometry={geometry}
      scale={0.06}
      //   onClick={() => setMeshEnabled(!meshEnabled)}
    >
      <meshPhysicalMaterial
        color={meshEnabled ? "grey" : theme.palette.secondary.main}
        wireframe={meshEnabled}
      />
    </mesh>
  );
};

export default JigModel;
