"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Line } from "@react-three/drei";
import * as THREE from "three";
import {
  ProductType,
  OpeningType,
  SystemTier,
  GlassType,
  FinishType,
} from "@/config/pricing.config";
import { RotateCcw, Maximize2, Layers } from "lucide-react";

interface Configurator3DProps {
  productType: ProductType;
  openingType: OpeningType;
  systemTier: SystemTier;
  glassType: GlassType;
  finishType: FinishType;
  width: number;  // in meters (e.g. 2.4)
  height: number; // in meters (e.g. 1.8)
  showDimensions?: boolean;
}

// ----------------------------------------------------------------------
// Procedural Parametric Product Mesh
// ----------------------------------------------------------------------
function ParametricProductMesh({
  productType,
  openingType,
  systemTier,
  glassType,
  finishType,
  width,
  height,
  showDimensions,
}: Configurator3DProps) {
  // Normalize scale to fit nicely in the 3D viewport (target max dimension ~ 3.5 units)
  const maxDim = Math.max(width, height, 1.0);
  const scaleRatio = 3.2 / maxDim;
  const w = width * scaleRatio;
  const h = height * scaleRatio;

  // Profile depth based on system tier
  const depth = systemTier === "economy" ? 0.08 : systemTier === "standard" ? 0.12 : 0.16;
  const frameWidth = systemTier === "economy" ? 0.06 : systemTier === "standard" ? 0.08 : 0.1;

  // Frame Material & Color based on Finish
  const frameMaterial = useMemo(() => {
    switch (finishType) {
      case "anodized":
        return new THREE.MeshStandardMaterial({
          color: "#C5A059", // Champagne Anodized
          metalness: 0.9,
          roughness: 0.25,
        });
      case "wood_sublimation":
        return new THREE.MeshStandardMaterial({
          color: "#8B4513", // Warm Walnut Wood tone
          metalness: 0.15,
          roughness: 0.65,
        });
      case "powder_special":
        return new THREE.MeshStandardMaterial({
          color: "#1E293B", // Metallic Graphite Slate
          metalness: 0.8,
          roughness: 0.2,
        });
      case "powder_coat":
      default:
        return new THREE.MeshStandardMaterial({
          color: "#18181B", // RAL 9005 Jet Black Matt
          metalness: 0.6,
          roughness: 0.35,
        });
    }
  }, [finishType]);

  // Glass Material based on Glass Type
  const glassMaterial = useMemo(() => {
    switch (glassType) {
      case "double_low_e":
        return new THREE.MeshPhysicalMaterial({
          color: "#2563EB", // Solar reflective Low-E blue-green
          transmission: 0.7,
          opacity: 0.85,
          transparent: true,
          roughness: 0.05,
          metalness: 0.2,
          ior: 1.55,
        });
      case "laminated_sound":
        return new THREE.MeshPhysicalMaterial({
          color: "#475569", // Acoustic smoked grey security glass
          transmission: 0.6,
          opacity: 0.9,
          transparent: true,
          roughness: 0.08,
          metalness: 0.1,
          ior: 1.54,
        });
      case "tinted_solar":
        return new THREE.MeshPhysicalMaterial({
          color: "#92400E", // Solar Bronze Tint
          transmission: 0.65,
          opacity: 0.85,
          transparent: true,
          roughness: 0.06,
          metalness: 0.15,
          ior: 1.52,
        });
      case "double_24mm":
        return new THREE.MeshPhysicalMaterial({
          color: "#60A5FA", // Crisp double glazing
          transmission: 0.8,
          opacity: 0.8,
          transparent: true,
          roughness: 0.04,
          metalness: 0.05,
          ior: 1.52,
        });
      case "single_6mm":
      default:
        return new THREE.MeshPhysicalMaterial({
          color: "#E2E8F0", // Clear single pane
          transmission: 0.88,
          opacity: 0.7,
          transparent: true,
          roughness: 0.05,
          metalness: 0.0,
          ior: 1.5,
        });
    }
  }, [glassType]);

  // Hardware Handle Material
  const hardwareMaterial = new THREE.MeshStandardMaterial({
    color: "#CBD5E1",
    metalness: 0.95,
    roughness: 0.1,
  });

  // Render product specific geometry
  return (
    <group>
      {/* ----------------- PERGOLA ----------------- */}
      {productType === "pergola" ? (
        <group>
          {/* 4 Corner Posts */}
          {[
            [-w / 2, -h / 2],
            [w / 2, -h / 2],
            [-w / 2, h / 2],
            [w / 2, h / 2],
          ].map(([x, y], idx) => (
            <mesh
              key={`post-${idx}`}
              position={[x, 0, y]}
              material={frameMaterial}
            >
              <boxGeometry args={[frameWidth * 1.5, h, frameWidth * 1.5]} />
            </mesh>
          ))}

          {/* Top Perimeter Beams */}
          <mesh position={[0, h / 2, -w / 2]} material={frameMaterial}>
            <boxGeometry args={[w + frameWidth, frameWidth * 1.8, frameWidth * 1.5]} />
          </mesh>
          <mesh position={[0, h / 2, w / 2]} material={frameMaterial}>
            <boxGeometry args={[w + frameWidth, frameWidth * 1.8, frameWidth * 1.5]} />
          </mesh>
          <mesh position={[-w / 2, h / 2, 0]} material={frameMaterial}>
            <boxGeometry args={[frameWidth * 1.5, frameWidth * 1.8, h]} />
          </mesh>
          <mesh position={[w / 2, h / 2, 0]} material={frameMaterial}>
            <boxGeometry args={[frameWidth * 1.5, frameWidth * 1.8, h]} />
          </mesh>

          {/* Rotating Aluminum Louvers */}
          {Array.from({ length: 8 }).map((_, i) => {
            const zPos = -w / 2 + (w / 7) * i;
            return (
              <mesh
                key={`louver-${i}`}
                position={[0, h / 2 + 0.05, zPos]}
                rotation={[0.3, 0, 0]}
                material={frameMaterial}
              >
                <boxGeometry args={[w - frameWidth, 0.02, 0.18]} />
              </mesh>
            );
          })}
        </group>
      ) : productType === "skylight" ? (
        /* ----------------- SKYLIGHT (Pyramid / Sloped) ----------------- */
        <group>
          {/* Base Curb */}
          <mesh position={[0, -0.1, 0]} material={frameMaterial}>
            <boxGeometry args={[w + frameWidth * 2, 0.2, h + frameWidth * 2]} />
          </mesh>

          {/* 4 Inclined Glass Facets Meeting at Ridge/Apex */}
          <mesh position={[0, 0.4, 0]} rotation={[-0.4, 0, 0]} material={glassMaterial}>
            <boxGeometry args={[w * 0.95, 0.03, h * 0.55]} />
          </mesh>
          <mesh position={[0, 0.4, 0]} rotation={[0.4, 0, 0]} material={glassMaterial}>
            <boxGeometry args={[w * 0.95, 0.03, h * 0.55]} />
          </mesh>

          {/* Ridge Mullion Beam */}
          <mesh position={[0, 0.65, 0]} material={frameMaterial}>
            <boxGeometry args={[w + frameWidth, frameWidth, frameWidth]} />
          </mesh>
        </group>
      ) : productType === "cladding" ? (
        /* ----------------- CLADDING (Panelized Facade) ----------------- */
        <group>
          {/* Grid of Aluminum Composite Panels */}
          {[-w / 3, 0, w / 3].map((x, col) =>
            [-h / 3, 0, h / 3].map((y, row) => (
              <mesh
                key={`clad-${col}-${row}`}
                position={[x, y, 0]}
                material={frameMaterial}
              >
                <boxGeometry args={[w / 3.1, h / 3.1, 0.04]} />
              </mesh>
            ))
          )}
          {/* Recessed Groove Joints */}
          <mesh position={[0, 0, -0.02]} material={new THREE.MeshBasicMaterial({ color: "#000000" })}>
            <boxGeometry args={[w, h, 0.01]} />
          </mesh>
        </group>
      ) : productType === "frameless_glass" ? (
        /* ----------------- FRAMELESS GLASS / BALUSTRADE ----------------- */
        <group>
          {/* Concealed Base Channel / Shoe */}
          <mesh position={[0, -h / 2 + 0.08, 0]} material={frameMaterial}>
            <boxGeometry args={[w, 0.16, 0.1]} />
          </mesh>

          {/* Thick Tempered Glass Pane */}
          <mesh position={[0, 0.08, 0]} material={glassMaterial}>
            <boxGeometry args={[w * 0.98, h - 0.16, 0.03]} />
          </mesh>

          {/* Stainless Steel Handrail Cap (Optional minimal) */}
          <mesh position={[0, h / 2 + 0.01, 0]} material={hardwareMaterial}>
            <boxGeometry args={[w, 0.03, 0.04]} />
          </mesh>
        </group>
      ) : (
        /* ----------------- WINDOWS / DOORS / CURTAIN WALL ----------------- */
        <group>
          {/* Outer Perimeter Frame: Top, Bottom, Left, Right */}
          <mesh position={[0, h / 2 - frameWidth / 2, 0]} material={frameMaterial}>
            <boxGeometry args={[w, frameWidth, depth]} />
          </mesh>
          <mesh position={[0, -h / 2 + frameWidth / 2, 0]} material={frameMaterial}>
            <boxGeometry args={[w, frameWidth, depth]} />
          </mesh>
          <mesh position={[-w / 2 + frameWidth / 2, 0, 0]} material={frameMaterial}>
            <boxGeometry args={[frameWidth, h - frameWidth * 2, depth]} />
          </mesh>
          <mesh position={[w / 2 - frameWidth / 2, 0, 0]} material={frameMaterial}>
            <boxGeometry args={[frameWidth, h - frameWidth * 2, depth]} />
          </mesh>

          {/* Curtain Wall: Internal Mullion Subdivisions */}
          {productType === "curtain_wall" && (
            <>
              {/* Vertical Mullion */}
              <mesh position={[0, 0, 0]} material={frameMaterial}>
                <boxGeometry args={[frameWidth * 0.9, h - frameWidth * 2, depth * 1.1]} />
              </mesh>
              {/* Horizontal Transom */}
              <mesh position={[0, 0, 0]} material={frameMaterial}>
                <boxGeometry args={[w - frameWidth * 2, frameWidth * 0.8, depth * 1.05]} />
              </mesh>
              {/* 4 Glass Panes */}
              {[-w / 4, w / 4].map((gx, i) =>
                [-h / 4, h / 4].map((gy, j) => (
                  <mesh key={`cw-glass-${i}-${j}`} position={[gx, gy, 0]} material={glassMaterial}>
                    <boxGeometry args={[w / 2 - frameWidth * 1.2, h / 2 - frameWidth * 1.2, 0.024]} />
                  </mesh>
                ))
              )}
            </>
          )}

          {/* Sliding Door / Sliding Window: 2 Overlapping Sashes */}
          {openingType === "sliding" && productType !== "curtain_wall" && (
            <>
              {/* Left Sash (Slightly Forward) */}
              <group position={[-w / 4, 0, depth * 0.2]}>
                <mesh material={frameMaterial}>
                  <boxGeometry args={[w / 2, h - frameWidth * 2.2, depth * 0.45]} />
                </mesh>
                <mesh position={[0, 0, 0]} material={glassMaterial}>
                  <boxGeometry args={[w / 2 - frameWidth * 1.4, h - frameWidth * 3.6, 0.02]} />
                </mesh>
                {/* Pull Handle */}
                <mesh position={[w / 4 - 0.06, 0, depth * 0.28]} material={hardwareMaterial}>
                  <boxGeometry args={[0.02, 0.35, 0.03]} />
                </mesh>
              </group>

              {/* Right Sash (Slightly Backward) */}
              <group position={[w / 4, 0, -depth * 0.2]}>
                <mesh material={frameMaterial}>
                  <boxGeometry args={[w / 2, h - frameWidth * 2.2, depth * 0.45]} />
                </mesh>
                <mesh position={[0, 0, 0]} material={glassMaterial}>
                  <boxGeometry args={[w / 2 - frameWidth * 1.4, h - frameWidth * 3.6, 0.02]} />
                </mesh>
                {/* Pull Handle */}
                <mesh position={[-w / 4 + 0.06, 0, -depth * 0.28]} material={hardwareMaterial}>
                  <boxGeometry args={[0.02, 0.35, 0.03]} />
                </mesh>
              </group>
            </>
          )}

          {/* Casement / Tilt & Turn: Single or Double Hinged Sash */}
          {(openingType === "casement" || openingType === "tilt_turn") && productType !== "curtain_wall" && (
            <group position={[0, 0, 0]}>
              {/* Inner Operable Sash Frame */}
              <mesh material={frameMaterial}>
                <boxGeometry args={[w - frameWidth * 2.2, h - frameWidth * 2.2, depth * 0.7]} />
              </mesh>
              {/* Glass Pane */}
              <mesh position={[0, 0, 0]} material={glassMaterial}>
                <boxGeometry args={[w - frameWidth * 3.8, h - frameWidth * 3.8, 0.024]} />
              </mesh>
              {/* Luxury Turn Handle */}
              <mesh position={[w / 2 - frameWidth * 2, 0, depth * 0.45]} material={hardwareMaterial}>
                <boxGeometry args={[0.03, 0.18, 0.05]} />
              </mesh>
            </group>
          )}

          {/* Fixed Non-Opening Window / Door */}
          {openingType === "fixed" && productType !== "curtain_wall" && (
            <mesh position={[0, 0, 0]} material={glassMaterial}>
              <boxGeometry args={[w - frameWidth * 2, h - frameWidth * 2, 0.024]} />
            </mesh>
          )}
        </group>
      )}

      {/* ----------------- 3D DIMENSION INDICATORS ----------------- */}
      {showDimensions && (
        <group>
          {/* Width Dimension Line (Bottom) */}
          <Line
            points={[
              [-w / 2, -h / 2 - 0.25, 0],
              [w / 2, -h / 2 - 0.25, 0],
            ]}
            color="#D4AF37"
            lineWidth={2}
          />
          {/* Width Ticks */}
          <Line
            points={[
              [-w / 2, -h / 2 - 0.35, 0],
              [-w / 2, -h / 2 - 0.15, 0],
            ]}
            color="#D4AF37"
            lineWidth={2}
          />
          <Line
            points={[
              [w / 2, -h / 2 - 0.35, 0],
              [w / 2, -h / 2 - 0.15, 0],
            ]}
            color="#D4AF37"
            lineWidth={2}
          />

          {/* Height Dimension Line (Side) */}
          <Line
            points={[
              [w / 2 + 0.25, -h / 2, 0],
              [w / 2 + 0.25, h / 2, 0],
            ]}
            color="#D4AF37"
            lineWidth={2}
          />
          {/* Height Ticks */}
          <Line
            points={[
              [w / 2 + 0.15, -h / 2, 0],
              [w / 2 + 0.35, -h / 2, 0],
            ]}
            color="#D4AF37"
            lineWidth={2}
          />
          <Line
            points={[
              [w / 2 + 0.15, h / 2, 0],
              [w / 2 + 0.35, h / 2, 0],
            ]}
            color="#D4AF37"
            lineWidth={2}
          />
        </group>
      )}
    </group>
  );
}

