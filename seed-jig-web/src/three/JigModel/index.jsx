import React, { useRef, useEffect, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import theme from "../../theme";
import modelPath from "/assets/model6.obj?url";

const JigModel = () => {
  const [meshEnabled, setMeshEnabled] = useState(true);
  const refs = [];

  for (let i = 0; i < 4; i++) {
    refs.push(useRef());
  }

  const obj = useLoader(OBJLoader, modelPath);

  useEffect(() => {
    refs.forEach((ref) => {
      ref.current.rotation.x = 0.4;
      ref.current.rotation.y = -2;
      ref.current.position.set(0, -1.2, 0);
    });
  }, []);

  useFrame(() => {
    refs.forEach((ref) => {
      ref.current.rotation.y += 0.001;
    });
  });

  const geometry = useMemo(() => {
    let g = [];
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c;
        g.push(_c.geometry);
      }
    });
    return g;
  }, [obj]);

  return (
    <>
      {geometry.map((geo, index) => (
        <mesh
          key={`mesh-${index}`}
          ref={refs[index]}
          geometry={geo}
          scale={0.06}
          onClick={() => setMeshEnabled(!meshEnabled)}
        >
          <meshPhysicalMaterial
            color={meshEnabled ? "grey" : theme.palette.secondary.main}
            wireframe={meshEnabled}
          />
        </mesh>
      ))}
    </>
  );
};

export default JigModel;
