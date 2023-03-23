import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";

const Technologies = () => {
  return (
    <div
      style={{
        height: "700px",
        width: "100%",
        backgroundColor: "#04293A",
        position: "absolute",
        marginTop: "600px",
      }}
    >
      <TagCloud
        style={{
          color: "#64ffda",
          display: "flex",
          marginLeft: "100px",
          marginTop: "200px",
        }}
        options={() => ({
          radius: Math.min(500) / 2,
          maxSpeed: "fast",
        })}
        onClick={() => alert()}
        onClickOptions={{ passive: true }}
      >
        {[
          "VSCode",
          "TypeScript",
          "React",
          "Preact",
          "Parcel",
          "Jest",
          "Next",
          "ESLint",
          "Framer Motion",
          "Three.js",
        ]}
      </TagCloud>
    </div>
  );
};

export default Technologies;