export default function Configurator3D({
  productType,
  openingType,
  systemTier,
  glassType,
  finishType,
  width,
  height,
  showDimensions = true,
}: Configurator3DProps) {
  const controlsRef = useRef<any>(null);

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-xl">
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Live Dimension Overlay Badges */}
      <div className="absolute top-4 start-4 z-10 flex flex-col gap-1.5 pointer-events-none">
        <div className="px-3 py-1.5 rounded-lg bg-slate-900/85 border border-amber-500/30 backdrop-blur-md shadow-md">
          <span className="text-[11px] text-slate-400 block font-mono">الأبعاد الحقيقية • Dimensions</span>
          <span className="text-sm font-bold text-amber-400 tracking-wider font-mono">
            {width.toFixed(2)}م عرض × {height.toFixed(2)}م ارتفاع
          </span>
          <span className="text-[10px] text-slate-400 ms-1.5">
            ({(width * height).toFixed(2)} م²)
          </span>
        </div>
      </div>

      {/* Reset Camera & Controls Toolbar */}
      <div className="absolute top-4 end-4 z-10 flex items-center gap-1.5">
        <button
          onClick={resetCamera}
          title="إعادة ضبط زاوية الرؤية"
          className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition shadow-md"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* 3D Canvas */}
      <Canvas
        className="w-full h-full cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 4.5], fov: 45 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 6, 5]} intensity={1.4} castShadow />
        <directionalLight position={[-4, 3, -3]} intensity={0.7} color="#CBD5E1" />
        <pointLight position={[0, -2, 2]} intensity={0.5} color="#D4AF37" />

        <Suspense fallback={null}>
          <Center>
            <ParametricProductMesh
              productType={productType}
              openingType={openingType}
              systemTier={systemTier}
              glassType={glassType}
              finishType={finishType}
              width={width}
              height={height}
              showDimensions={showDimensions}
            />
          </Center>
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          maxDistance={7}
          minDistance={2}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Quick Specs Legend Footer */}
      <div className="absolute bottom-3 inset-x-3 flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md text-[11px] text-slate-300 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
          <span className="font-medium text-white">معاينة تفاعلية حية (Live 3D)</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <span>القطاع: <strong className="text-slate-200">{systemTier.toUpperCase()}</strong></span>
          <span>الزجاج: <strong className="text-slate-200">{glassType.replace('_', ' ').toUpperCase()}</strong></span>
        </div>
      </div>
    </div>
  );
}
