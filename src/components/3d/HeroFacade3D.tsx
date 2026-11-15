"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// ----------------------------------------------------------------------
// NOTE FOR DEVELOPERS:
// To replace procedural geometry with your own custom .glb / .gltf model:
// 1. Copy your model to: /public/models/hero-facade.glb
// 2. In FacadeMesh component below, uncomment:
//    const { scene } = useGLTF('/models/hero-facade.glb');
//    return <primitive object={scene} scale={[1, 1, 1]} />;
// ----------------------------------------------------------------------

interface FacadeMeshProps {
  scrollProgress: number;
}

function FacadeMesh({ scrollProgress }: FacadeMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  const panelsRef = useRef<THREE.Group>(null);

  // Subtle continuous rotation + mouse parallax effect
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Slow ambient rotation
    groupRef.current.rotation.y += delta * 0.15;

    // React to pointer parallax
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (-state.pointer.y * Math.PI) / 12;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, groupRef.current.rotation.y + targetX * 0.05, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY * 0.2, 0.05);

    // Scroll assembly effect: panels assemble into position as user scrolls
    if (panelsRef.current) {
      const explodeFactor = Math.max(0, 1 - scrollProgress * 2.5);
      panelsRef.current.children.forEach((child, i) => {
        const offsetDirection = (i % 2 === 0 ? 1 : -1) * 0.4 * explodeFactor;
        child.position.z = THREE.MathUtils.lerp(child.position.z, offsetDirection, 0.1);
      });
    }
  });

  // Materials
  const aluminumFrameMat = new THREE.MeshStandardMaterial({
    color: "#2A303C", // Deep architectural dark grey
    metalness: 0.85,
    roughness: 0.25,
  });

  const goldAccentMat = new THREE.MeshStandardMaterial({
    color: "#D4AF37", // Warm architectural champagne gold accent
    metalness: 0.9,
    roughness: 0.2,
  });

  const doubleGlazingMat = new THREE.MeshPhysicalMaterial({
    color: "#3B82F6", // Oceanic tinted architectural glass
    transmission: 0.65,
    opacity: 0.85,
    transparent: true,
    roughness: 0.08,
    metalness: 0.1,
    ior: 1.52,
    reflectivity: 0.9,
  });

  const reflectiveSpandrelMat = new THREE.MeshStandardMaterial({
    color: "#111827",
    metalness: 0.95,
    roughness: 0.1,
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Heavy Structural Perimeter Frame */}
      <mesh material={aluminumFrameMat} position={[0, 0, 0]}>
        <boxGeometry args={[4.2, 3.2, 0.18]} />
      </mesh>

      {/* Recessed Glass and Mullions Area */}
      <group ref={panelsRef} position={[0, 0, 0.04]}>
        {/* Glass Bays (3 columns x 2 rows) */}
        {[-1.3, 0, 1.3].map((x, colIdx) =>
          [-0.72, 0.72].map((y, rowIdx) => (
            <group key={`bay-${colIdx}-${rowIdx}`} position={[x, y, 0]}>
              {/* Glass Pane */}
              <mesh material={doubleGlazingMat}>
                <boxGeometry args={[1.22, 1.36, 0.03]} />
              </mesh>

              {/* Internal Shadow Spacer */}
              <mesh position={[0, 0, -0.015]} material={reflectiveSpandrelMat}>
                <boxGeometry args={[1.2, 1.34, 0.005]} />
              </mesh>
            </group>
          ))
        )}

        {/* Vertical Aluminum Mullions */}
        {[-1.35, -0.45, 0.45, 1.35].map((x, idx) => (
          <mesh key={`mullion-${idx}`} material={aluminumFrameMat} position={[x, 0, 0.06]}>
            <boxGeometry args={[0.09, 3.1, 0.14]} />
          </mesh>
        ))}

        {/* Horizontal Aluminum Transoms */}
        {[-1.48, 0, 1.48].map((y, idx) => (
          <mesh key={`transom-${idx}`} material={aluminumFrameMat} position={[0, y, 0.06]}>
            <boxGeometry args={[4.1, 0.09, 0.14]} />
          </mesh>
        ))}

        {/* Architectural Gold Aerofoil Fins / Sun Louvers */}
        {[-1.35, 0.45].map((x, idx) => (
          <mesh key={`fin-${idx}`} material={goldAccentMat} position={[x, 0, 0.18]} rotation={[0, 0.15, 0]}>
            <boxGeometry args={[0.03, 3.15, 0.16]} />
          </mesh>
        ))}

        {/* Top Header Canopy with Monogram Accent */}
        <mesh material={aluminumFrameMat} position={[0, 1.6, 0.12]}>
          <boxGeometry args={[4.25, 0.14, 0.3]} />
        </mesh>
        <mesh material={goldAccentMat} position={[0, 1.68, 0.28]}>
          <boxGeometry args={[1.2, 0.02, 0.02]} />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroFacade3D() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      setScrollProgress(Math.min(1, scrollY / height));
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[620px] rounded-3xl overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 border border-slate-800/80 shadow-2xl">
      {/* Atmospheric Industrial Glow & Lighting Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Floating 3D Badge Indicator */}
      <div className="absolute top-4 start-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-md text-xs text-amber-400 font-medium">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span>3D Facade Engine</span>
      </div>

      <Canvas
        className="w-full h-full cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 4.8]} fov={isMobile ? 55 : 45} />
        
        {/* Architectural Lighting Setup */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFFFFF" castShadow />
        <directionalLight position={[-5, 4, -3]} intensity={0.8} color="#D4AF37" />
        <pointLight position={[0, 2, 2]} intensity={1.2} color="#93C5FD" />

        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
            <FacadeMesh scrollProgress={scrollProgress} />
          </Float>

          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.65}
            scale={6}
            blur={2.4}
            far={4}
            color="#000000"
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.15}
          minPolarAngle={Math.PI / 2 - 0.25}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Interactive Drag Hint Overlay */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
        <div className="px-4 py-1.5 rounded-full bg-slate-900/75 border border-slate-700/50 backdrop-blur-md text-[11px] text-slate-300 flex items-center gap-2 shadow-lg">
          <svg className="w-3.5 h-3.5 text-amber-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          <span>اسحب بالماوس للتدوير التفاعلي • Interactive 3D Model</span>
        </div>
      </div>
    </div>
  );
}
