import React, { useRef, useEffect, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import modelPath from "/assets/model6.obj?url";
import steel from "/assets/steel.jpg";
import brass from "/assets/brass.jpg";

const JigModel = () => {
  const [meshEnabled, setMeshEnabled] = useState(false);
  const refs = [];

  const obj = useLoader(OBJLoader, modelPath);
  const steelBase = new THREE.TextureLoader().load(steel);
  const brassBase = new THREE.TextureLoader().load(brass);

  useEffect(() => {
    refs.forEach((ref) => {
      ref.current.rotation.x = 0.4;
      ref.current.rotation.y = -6.5;
      ref.current.position.set(0, -0.6, 0);
    });
  }, []);

  useFrame(() => {
    refs.forEach((ref) => {
      ref.current.rotation.y += meshEnabled ? 0.001 : 0.003;
    });
  });

  const meshes = [];

  obj.traverse((c) => {
    if (c.type === "Mesh") {
      const _c = c;
      meshes.push(_c.geometry);
      refs.push(useRef());
    }
  });

  const textures = [brassBase, steelBase, brassBase, steelBase];

  return (
    <>
      {meshes.map((geo, index) => (
        <mesh
          key={`mesh-${index}`}
          ref={refs[index]}
          geometry={geo}
          scale={0.055}
          onClick={() => setMeshEnabled(!meshEnabled)}
        >
          <meshPhysicalMaterial
            color={meshEnabled ? "black" : new THREE.Color(0xffffff)}
            wireframe={meshEnabled}
            clearcoat={0.5}
            map={meshEnabled ? null : textures[index]}
          />
        </mesh>
      ))}
    </>
  );
};

export default JigModel;
