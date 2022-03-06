import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useWindowDimensions from "../hooks/useWindowDimensions";
import theme from "../theme";

function Box(props) {
  const ref = useRef();
  const [mesh, setMesh] = useState(true);
  useFrame(() => (ref.current.rotation.y += 0.002));

  return (
    <mesh {...props} ref={ref} scale={1} onClick={() => setMesh(!mesh)}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial
        wireframe={mesh}
        color={mesh ? "black" : theme.palette.secondary.main}
      />
    </mesh>
  );
}

const Model = () => {
  const { width, height } = useWindowDimensions();

  return (
    <Canvas style={{ width: width < 700 ? "100vw" : "50vw", height: "400px" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0.2, 0]} />
      <OrbitControls makeDefault dampingFactor={0.3} />
    </Canvas>
  );
};

export default Model;
