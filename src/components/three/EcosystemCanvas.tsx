"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

export type NodeKey = "customers" | "designers" | "suppliers";

const BLUE   = "#F87B54";   /* coral — center / active */
const BLUE2  = "#fa9a7a";   /* lighter coral — hover    */
const ORANGE = "#405364";   /* slate — outer nodes      */

const NODE_POSITIONS: Record<NodeKey | "center", [number, number, number]> = {
  center:    [0, 0, 0],
  customers: [0, 3.4, 0],
  designers: [2.94, -1.7, 0],
  suppliers: [-2.94, -1.7, 0],
};

const NODE_META: Record<NodeKey, { label: string; geo: "sphere" | "octa" | "tetra" }> = {
  customers: { label: "Customers", geo: "sphere" },
  designers: { label: "Designers", geo: "octa"   },
  suppliers: { label: "Suppliers", geo: "tetra"  },
};

function FlowParticles({ start, end, count = 6 }: { start: [number,number,number]; end: [number,number,number]; count?: number }) {
  const ref    = useRef<THREE.Points>(null!);
  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const s = useMemo(() => new THREE.Vector3(...start), [start]);
  const e = useMemo(() => new THREE.Vector3(...end),   [end]);
  const tmp = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.28;
    for (let i = 0; i < count; i++) {
      const p = ((t + i / count) % 1);
      tmp.lerpVectors(s, e, p);
      positions[i * 3]     = tmp.x;
      positions[i * 3 + 1] = tmp.y;
      positions[i * 3 + 2] = tmp.z;
    }
    const attr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    attr.set(positions);
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#F87B54" size={0.08} transparent opacity={0.85} />
    </points>
  );
}

function OuterNode({ nodeKey, position, meta, isActive, onHover }: {
  nodeKey: NodeKey;
  position: [number,number,number];
  meta: { label: string; geo: "sphere"|"octa"|"tetra" };
  isActive: boolean;
  onHover: (k: NodeKey) => void;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    const t = isActive ? 1.25 : 1.0;
    ref.current.scale.lerp(new THREE.Vector3(t, t, t), delta * 8);
    ref.current.rotation.y += delta * 0.4;
  });

  return (
    <group position={position}>
      <mesh ref={ref}
        onPointerOver={(e) => { e.stopPropagation(); onHover(nodeKey); }}
      >
        {meta.geo === "sphere" && <sphereGeometry    args={[0.44, 20, 20]} />}
        {meta.geo === "octa"   && <octahedronGeometry  args={[0.52, 0]} />}
        {meta.geo === "tetra"  && <tetrahedronGeometry args={[0.56, 0]} />}
        <meshStandardMaterial
          color={isActive ? BLUE2 : ORANGE}
          wireframe={!isActive}
          emissive={isActive ? BLUE : "#000000"}
          emissiveIntensity={isActive ? 0.35 : 0}
          transparent
          opacity={isActive ? 0.95 : 0.75}
        />
      </mesh>
      <Html center distanceFactor={9} style={{ pointerEvents: "none" }}>
        <div style={{
          marginTop: 36,
          fontFamily: "Poppins, sans-serif",
          fontSize: 10,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: isActive ? "var(--accent)" : "var(--foreground)",
          whiteSpace: "nowrap",
          transition: "color 0.2s",
          opacity: 0.85,
        }}>
          {meta.label}
        </div>
      </Html>
    </group>
  );
}

function CenterNode() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.28;
    ref.current.rotation.y += delta * 0.44;
  });
  return (
    <group position={NODE_POSITIONS.center}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.78, 2]} />
        <meshStandardMaterial color={BLUE} emissive={BLUE} emissiveIntensity={0.2} wireframe transparent opacity={0.9} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.0, 1]} />
        <meshBasicMaterial color={BLUE} wireframe transparent opacity={0.07} />
      </mesh>
      <Html center distanceFactor={9} style={{ pointerEvents: "none" }}>
        <div style={{ marginTop: 52, fontFamily: "Poppins, sans-serif", fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", whiteSpace: "nowrap", opacity: 0.9 }}>
          Alpha Firms
        </div>
      </Html>
    </group>
  );
}

function NetworkScene({ active, setActive }: { active: NodeKey; setActive: (k: NodeKey) => void }) {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((_, delta) => { groupRef.current.rotation.y += delta * 0.12; });

  const nodeKeys: NodeKey[] = ["customers", "designers", "suppliers"];
  const center = NODE_POSITIONS.center;

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 6]} intensity={1.2} color={BLUE2} />
      <pointLight position={[-4, -4, 3]} intensity={0.4} color="#ffffff" />
      <CenterNode />
      {nodeKeys.map((k) => {
        const pos = NODE_POSITIONS[k];
        return (
          <group key={k}>
            <OuterNode nodeKey={k} position={pos} meta={NODE_META[k]} isActive={active === k} onHover={setActive} />
            <Line points={[center, pos]} color={active === k ? BLUE : "#b05525"} lineWidth={active === k ? 1.4 : 0.7} transparent opacity={active === k ? 0.7 : 0.3} />
            <FlowParticles start={center} end={pos} count={7} />
          </group>
        );
      })}
    </group>
  );
}

export default function EcosystemCanvas({ active, onHover }: { active: NodeKey; onHover: (k: NodeKey) => void }) {
  return (
    <Canvas
      camera={{ fov: 48, near: 0.1, far: 60, position: [0, 0, 9] }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      dpr={[1, 1.5]}
    >
      <NetworkScene active={active} setActive={onHover} />
    </Canvas>
  );
}
