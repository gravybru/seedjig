import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import JigModel from "../JigModel";
import { Typography } from "@mui/material";

const ThreeCanvas = () => {
  const { width } = useWindowDimensions();

  const modelFrameStyles = {
    width: width < 700 ? "100vw" : "50vw",
    height: "400px",
  };

  return (
    <div style={modelFrameStyles}>
      <ErrorBoundary
        FallbackComponent={() => (
          <div style={modelFrameStyles}>error loading seed jig model</div>
        )}
      >
        <Suspense fallback={<div style={modelFrameStyles}></div>}>
          <Canvas style={modelFrameStyles}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 5]} />
            <OrbitControls makeDefault dampingFactor={0.3} />
            <JigModel />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
      <Typography variant="caption" style={{ paddingLeft: "10px" }}>
        Click / drag / zoom to explore
      </Typography>
    </div>
  );
};

export default ThreeCanvas;
