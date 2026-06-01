"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionVariants";

interface Piece {
  id: string;
  geo: () => THREE.BufferGeometry;
  startPos: THREE.Vector3;
  startRot: THREE.Euler;
  endPos:   THREE.Vector3;
  endRot:   THREE.Euler;
  isAccent: boolean;
}

const PIECES: Piece[] = [
  { id:"floor",     geo:()=>new THREE.BoxGeometry(9,0.07,7),       startPos:new THREE.Vector3(-9,-7,4),   startRot:new THREE.Euler(1.1,0.4,0.2), endPos:new THREE.Vector3(0,-2.4,0),      endRot:new THREE.Euler(0,0,0),          isAccent:false },
  { id:"back-wall", geo:()=>new THREE.BoxGeometry(9,6,0.07),       startPos:new THREE.Vector3(8,5,-5),    startRot:new THREE.Euler(0,0.7,0.1),   endPos:new THREE.Vector3(0,0.6,-3.5),    endRot:new THREE.Euler(0,0,0),          isAccent:false },
  { id:"left-wall", geo:()=>new THREE.BoxGeometry(0.07,6,7),       startPos:new THREE.Vector3(-7,4,5),    startRot:new THREE.Euler(0,0,0.5),     endPos:new THREE.Vector3(-4.5,0.6,0),    endRot:new THREE.Euler(0,0,0),          isAccent:false },
  { id:"sofa-body", geo:()=>new THREE.BoxGeometry(2.8,0.7,1.1),    startPos:new THREE.Vector3(6,-4,7),    startRot:new THREE.Euler(0.4,1.6,0.5), endPos:new THREE.Vector3(-1.2,-1.78,-2.2),endRot:new THREE.Euler(0,0,0),         isAccent:true  },
  { id:"sofa-back", geo:()=>new THREE.BoxGeometry(2.8,0.95,0.24),  startPos:new THREE.Vector3(-5,3,6),    startRot:new THREE.Euler(-0.6,-1.3,0.3),endPos:new THREE.Vector3(-1.2,-1.08,-2.67),endRot:new THREE.Euler(0,0,0),       isAccent:true  },
  { id:"sofa-arm-l",geo:()=>new THREE.BoxGeometry(0.24,0.7,1.1),   startPos:new THREE.Vector3(3,6,-4),    startRot:new THREE.Euler(0.9,0.1,-0.4),endPos:new THREE.Vector3(-2.52,-1.78,-2.2),endRot:new THREE.Euler(0,0,0),       isAccent:false },
  { id:"sofa-arm-r",geo:()=>new THREE.BoxGeometry(0.24,0.7,1.1),   startPos:new THREE.Vector3(-2,-6,-5),  startRot:new THREE.Euler(-0.7,0.8,0.6),endPos:new THREE.Vector3(0.12,-1.78,-2.2), endRot:new THREE.Euler(0,0,0),       isAccent:false },
  { id:"table-top", geo:()=>new THREE.BoxGeometry(1.7,0.07,0.95),  startPos:new THREE.Vector3(-3,-5,-6),  startRot:new THREE.Euler(0.2,1.3,0.8), endPos:new THREE.Vector3(1.4,-2.05,-1.6),  endRot:new THREE.Euler(0,0.12,0),    isAccent:true  },
  { id:"table-leg", geo:()=>new THREE.BoxGeometry(0.07,0.45,0.07), startPos:new THREE.Vector3(7,2,3),     startRot:new THREE.Euler(0,0,0.8),     endPos:new THREE.Vector3(0.65,-2.3,-1.2),  endRot:new THREE.Euler(0,0,0),       isAccent:false },
  { id:"lamp-pole", geo:()=>new THREE.CylinderGeometry(0.035,0.035,3.8,6), startPos:new THREE.Vector3(-6,0,4), startRot:new THREE.Euler(0.2,0,-1.4), endPos:new THREE.Vector3(3.2,-0.6,-2.8), endRot:new THREE.Euler(0,0,0), isAccent:false },
  { id:"lamp-shade",geo:()=>new THREE.ConeGeometry(0.45,0.55,8,1,true),    startPos:new THREE.Vector3(2,7,-7),  startRot:new THREE.Euler(1.3,0.5,0.3), endPos:new THREE.Vector3(3.2,1.35,-2.8), endRot:new THREE.Euler(Math.PI,0,0), isAccent:true },
  { id:"win-h-top", geo:()=>new THREE.BoxGeometry(2.6,0.07,0.07),  startPos:new THREE.Vector3(5,-3,-3),   startRot:new THREE.Euler(0.3,0.6,1.1), endPos:new THREE.Vector3(3.5,1.65,-3.46),  endRot:new THREE.Euler(0,0,0),       isAccent:false },
  { id:"win-h-bot", geo:()=>new THREE.BoxGeometry(2.6,0.07,0.07),  startPos:new THREE.Vector3(-1,5,2),    startRot:new THREE.Euler(-0.4,0,0.7),  endPos:new THREE.Vector3(3.5,-0.75,-3.46), endRot:new THREE.Euler(0,0,0),       isAccent:false },
  { id:"win-v-l",   geo:()=>new THREE.BoxGeometry(0.07,2.5,0.07),  startPos:new THREE.Vector3(2,4,-8),    startRot:new THREE.Euler(0.4,0.9,0.1), endPos:new THREE.Vector3(2.22,0.45,-3.46), endRot:new THREE.Euler(0,0,0),       isAccent:false },
  { id:"win-v-r",   geo:()=>new THREE.BoxGeometry(0.07,2.5,0.07),  startPos:new THREE.Vector3(-4,-2,6),   startRot:new THREE.Euler(0.6,0.1,-0.9),endPos:new THREE.Vector3(4.78,0.45,-3.46), endRot:new THREE.Euler(0,0,0),       isAccent:false },
  { id:"deco-a",    geo:()=>new THREE.OctahedronGeometry(0.5,0),    startPos:new THREE.Vector3(5,3,0),     startRot:new THREE.Euler(0.5,0.3,0.7), endPos:new THREE.Vector3(-3.8,1.8,-2.5),   endRot:new THREE.Euler(Math.PI/4,Math.PI/3,0), isAccent:true },
  { id:"deco-b",    geo:()=>new THREE.IcosahedronGeometry(0.38,1),  startPos:new THREE.Vector3(-4,-3,-2),  startRot:new THREE.Euler(-0.5,0.7,-0.4),endPos:new THREE.Vector3(3.8,0.8,-2.5),   endRot:new THREE.Euler(0.3,0.5,0.2),  isAccent:true },
];

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
}

