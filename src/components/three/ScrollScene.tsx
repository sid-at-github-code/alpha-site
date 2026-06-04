"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Room pieces ────────────────────────────────────────────── */
interface Piece {
  id: string;
  geo: () => THREE.BufferGeometry;
  startPos: THREE.Vector3;
  startRot: THREE.Euler;
  endPos: THREE.Vector3;
  endRot: THREE.Euler;
  isAccent: boolean;
}

const PIECES: Piece[] = [
  /* ── Structure ── */
  { id:"floor",        geo:()=>new THREE.BoxGeometry(9,0.07,7),              startPos:new THREE.Vector3(-9,-7,4),    startRot:new THREE.Euler(1.1,0.4,0.2),   endPos:new THREE.Vector3(0,-2.4,0),          endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"back-wall",    geo:()=>new THREE.BoxGeometry(9,6,0.07),              startPos:new THREE.Vector3(8,5,-5),     startRot:new THREE.Euler(0,0.7,0.1),     endPos:new THREE.Vector3(0,0.6,-3.5),        endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"left-wall",    geo:()=>new THREE.BoxGeometry(0.07,6,7),              startPos:new THREE.Vector3(-7,4,5),     startRot:new THREE.Euler(0,0,0.5),       endPos:new THREE.Vector3(-4.5,0.6,0),        endRot:new THREE.Euler(0,0,0),             isAccent:false },

  /* ── Rug ── */
  { id:"rug",          geo:()=>new THREE.BoxGeometry(4.6,0.025,3.2),         startPos:new THREE.Vector3(0,-11,0),    startRot:new THREE.Euler(0.4,0.2,0),     endPos:new THREE.Vector3(-0.4,-2.385,-0.6),  endRot:new THREE.Euler(0,0.1,0),           isAccent:false },

  /* ── Sofa ── */
  { id:"sofa-body",    geo:()=>new THREE.BoxGeometry(2.8,0.7,1.1),           startPos:new THREE.Vector3(6,-4,7),     startRot:new THREE.Euler(0.4,1.6,0.5),   endPos:new THREE.Vector3(-1.2,-1.78,-2.2),   endRot:new THREE.Euler(0,0,0),             isAccent:true  },
  { id:"sofa-back",    geo:()=>new THREE.BoxGeometry(2.8,0.95,0.24),         startPos:new THREE.Vector3(-5,3,6),     startRot:new THREE.Euler(-0.6,-1.3,0.3), endPos:new THREE.Vector3(-1.2,-1.08,-2.67),  endRot:new THREE.Euler(0,0,0),             isAccent:true  },
  { id:"sofa-arm-l",   geo:()=>new THREE.BoxGeometry(0.24,0.7,1.1),          startPos:new THREE.Vector3(3,6,-4),     startRot:new THREE.Euler(0.9,0.1,-0.4),  endPos:new THREE.Vector3(-2.52,-1.78,-2.2),  endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"sofa-arm-r",   geo:()=>new THREE.BoxGeometry(0.24,0.7,1.1),          startPos:new THREE.Vector3(-2,-6,-5),   startRot:new THREE.Euler(-0.7,0.8,0.6),  endPos:new THREE.Vector3(0.12,-1.78,-2.2),   endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"cushion",      geo:()=>new THREE.BoxGeometry(0.55,0.18,0.42),        startPos:new THREE.Vector3(-6,5,2),     startRot:new THREE.Euler(0.4,1.2,0.5),   endPos:new THREE.Vector3(-0.2,-1.37,-2.48),  endRot:new THREE.Euler(0,0.2,0.05),        isAccent:true  },
  { id:"cushion-2",    geo:()=>new THREE.BoxGeometry(0.48,0.16,0.38),        startPos:new THREE.Vector3(5,6,-3),     startRot:new THREE.Euler(-0.5,0.9,0.3),  endPos:new THREE.Vector3(-1.5,-1.38,-2.47),  endRot:new THREE.Euler(0,-0.15,0.04),      isAccent:true  },

  /* ── Coffee table ── */
  { id:"table-top",    geo:()=>new THREE.BoxGeometry(1.7,0.07,0.95),         startPos:new THREE.Vector3(-3,-5,-6),   startRot:new THREE.Euler(0.2,1.3,0.8),   endPos:new THREE.Vector3(1.4,-2.05,-1.6),    endRot:new THREE.Euler(0,0.12,0),          isAccent:true  },
  { id:"table-leg",    geo:()=>new THREE.BoxGeometry(0.07,0.45,0.07),        startPos:new THREE.Vector3(7,2,3),      startRot:new THREE.Euler(0,0,0.8),       endPos:new THREE.Vector3(0.65,-2.3,-1.2),    endRot:new THREE.Euler(0,0,0),             isAccent:false },

  /* ── Floor lamp ── */
  { id:"lamp-pole",    geo:()=>new THREE.CylinderGeometry(0.035,0.035,3.8,8),startPos:new THREE.Vector3(-6,0,4),     startRot:new THREE.Euler(0.2,0,-1.4),    endPos:new THREE.Vector3(3.2,-0.6,-2.8),     endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"lamp-shade",   geo:()=>new THREE.ConeGeometry(0.45,0.55,8,1,true),   startPos:new THREE.Vector3(2,7,-7),     startRot:new THREE.Euler(1.3,0.5,0.3),   endPos:new THREE.Vector3(3.2,1.35,-2.8),     endRot:new THREE.Euler(Math.PI,0,0),       isAccent:true  },

  /* ── Side table ── */
  { id:"side-tbl",     geo:()=>new THREE.BoxGeometry(0.65,0.48,0.5),         startPos:new THREE.Vector3(8,-3,3),     startRot:new THREE.Euler(0,0.8,0.3),     endPos:new THREE.Vector3(0.55,-2.16,-2.55),  endRot:new THREE.Euler(0,0,0),             isAccent:false },

  /* ── Table lamp (on side table) ── */
  { id:"tlamp-base",   geo:()=>new THREE.CylinderGeometry(0.11,0.14,0.35,8), startPos:new THREE.Vector3(-7,4,-2),    startRot:new THREE.Euler(0.5,0,0.3),     endPos:new THREE.Vector3(0.55,-1.745,-2.55), endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"tlamp-pole",   geo:()=>new THREE.CylinderGeometry(0.025,0.025,0.7,6),startPos:new THREE.Vector3(3,-5,-4),    startRot:new THREE.Euler(0.2,0.4,-0.8),  endPos:new THREE.Vector3(0.55,-1.22,-2.55),  endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"tlamp-shade",  geo:()=>new THREE.ConeGeometry(0.3,0.32,8,1,true),    startPos:new THREE.Vector3(-3,6,5),     startRot:new THREE.Euler(-1.2,0.3,0.5),  endPos:new THREE.Vector3(0.55,-0.71,-2.55),  endRot:new THREE.Euler(Math.PI,0,0),       isAccent:true  },

  /* ── Bookshelf ── */
  { id:"shelf-body",   geo:()=>new THREE.BoxGeometry(0.28,2.5,1.8),          startPos:new THREE.Vector3(-9,2,0),     startRot:new THREE.Euler(0,0,0.4),       endPos:new THREE.Vector3(-4.36,-1.15,-1.2),  endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"shelf-p1",     geo:()=>new THREE.BoxGeometry(0.28,0.04,1.8),         startPos:new THREE.Vector3(4,7,-3),     startRot:new THREE.Euler(0.6,0,0),       endPos:new THREE.Vector3(-4.36,-0.1,-1.2),   endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"shelf-p2",     geo:()=>new THREE.BoxGeometry(0.28,0.04,1.8),         startPos:new THREE.Vector3(-5,-6,4),    startRot:new THREE.Euler(0,0.5,0.3),     endPos:new THREE.Vector3(-4.36,0.9,-1.2),    endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"shelf-book",   geo:()=>new THREE.BoxGeometry(0.24,0.52,0.18),        startPos:new THREE.Vector3(-8,-4,5),    startRot:new THREE.Euler(0.3,-0.4,0.6),  endPos:new THREE.Vector3(-4.36,0.17,-1.55),  endRot:new THREE.Euler(0,0,0),             isAccent:true  },

  /* ── Art frame on back wall ── */
  { id:"art-frame",    geo:()=>new THREE.BoxGeometry(2.2,1.4,0.04),          startPos:new THREE.Vector3(3,8,-2),     startRot:new THREE.Euler(0.3,-0.5,0.1),  endPos:new THREE.Vector3(-0.8,0.9,-3.46),    endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"art-mat",      geo:()=>new THREE.BoxGeometry(1.9,1.1,0.04),          startPos:new THREE.Vector3(2,8,-1),     startRot:new THREE.Euler(0.3,-0.5,0.1),  endPos:new THREE.Vector3(-0.8,0.9,-3.44),    endRot:new THREE.Euler(0,0,0),             isAccent:true  },

  /* ── Potted plant ── */
  { id:"pot",          geo:()=>new THREE.CylinderGeometry(0.17,0.13,0.35,8), startPos:new THREE.Vector3(6,-2,6),     startRot:new THREE.Euler(0.3,0,-0.5),    endPos:new THREE.Vector3(-3.6,-2.23,-0.3),   endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"plant",        geo:()=>new THREE.SphereGeometry(0.44,8,7),           startPos:new THREE.Vector3(-2,8,3),     startRot:new THREE.Euler(0,0,0),         endPos:new THREE.Vector3(-3.6,-1.58,-0.3),   endRot:new THREE.Euler(0,0,0),             isAccent:true  },

  /* ── Pendant ceiling light ── */
  { id:"pendant-cord", geo:()=>new THREE.CylinderGeometry(0.015,0.015,1.6,4),startPos:new THREE.Vector3(1,10,-1),    startRot:new THREE.Euler(0.4,0,0.2),     endPos:new THREE.Vector3(0,3.1,-1.2),        endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"pendant",      geo:()=>new THREE.CylinderGeometry(0.48,0.28,0.32,12,1,true), startPos:new THREE.Vector3(-1,9,2), startRot:new THREE.Euler(1.2,0.3,0), endPos:new THREE.Vector3(0,2.4,-1.2),        endRot:new THREE.Euler(0,0,0),             isAccent:true  },

  /* ── Window ── */
  { id:"win-h-top",    geo:()=>new THREE.BoxGeometry(2.6,0.07,0.07),         startPos:new THREE.Vector3(5,-3,-3),    startRot:new THREE.Euler(0.3,0.6,1.1),   endPos:new THREE.Vector3(3.5,1.65,-3.46),    endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"win-h-bot",    geo:()=>new THREE.BoxGeometry(2.6,0.07,0.07),         startPos:new THREE.Vector3(-1,5,2),     startRot:new THREE.Euler(-0.4,0,0.7),    endPos:new THREE.Vector3(3.5,-0.75,-3.46),   endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"win-v-l",      geo:()=>new THREE.BoxGeometry(0.07,2.5,0.07),         startPos:new THREE.Vector3(2,4,-8),     startRot:new THREE.Euler(0.4,0.9,0.1),   endPos:new THREE.Vector3(2.22,0.45,-3.46),   endRot:new THREE.Euler(0,0,0),             isAccent:false },
  { id:"win-v-r",      geo:()=>new THREE.BoxGeometry(0.07,2.5,0.07),         startPos:new THREE.Vector3(-4,-2,6),    startRot:new THREE.Euler(0.6,0.1,-0.9),  endPos:new THREE.Vector3(4.78,0.45,-3.46),   endRot:new THREE.Euler(0,0,0),             isAccent:false },

  /* ── Decorative objects ── */
  { id:"deco-a",       geo:()=>new THREE.OctahedronGeometry(0.5,0),           startPos:new THREE.Vector3(5,3,0),      startRot:new THREE.Euler(0.5,0.3,0.7),   endPos:new THREE.Vector3(-3.8,1.8,-2.5),     endRot:new THREE.Euler(Math.PI/4,Math.PI/3,0), isAccent:true },
  { id:"deco-b",       geo:()=>new THREE.IcosahedronGeometry(0.38,1),         startPos:new THREE.Vector3(-4,-3,-2),   startRot:new THREE.Euler(-0.5,0.7,-0.4), endPos:new THREE.Vector3(3.8,0.8,-2.5),      endRot:new THREE.Euler(0.3,0.5,0.2),       isAccent:true  },
];

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
}

