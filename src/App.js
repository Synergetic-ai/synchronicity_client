import React, { useEffect } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Tools } from "@babylonjs/core/Misc/tools";

import { useSpring, animated } from "react-babylon-spring";
import { Vector3 } from "@babylonjs/core/Maths/math";

import "./styles.css";

const WithSpring = () => {
  const [props, start] = useSpring(() => ({
    target: [0, 0.5, 0]
  }));

  useEffect(() => {
    start({
      target: [1, 0.5, 1],
      delay: 1000,
      configuration: {
        duration: 5000
      }
    });
  });

  return (
    <>
      <animated.arcRotateCamera
        name="camera1"
        target={Vector3.Zero()} // Change to "props.target" to reproduce error
        radius={6}
        alpha={-Math.PI / 2}
        beta={Math.PI / 2.5}
        lowerRadiusLimit={Tools.ToRadians(220)}
        upperRadiusLimit={Tools.ToRadians(480)}
        upperBetaLimit={Tools.ToRadians(50)}
        wheelPrecision={100}
      />

      <animated.box
        name="box1"
        width={1}
        height={1}
        depth={1}
        position={props.target} // The box moves just fine by animating "position"
      />
      <hemisphericLight
        name="light1"
        intensity={0.5}
        direction={Vector3.Up()}
      />

      <ground name="ground1" width={6} height={6} subdivisions={2}></ground>
    </>
  );
};

export const TranslateCamera = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <Engine antialias adaptToDeviceRatio canvasId="sample-canvas">
      <Scene>
        <WithSpring />
      </Scene>
    </Engine>
  </div>
);

export default function App() {
  return (
    <div className="App">
      <TranslateCamera />
    </div>
  );
}