export default function ScrollScene() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);
  const rafRef      = useRef<number>(0);
  const [phase, setPhase] = useState<0|1|2>(0);

  useEffect(() => {
    const canvas  = canvasRef.current!;
    const section = sectionRef.current!;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 80);
    const CAM_START  = new THREE.Vector3(2, 6, 18);
    const CAM_END    = new THREE.Vector3(7, 3.5, 11);
    const LOOK_START = new THREE.Vector3(0, 0, 0);
    const LOOK_END   = new THREE.Vector3(-0.5, -1, -2);
    camera.position.copy(CAM_START);

    scene.add(new THREE.AmbientLight(0xf5eee0, 0.9));
    const sun = new THREE.DirectionalLight(0xffffff, 1.0);
    sun.position.set(6, 8, 6);
    scene.add(sun);
    const fill = new THREE.PointLight(0xF87B54, 0.5, 30);
    fill.position.set(-4, 2, 4);
    scene.add(fill);

    const entries = PIECES.map((piece) => {
      const geo = piece.geo();
      const mat = new THREE.MeshBasicMaterial({ color: piece.isAccent ? 0xF87B54 : 0x405364, wireframe: true, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(piece.startPos);
      mesh.rotation.copy(piece.startRot);
      scene.add(mesh);
      return { mesh, piece };
    });

    const handleScroll = () => {
      const rect  = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / total));
      progressRef.current = p;
      setPhase(p < 0.25 ? 0 : p < 0.65 ? 1 : 2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const setSize = () => {
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight, false);
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);
    setSize();

    const tmpPos = new THREE.Vector3();
    const lookTarget = new THREE.Vector3();

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      const raw = progressRef.current;
      const t   = easeInOutCubic(raw);
      const fadeInT = Math.min(1, raw / 0.15);

      entries.forEach(({ mesh, piece }) => {
        tmpPos.lerpVectors(piece.startPos, piece.endPos, t);
        mesh.position.copy(tmpPos);
        mesh.rotation.x = THREE.MathUtils.lerp(piece.startRot.x, piece.endRot.x, t);
        mesh.rotation.y = THREE.MathUtils.lerp(piece.startRot.y, piece.endRot.y, t);
        mesh.rotation.z = THREE.MathUtils.lerp(piece.startRot.z, piece.endRot.z, t);
        (mesh.material as THREE.MeshBasicMaterial).opacity = fadeInT * (piece.isAccent ? 0.82 : 0.55);
        if (raw < 0.6) { mesh.rotation.x += 0.002*(1-t); mesh.rotation.y += 0.003*(1-t); }
      });

      camera.position.lerpVectors(CAM_START, CAM_END, t);
      lookTarget.lerpVectors(LOOK_START, LOOK_END, t);
      camera.lookAt(lookTarget);
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
      ro.disconnect();
      entries.forEach(({ mesh }) => { mesh.geometry.dispose(); (mesh.material as THREE.Material).dispose(); });
      renderer.dispose();
    };
  }, []);

  const phases = [
    { eyebrow: "", headline: "" },
    { eyebrow: "From concept", headline: "Design\ntakes shape." },
    { eyebrow: "AlphaFirms",   headline: "Brings it\nto life."  },
  ] as const;

  return (
    <section ref={sectionRef} className="relative border-t border-border" style={{ height: "280vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute top-10 left-6 md:left-12 z-20 pointer-events-none">
          <p className="eyebrow">Scroll to explore</p>
          <h2 className="mt-3" style={{ fontFamily:"Poppins",fontSize:"clamp(20px,2.5vw,32px)",fontWeight:500,lineHeight:1.15,letterSpacing:"-0.03em",color:"var(--foreground)",opacity:0.9 }}>
            Watch a space<br />come to life.
          </h2>
        </div>

        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />
        <div className="pointer-events-none absolute inset-0 ambient-center z-10" />

        <div className="absolute inset-0 flex items-center justify-end z-20 pointer-events-none">
          <div className="mr-10 md:mr-20 text-right max-w-[320px]">
            {phase > 0 && (
              <motion.div key={phase} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, ease:[0.25,0.1,0.25,1] }}>
                <p className="eyebrow">{phases[phase].eyebrow}</p>
                <h3 className="mt-3" style={{ fontFamily:"Poppins",fontSize:"clamp(28px,4.5vw,52px)",fontWeight:500,lineHeight:1.05,letterSpacing:"-0.04em",whiteSpace:"pre-line",color:"var(--foreground)" }}>
                  {phases[phase].headline}
                </h3>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
