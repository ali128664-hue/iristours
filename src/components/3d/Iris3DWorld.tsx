"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Iris3DWorld.tsx — Hyper-Modern Luxury 3D Canvas (Daylight Edition)
 *
 * Designed with cutting-edge 2026 automotive luxury aesthetics:
 * - Fluid 3D Parametric Speedform (Liquid Platinum & Clearcoat)
 * - Sculpted Spline Ribbon Motorway with Neon Edge Guides & Flowing Photons
 * - Futuristic Holographic Aerodynamic Laser Scan Beam
 * - Floating Refractive Luxury Crystal Prisms
 * - Soft Gaussian Radial Bokeh Orbs & Sunlight Diamond Dust
 * - Cinematic Smooth Inertial Camera & Mouse Parallax
 */
export default function Iris3DWorld() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Detect mobile device for optimization
    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);

    // ─── 1. SCENE, DAYLIGHT SKY & DEPTH FOG ────────────────────────────────────
    const scene = new THREE.Scene();
    const bgColor = 0xf8fafc; // Luminous pearl / platinum daylight sky
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(0xf1f5f9, 0.009); // Crisp atmospheric depth fog

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 6, 62);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // ─── 2. RADIANT DAYLIGHT & BOUNCE LIGHTING ────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.9);
    scene.add(ambientLight);

    // Primary Warm Golden Sunlight (Hero & Specular Highlights)
    const sunLight = new THREE.DirectionalLight(0xfffbeb, 3.6);
    sunLight.position.set(30, 55, 35);
    scene.add(sunLight);

    // Azure Sky Fill Light
    const skyFill = new THREE.DirectionalLight(0xdbeafe, 1.8);
    skyFill.position.set(-30, 35, -25);
    scene.add(skyFill);

    // Warm Amber Studio Point Lights for Automotive Speedform
    const amberSpot = new THREE.PointLight(0xf59e0b, 3.2, 70);
    amberSpot.position.set(6, 7, 44);
    scene.add(amberSpot);

    const cyanSpot = new THREE.PointLight(0x0284c7, 2.5, 80);
    cyanSpot.position.set(-8, 5, 30);
    scene.add(cyanSpot);

    // ─── 3. PARAMETRIC CURVED SPLINE RIBBON MOTORWAY ─────────────────────────
    const highwayGroup = new THREE.Group();
    scene.add(highwayGroup);

    // A sweeping 3D Catmull-Rom spline curving gracefully through the daylight vista
    const splinePoints = [
      new THREE.Vector3(-18, 9, -150),
      new THREE.Vector3(-10, 6, -100),
      new THREE.Vector3(8, 3.8, -50),
      new THREE.Vector3(2, 2.2, 0),
      new THREE.Vector3(-5, 1.2, 45),
      new THREE.Vector3(1, 0.6, 90),
    ];
    const roadCurve = new THREE.CatmullRomCurve3(splinePoints);
    roadCurve.curveType = "catmullrom";
    roadCurve.tension = 0.5;

    // Road Ribbon Mesh (Flat banked parametric ribbon)
    const tubularSegments = isMobile ? 60 : 120;
    const roadWidth = 6.2;
    const roadSamples = 160;
    const roadPoints = roadCurve.getPoints(roadSamples);

    // Generate custom ribbon geometry along the spline
    const ribbonGeo = new THREE.BufferGeometry();
    const ribbonPos: number[] = [];
    const ribbonNorm: number[] = [];
    const ribbonUvs: number[] = [];
    const ribbonIndices: number[] = [];

    for (let i = 0; i <= roadSamples; i++) {
      const t = i / roadSamples;
      const pt = roadCurve.getPointAt(t);
      const tangent = roadCurve.getTangentAt(t);
      const up = new THREE.Vector3(0, 1, 0);
      const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();

      const leftPt = pt.clone().add(normal.clone().multiplyScalar(-roadWidth / 2));
      const rightPt = pt.clone().add(normal.clone().multiplyScalar(roadWidth / 2));

      ribbonPos.push(leftPt.x, leftPt.y, leftPt.z);
      ribbonPos.push(rightPt.x, rightPt.y, rightPt.z);

      ribbonNorm.push(0, 1, 0, 0, 1, 0);
      ribbonUvs.push(0, t * 15, 1, t * 15);

      if (i < roadSamples) {
        const base = i * 2;
        ribbonIndices.push(base, base + 1, base + 2);
        ribbonIndices.push(base + 1, base + 3, base + 2);
      }
    }

    ribbonGeo.setAttribute("position", new THREE.Float32BufferAttribute(ribbonPos, 3));
    ribbonGeo.setAttribute("normal", new THREE.Float32BufferAttribute(ribbonNorm, 3));
    ribbonGeo.setAttribute("uv", new THREE.Float32BufferAttribute(ribbonUvs, 2));
    ribbonGeo.setIndex(ribbonIndices);

    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Deep asphalt contrast
      roughness: 0.35,
      metalness: 0.75,
      side: THREE.DoubleSide,
    });
    const roadMesh = new THREE.Mesh(ribbonGeo, roadMat);
    highwayGroup.add(roadMesh);

    // Sleek Glowing Neon Rail Tubes (Left Gold, Right Cyan)
    const railRadius = 0.07;
    const railTubeLeft = new THREE.TubeGeometry(roadCurve, tubularSegments, railRadius, 8, false);
    const railTubeRight = new THREE.TubeGeometry(roadCurve, tubularSegments, railRadius, 8, false);

    const goldRailMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const cyanRailMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });

    const leftRail = new THREE.Mesh(railTubeLeft, goldRailMat);
    leftRail.position.x -= roadWidth / 2;
    leftRail.position.y += 0.1;
    highwayGroup.add(leftRail);

    const rightRail = new THREE.Mesh(railTubeRight, cyanRailMat);
    rightRail.position.x += roadWidth / 2;
    rightRail.position.y += 0.1;
    highwayGroup.add(rightRail);

    // Glowing Photon Light Pulses along Spline
    const photonCount = isMobile ? 18 : 36;
    const photons: { mesh: any; t: number; speed: number; laneOffset: number }[] = [];
    const photonGeo = new THREE.SphereGeometry(0.18, 8, 8);

    for (let i = 0; i < photonCount; i++) {
      const isGold = i % 2 === 0;
      const mat = new THREE.MeshBasicMaterial({
        color: isGold ? 0xf59e0b : 0x38bdf8,
      });
      const mesh = new THREE.Mesh(photonGeo, mat);
      const laneOffset = (Math.random() - 0.5) * (roadWidth - 1.2);
      const t = Math.random();
      const speed = 0.08 + Math.random() * 0.12;

      highwayGroup.add(mesh);
      photons.push({ mesh, t, speed, laneOffset });
    }

    // ─── 4. MODERN AERODYNAMIC AUTOMOTIVE SPEEDFORM SCULPTURE ─────────────────
    const speedformGroup = new THREE.Group();
    speedformGroup.position.set(5.5, 2.0, 42);
    speedformGroup.rotation.y = -Math.PI / 6.5;
    scene.add(speedformGroup);

    // High-End Liquid Platinum / Metallic Pearl Paint Material
    const liquidMetalMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.08,
      metalness: 0.96,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      reflectivity: 1.0,
    });

    // Parametric Aerodynamic Speedform Body (Sculpted organic automotive volume)
    const speedformBody = new THREE.Group();

    // Lower Sleek Fuselage
    const baseGeo = new THREE.CylinderGeometry(1.15, 0.95, 5.4, 32);
    baseGeo.rotateX(Math.PI / 2);
    baseGeo.scale(1.1, 0.45, 1.0); // Flatten and widen like a supercar chassis
    const baseMesh = new THREE.Mesh(baseGeo, liquidMetalMat);
    baseMesh.position.y = 0.55;
    speedformBody.add(baseMesh);

    // Fastback Greenhouse / Teardrop Glass Cabin
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      roughness: 0.05,
      metalness: 0.9,
      transmission: 0.85,
      thickness: 0.5,
      transparent: true,
      opacity: 0.92,
    });
    const cabinGeo = new THREE.CylinderGeometry(0.85, 0.75, 3.2, 32);
    cabinGeo.rotateX(Math.PI / 2);
    cabinGeo.scale(0.9, 0.55, 1.0);
    const cabinMesh = new THREE.Mesh(cabinGeo, glassMat);
    cabinMesh.position.set(0, 1.05, -0.2);
    speedformBody.add(cabinMesh);

    // Sleek Aerodynamic Nose Cone
    const noseGeo = new THREE.ConeGeometry(1.05, 1.6, 32);
    noseGeo.rotateX(-Math.PI / 2);
    noseGeo.scale(1.1, 0.38, 1.0);
    const noseMesh = new THREE.Mesh(noseGeo, liquidMetalMat);
    noseMesh.position.set(0, 0.54, 3.4);
    speedformBody.add(noseMesh);

    // Rear Tapered Diffuser & Kamm Tail
    const tailGeo = new THREE.BoxGeometry(2.1, 0.45, 1.0);
    const tailMesh = new THREE.Mesh(tailGeo, liquidMetalMat);
    tailMesh.position.set(0, 0.6, -2.9);
    speedformBody.add(tailMesh);

    // Razor-Sharp Laser Headlight Blades (Cyan Photon Ribbon)
    const headlightBladeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const leftBlade = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.05, 0.4), headlightBladeMat);
    leftBlade.position.set(-0.75, 0.65, 3.2);
    leftBlade.rotation.y = Math.PI / 12;
    speedformBody.add(leftBlade);

    const rightBlade = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.05, 0.4), headlightBladeMat);
    rightBlade.position.set(0.75, 0.65, 3.2);
    rightBlade.rotation.y = -Math.PI / 12;
    speedformBody.add(rightBlade);

    // Continuous Crimson LED Taillight Ribbon
    const taillightMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const taillightRibbon = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.06, 0.08), taillightMat);
    taillightRibbon.position.set(0, 0.75, -3.42);
    speedformBody.add(taillightRibbon);

    // Polished Warm Gold Aerodynamic Side Strake Accents
    const strakeMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.95,
      roughness: 0.15,
    });
    const leftStrake = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 4.2), strakeMat);
    leftStrake.position.set(-1.18, 0.42, 0);
    speedformBody.add(leftStrake);

    const rightStrake = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 4.2), strakeMat);
    rightStrake.position.set(1.18, 0.42, 0);
    speedformBody.add(rightStrake);

    // Wheels: Aerodynamic Turbine Discs
    const wheelMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.3,
      metalness: 0.85,
    });
    const goldCapMat = new THREE.MeshBasicMaterial({ color: 0xd97706 });
    const wheelPositions = [
      [-1.22, 0.45, 1.8],
      [1.22, 0.45, 1.8],
      [-1.22, 0.45, -1.8],
      [1.22, 0.45, -1.8],
    ];

    wheelPositions.forEach(([wx, wy, wz]) => {
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.28, 24), wheelMat);
      disc.rotateZ(Math.PI / 2);
      disc.position.set(wx, wy, wz);
      speedformBody.add(disc);

      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.30, 16), goldCapMat);
      cap.rotateZ(Math.PI / 2);
      cap.position.set(wx, wy, wz);
      speedformBody.add(cap);
    });

    speedformGroup.add(speedformBody);

    // Futuristic Holographic Laser Scan Ring
    const scanRingGeo = new THREE.TorusGeometry(1.85, 0.025, 16, 64);
    scanRingGeo.rotateX(Math.PI / 2);
    const scanRingMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.75,
    });
    const scanRing = new THREE.Mesh(scanRingGeo, scanRingMat);
    scanRing.position.set(0, 0.8, 0);
    speedformGroup.add(scanRing);

    // ─── 5. FLOATING REFRACTIVE LUXURY CRYSTAL PRISMS ─────────────────────────
    const crystalsGroup = new THREE.Group();
    scene.add(crystalsGroup);

    const crystalGeoA = new THREE.IcosahedronGeometry(1.2, 0);
    const crystalGeoB = new THREE.OctahedronGeometry(1.0, 0);

    const crystalMatGold = new THREE.MeshPhysicalMaterial({
      color: 0xfef3c7,
      transmission: 0.88,
      opacity: 0.85,
      transparent: true,
      roughness: 0.05,
      metalness: 0.1,
      ior: 1.52,
    });

    const crystalMatCyan = new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      transmission: 0.88,
      opacity: 0.85,
      transparent: true,
      roughness: 0.05,
      metalness: 0.1,
      ior: 1.52,
    });

    const crystalConfigs = [
      { geo: crystalGeoA, mat: crystalMatGold, pos: new THREE.Vector3(-14, 12, 20), rotSpeed: 0.008 },
      { geo: crystalGeoB, mat: crystalMatCyan, pos: new THREE.Vector3(16, 16, 10), rotSpeed: -0.010 },
      { geo: crystalGeoA, mat: crystalMatCyan, pos: new THREE.Vector3(-22, 18, -30), rotSpeed: 0.006 },
      { geo: crystalGeoB, mat: crystalMatGold, pos: new THREE.Vector3(20, 22, -45), rotSpeed: -0.007 },
    ];

    const crystalMeshes: { mesh: any; rotSpeed: number; initY: number }[] = [];
    crystalConfigs.forEach((cfg) => {
      const mesh = new THREE.Mesh(cfg.geo, cfg.mat);
      mesh.position.copy(cfg.pos);
      crystalsGroup.add(mesh);
      crystalMeshes.push({ mesh, rotSpeed: cfg.rotSpeed, initY: cfg.pos.y });
    });

    // ─── 6. SOFT GAUSSIAN BOKEH CIRCLES & SUNLIGHT PARTICLES ──────────────────
    // Create a circular soft Gaussian falloff bokeh texture dynamically
    const createBokehTexture = () => {
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 64;
      pCanvas.height = 64;
      const ctx = pCanvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
        grad.addColorStop(0.3, "rgba(255, 245, 210, 0.85)");
        grad.addColorStop(0.7, "rgba(245, 158, 11, 0.35)");
        grad.addColorStop(1, "rgba(245, 158, 11, 0.0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(pCanvas);
    };

    const bokehTexture = createBokehTexture();
    const particleCount = isMobile ? 350 : 900;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 120;
      particlePositions[i * 3 + 1] = Math.random() * 50 - 5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 220 - 20;
      particleScales[i] = Math.random() * 0.8 + 0.4;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 1.4 : 2.2,
      map: bokehTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // ─── 7. INTERACTIVE MOUSE PARALLAX & INERTIAL DAMPING ─────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize handling
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Tab visibility handling (pause to save GPU/CPU)
    let isTabVisible = true;
    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // ─── 8. RENDER LOOP & SCROLLTRAJECTORY ────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    // Smooth lerp coordinates for camera
    let curCamZ = 62;
    let curCamY = 6;
    let curCamX = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isTabVisible) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse lerping with inertial damping
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Update Photon Pulses along Spline
      photons.forEach((p) => {
        p.t = (p.t + delta * p.speed) % 1.0;
        const pt = roadCurve.getPointAt(p.t);
        const tangent = roadCurve.getTangentAt(p.t);
        const up = new THREE.Vector3(0, 1, 0);
        const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();
        p.mesh.position.copy(pt).add(normal.multiplyScalar(p.laneOffset));
        p.mesh.position.y += 0.15;
      });

      // Speedform gentle hover & laser scan sweep
      speedformBody.position.y = Math.sin(time * 1.6) * 0.12;
      speedformGroup.rotation.y = -Math.PI / 6.5 + mouseX * 0.15;
      speedformGroup.rotation.x = mouseY * 0.08;

      // Laser scan ring sweeps back and forth across speedform (Z: -3.5 to 3.5)
      scanRing.position.z = Math.sin(time * 1.8) * 3.4;
      scanRing.scale.setScalar(1.0 + Math.sin(time * 3.6) * 0.04);

      // Crystals floating & tumbling
      crystalMeshes.forEach((c, idx) => {
        c.mesh.rotation.x += c.rotSpeed;
        c.mesh.rotation.y += c.rotSpeed * 1.4;
        c.mesh.position.y = c.initY + Math.sin(time * 1.2 + idx) * 0.8;
      });

      // Slowly rotate particle field
      particleSystem.rotation.y = time * 0.015;

      // ─── CAMERA SCROLL TRAJECTORY ──────────────────────────────────────────
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;

      let destCamX = mouseX * 3.0;
      let destCamY = 6;
      let destCamZ = 62;
      let destTargetX = mouseX * 1.5;
      let destTargetY = 3.8 - mouseY * 1.5;
      let destTargetZ = 30;

      if (scrollRatio <= 0.25) {
        // Hero Section: Focused dramatic perspective on Speedform & Highway Ribbon
        const t = scrollRatio / 0.25;
        destCamZ = 62 - t * 18;
        destCamY = 6 + t * 2.5;
        destTargetZ = 30 - t * 12;
      } else if (scrollRatio <= 0.55) {
        // Fleet Showcase: Smooth lateral sweep along illuminated spline highway
        const t = (scrollRatio - 0.25) / 0.3;
        destCamZ = 44 - t * 24;
        destCamY = 8.5 + t * 4;
        destCamX = mouseX * 3.5 + 4;
        destTargetZ = 18 - t * 20;
      } else if (scrollRatio <= 0.8) {
        // Tours & Destinations: Elevated panoramic daylight horizon view
        const t = (scrollRatio - 0.55) / 0.25;
        destCamZ = 20 - t * 40;
        destCamY = 12.5 + t * 10;
        destCamX = mouseX * 4.0 - 5;
        destTargetZ = -2 - t * 30;
      } else {
        // Reviews, FAQ & Footer: Serene architectural high-altitude vista
        const t = (scrollRatio - 0.8) / 0.2;
        destCamZ = -20 - t * 35;
        destCamY = 22.5 + t * 8;
        destTargetZ = -32 - t * 25;
      }

      curCamX += (destCamX - curCamX) * 0.05;
      curCamY += (destCamY - curCamY) * 0.05;
      curCamZ += (destCamZ - curCamZ) * 0.05;

      camera.position.set(curCamX, curCamY, curCamZ);
      camera.lookAt(destTargetX, destTargetY, destTargetZ);

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      renderer.dispose();
      ribbonGeo.dispose();
      roadMat.dispose();
      railTubeLeft.dispose();
      railTubeRight.dispose();
      goldRailMat.dispose();
      cyanRailMat.dispose();
      photonGeo.dispose();
      liquidMetalMat.dispose();
      glassMat.dispose();
      bokehTexture.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: "block" }}
    />
  );
}
