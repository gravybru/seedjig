import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import JigModel from "../JigModel";
import "./index.css";

const ThreeCanvas = () => {
  const { width } = useWindowDimensions();

  const modelFrameStyles = {
    width: width < 700 ? "100vw" : "50vw",
  };

  return (
    <div style={modelFrameStyles} className="canvas-fade">
      <ErrorBoundary
        FallbackComponent={() => (
          <div style={modelFrameStyles}>error loading seed jig model</div>
        )}
      >
        <Suspense fallback={<div style={modelFrameStyles}></div>}>
          <Canvas style={modelFrameStyles}>
            <ambientLight intensity={0.2} />
            <pointLight position={[5, 10, 5]} intensity={0.3} />
            <pointLight position={[2, -10, 2]} intensity={0.2} />
            <OrbitControls makeDefault dampingFactor={0.1} />
            <JigModel />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ThreeCanvas;