/* ─── Phase copy ─────────────────────────────────────────────── */
const PHASES = [
  { n: "01", eyebrow: "Scroll to explore", headline: "Watch a space\ncome to life." },
  { n: "02", eyebrow: "Piece by piece",    headline: "Find the right\npartners."         },
  { n: "03", eyebrow: "AlphaFirms",        headline: "Build with\nconfidence."             },
] as const;

export default function ScrollScene() {
  const sectionRef    = useRef<HTMLDivElement>(null);
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const progressBarRef= useRef<HTMLDivElement>(null);
  const progressRef   = useRef(0);
  const rafRef        = useRef(0);
  const [phase, setPhase] = useState<0|1|2>(0);

  useEffect(() => {
    const canvas  = canvasRef.current!;
    const section = sectionRef.current!;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0d1b2a, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    /* ── Scene ── */
    const scene  = new THREE.Scene();
    scene.fog    = new THREE.FogExp2(0x0d1b2a, 0.032);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 80);
    const CAM_START  = new THREE.Vector3(2, 6, 18);
    const CAM_END    = new THREE.Vector3(7, 3.5, 11);
    const LOOK_START = new THREE.Vector3(0, 0, 0);
    const LOOK_END   = new THREE.Vector3(-0.5, -1, -2);
    camera.position.copy(CAM_START);

    /* ── Lights ── */
    scene.add(new THREE.AmbientLight(0xc8d8e8, 0.55));

    const sun = new THREE.DirectionalLight(0xfff5e8, 2.8);
    sun.position.set(8, 12, 8);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    scene.add(sun);

    const coralFill = new THREE.PointLight(0xF87B54, 3.5, 22);
    coralFill.position.set(-3, 2, 5);
    scene.add(coralFill);

    const coolFill = new THREE.PointLight(0x8FA8BC, 1.8, 18);
    coolFill.position.set(6, 1, -3);
    scene.add(coolFill);

    const topLight = new THREE.SpotLight(0xffffff, 2.0, 20, Math.PI * 0.25, 0.4);
    topLight.position.set(0, 8, 2);
    scene.add(topLight);

    /* ── Floor grid ── */
    const grid = new THREE.GridHelper(20, 20, 0x1e3a50, 0x162a3a);
    grid.position.y = -2.42;
    const gridMats = Array.isArray(grid.material) ? grid.material : [grid.material];
    gridMats.forEach(m => { (m as THREE.Material).transparent = true; (m as THREE.Material).opacity = 0.5; });
    scene.add(grid);

    /* ── Meshes ── */
    type Entry = { mesh: THREE.Mesh; edges: THREE.LineSegments; piece: Piece;
                   fillMat: THREE.MeshStandardMaterial; edgeMat: THREE.LineBasicMaterial; };

    const entries: Entry[] = PIECES.map((piece) => {
      const geo = piece.geo();

      const fillMat = new THREE.MeshStandardMaterial({
        color:     piece.isAccent ? 0xF87B54 : 0x2a3f52,
        roughness: piece.isAccent ? 0.55 : 0.80,
        metalness: piece.isAccent ? 0.25 : 0.05,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(geo, fillMat);
      mesh.castShadow    = true;
      mesh.receiveShadow = true;
      mesh.position.copy(piece.startPos);
      mesh.rotation.copy(piece.startRot);
      scene.add(mesh);

      const edgesGeo = new THREE.EdgesGeometry(geo, 12);
      const edgeMat  = new THREE.LineBasicMaterial({
        color: piece.isAccent ? 0xfa9a7a : 0x4a7090,
        transparent: true,
        opacity: 0,
      });
      const edges = new THREE.LineSegments(edgesGeo, edgeMat);
      mesh.add(edges);

      return { mesh, edges, piece, fillMat, edgeMat };
    });

    /* ── Scroll ── */
    const handleScroll = () => {
      const rect  = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / total));
      progressRef.current = p;

      const newPhase: 0|1|2 = p < 0.25 ? 0 : p < 0.65 ? 1 : 2;
      setPhase(prev => prev !== newPhase ? newPhase : prev);

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${p})`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    /* ── Resize ── */
    const setSize = () => {
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight, false);
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);
    setSize();

    /* ── RAF loop ── */
    const tmpPos = new THREE.Vector3();
    const lookTarget = new THREE.Vector3();

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      const raw = progressRef.current;
      const t   = easeInOutCubic(raw);
      const fadeInT = Math.min(1, raw / 0.12);

      entries.forEach(({ mesh, fillMat, edgeMat, piece }) => {
        tmpPos.lerpVectors(piece.startPos, piece.endPos, t);
        mesh.position.copy(tmpPos);
        mesh.rotation.x = THREE.MathUtils.lerp(piece.startRot.x, piece.endRot.x, t);
        mesh.rotation.y = THREE.MathUtils.lerp(piece.startRot.y, piece.endRot.y, t);
        mesh.rotation.z = THREE.MathUtils.lerp(piece.startRot.z, piece.endRot.z, t);

        const targetOpacity = fadeInT * (piece.isAccent ? 0.95 : 0.82);
        fillMat.opacity = targetOpacity;
        edgeMat.opacity = Math.min(1, fadeInT * 1.3);

        if (raw < 0.6) {
          mesh.rotation.x += 0.003 * (1 - t);
          mesh.rotation.y += 0.004 * (1 - t);
        }
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
      entries.forEach(({ mesh, edges, fillMat, edgeMat }) => {
        mesh.geometry.dispose();
        edges.geometry.dispose();
        fillMat.dispose();
        edgeMat.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative border-t border-border" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ background: "#0d1b2a" }}>

        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Top-left label — always visible */}
        <div className="absolute top-8 left-8 md:left-14 z-20 pointer-events-none">
          <p style={{ fontFamily:"Poppins,sans-serif", fontSize:10, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.18em", color:"#F87B54", margin:0 }}>
            Scroll to explore
          </p>
          <h2 style={{ fontFamily:"Poppins,sans-serif", fontSize:"clamp(18px,2.2vw,28px)", fontWeight:500, lineHeight:1.2, letterSpacing:"-0.03em", color:"rgba(248,250,253,0.9)", marginTop:8, marginBottom:0 }}>
            Watch a space<br />come to life.
          </h2>
        </div>

        {/* Phase counter — top right */}
        <div className="absolute top-8 right-8 md:right-14 z-20 pointer-events-none" style={{ textAlign:"right" }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={phase}
              initial={{ opacity:0, y:-8 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:8 }}
              transition={{ duration:0.35 }}
              style={{ fontFamily:"Poppins,sans-serif", fontSize:11, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.16em", color:"rgba(248,250,253,0.35)", margin:0 }}
            >
              {PHASES[phase].n} / 03
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Phase headline — bottom right */}
        <div className="absolute bottom-16 right-8 md:right-14 z-20 pointer-events-none" style={{ textAlign:"right", maxWidth:360 }}>
          <AnimatePresence mode="wait">
            {phase > 0 && (
              <motion.div
                key={phase}
                initial={{ opacity:0, y:24 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, y:-16 }}
                transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
              >
                <p style={{ fontFamily:"Poppins,sans-serif", fontSize:10, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.18em", color:"#F87B54", margin:0 }}>
                  {PHASES[phase].eyebrow}
                </p>
                <h3 style={{ fontFamily:"Poppins,sans-serif", fontSize:"clamp(32px,5vw,64px)", fontWeight:600, lineHeight:1.05, letterSpacing:"-0.04em", whiteSpace:"pre-line", color:"#F8FAFD", marginTop:10, marginBottom:0 }}>
                  {PHASES[phase].headline}
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30" style={{ height:3, background:"rgba(248,123,84,0.15)" }}>
          <div
            ref={progressBarRef}
            style={{ height:"100%", background:"#F87B54", transformOrigin:"left", transform:"scaleX(0)", borderRadius:"0 2px 2px 0" }}
          />
        </div>

      </div>
    </section>
  );
}
