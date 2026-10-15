"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Iris3DWorld() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Detect mobile for particle reduction & performance tuning
    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);

    // ─── 1. SCENE, ATMOSPHERE & RENDERER ──────────────────────────────────────
    const scene = new THREE.Scene();
    const bgColor = 0x070b14; // Deep luxury obsidian / midnight blue
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.012);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 6, 60);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // ─── 2. DYNAMIC 3D LIGHTING SYSTEM ───────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
    scene.add(ambientLight);

    // Warm gold point light (Hero & Fleet Luxury)
    const goldLight = new THREE.PointLight(0xf59e0b, 3.5, 90);
    goldLight.position.set(5, 8, 45);
    scene.add(goldLight);

    // Cool moonlight / aurora directional light (Northern Mountain Valleys)
    const moonLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    moonLight.position.set(-20, 40, -10);
    scene.add(moonLight);

    // ─── 3. PROCEDURAL LUXURY HIGHWAY & SPEED LIGHT TRAILS ────────────────────
    const highwayGroup = new THREE.Group();
    scene.add(highwayGroup);

    // Road Surface Ribbon (Z: 90 down to -120)
    const roadLength = 220;
    const roadWidth = 7;
    const roadGeo = new THREE.PlaneGeometry(roadWidth, roadLength, 1, 60);
    roadGeo.rotateX(-Math.PI / 2);

    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x050811,
      roughness: 0.4,
      metalness: 0.8,
    });
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    roadMesh.position.set(0, 0, -20);
    highwayGroup.add(roadMesh);

    // Glowing Gold Edge Rails
    const railMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.75,
    });

    const leftRailGeo = new THREE.BoxGeometry(0.12, 0.08, roadLength);
    const leftRail = new THREE.Mesh(leftRailGeo, railMat);
    leftRail.position.set(-roadWidth / 2, 0.05, -20);
    highwayGroup.add(leftRail);

    const rightRailGeo = new THREE.BoxGeometry(0.12, 0.08, roadLength);
    const rightRail = new THREE.Mesh(rightRailGeo, railMat);
    rightRail.position.set(roadWidth / 2, 0.05, -20);
    highwayGroup.add(rightRail);

    // Speed Light Streaks (Cyan & Amber Streaming Trails)
    const streakCount = isMobile ? 24 : 50;
    const streakGeo = new THREE.BoxGeometry(0.08, 0.08, 3.5);
    const streaks: { mesh: any; speed: number; lane: number }[] = [];

    const cyanTrailMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
    });
    const goldTrailMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.85,
    });

    for (let i = 0; i < streakCount; i++) {
      const isCyan = i % 2 === 0;
      const mesh = new THREE.Mesh(streakGeo, isCyan ? cyanTrailMat : goldTrailMat);
      const lane = (Math.random() - 0.5) * (roadWidth - 1.2);
      mesh.position.set(
        lane,
        0.1,
        (Math.random() - 0.5) * roadLength - 20
      );
      mesh.scale.set(1, 1, 1 + Math.random() * 2);
      highwayGroup.add(mesh);
      streaks.push({
        mesh,
        speed: 0.4 + Math.random() * 0.5,
        lane,
      });
    }

    // ─── 4. PROCEDURAL 3D LUXURY VEHICLE SCULPTURE ───────────────────────────
    const vehicleGroup = new THREE.Group();
    vehicleGroup.position.set(5.5, 1.8, 43);
    vehicleGroup.rotation.y = -Math.PI / 7;
    scene.add(vehicleGroup);

    // Vehicle Body (Sleek Obsidian & Metallic Chrome Finish)
    const bodyGeo = new THREE.BoxGeometry(2.4, 0.9, 5.2);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x0b1322,
      roughness: 0.25,
      metalness: 0.85,
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = 0.55;
    vehicleGroup.add(bodyMesh);

    // Aerodynamic Cabin / Smoked Glass Roof
    const cabinGeo = new THREE.BoxGeometry(2.1, 0.8, 3.0);
    const cabinMat = new THREE.MeshStandardMaterial({
      color: 0x030712,
      roughness: 0.1,
      metalness: 0.95,
      transparent: true,
      opacity: 0.9,
    });
    const cabinMesh = new THREE.Mesh(cabinGeo, cabinMat);
    cabinMesh.position.set(0, 1.25, -0.2);
    vehicleGroup.add(cabinMesh);

    // Gold Trim Accents (Side Sills)
    const trimMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
    const trimLeft = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 5.0), trimMat);
    trimLeft.position.set(-1.21, 0.35, 0);
    vehicleGroup.add(trimLeft);

    const trimRight = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 5.0), trimMat);
    trimRight.position.set(1.21, 0.35, 0);
    vehicleGroup.add(trimRight);

    // Xenon Dual Headlights with Glow
    const headlightMat = new THREE.MeshBasicMaterial({ color: 0xe0f2fe });
    const leftHeadlight = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.15, 0.1), headlightMat);
    leftHeadlight.position.set(-0.8, 0.6, 2.62);
    vehicleGroup.add(leftHeadlight);

    const rightHeadlight = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.15, 0.1), headlightMat);
    rightHeadlight.position.set(0.8, 0.6, 2.62);
    vehicleGroup.add(rightHeadlight);

    // LED Taillight Bar (Crimson Ribbon)
    const taillightMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const taillight = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.12, 0.08), taillightMat);
    taillight.position.set(0, 0.7, -2.62);
    vehicleGroup.add(taillight);

    // Wheels & Gold Rim Centers
    const wheelGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.32, 16);
    wheelGeo.rotateZ(Math.PI / 2);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.8 });
    const rimMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });

    const wheelPositions = [
      [-1.25, 0.42, 1.6],
      [1.25, 0.42, 1.6],
      [-1.25, 0.42, -1.6],
      [1.25, 0.42, -1.6],
    ];

    wheelPositions.forEach(([wx, wy, wz]) => {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.position.set(wx, wy, wz);
      vehicleGroup.add(wheel);

      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.34, 8), rimMat);
      rim.rotateZ(Math.PI / 2);
      rim.position.set(wx, wy, wz);
      vehicleGroup.add(rim);
    });

    // ─── 5. PROCEDURAL NORTHERN PAKISTAN MOUNTAIN PEAKS ───────────────────────
    // Flanking the road path from Z = 20 to Z = -130 (Hunza, Skardu, Swat)
    const mountainGroup = new THREE.Group();
    scene.add(mountainGroup);

    const createMountainRidge = (side: "left" | "right") => {
      const xOffset = side === "left" ? -48 : 48;
      const width = 65;
      const length = 160;
      const segW = isMobile ? 25 : 45;
      const segL = isMobile ? 35 : 65;

      const mGeo = new THREE.PlaneGeometry(width, length, segW, segL);
      mGeo.rotateX(-Math.PI / 2);

      const pos = mGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const vx = pos.getX(i);
        const vz = pos.getZ(i);

        // Multi-octave procedural displacement for sharp Himalayan/Karakoram crests
        const distFromCenter = Math.abs(vx);
        const edgeFactor = Math.sin((distFromCenter / width) * Math.PI);
        const h1 = Math.sin(vx * 0.12) * Math.cos(vz * 0.08) * 12;
        const h2 = Math.sin(vx * 0.25 + vz * 0.15) * 6;
        const h3 = Math.cos(vx * 0.5 - vz * 0.3) * 2.5;

        const elevation = Math.max(0, (h1 + h2 + h3 + 10) * edgeFactor);
        pos.setY(i, elevation);
      }
      mGeo.computeVertexNormals();

      // Dark Matte Slate Rock Material
      const rockMat = new THREE.MeshStandardMaterial({
        color: 0x090f1d,
        roughness: 0.95,
        metalness: 0.2,
        flatShading: true,
      });
      const rockMesh = new THREE.Mesh(mGeo, rockMat);
      rockMesh.position.set(xOffset, -1, -45);
      mountainGroup.add(rockMesh);

      // Glowing Wireframe Crests (Gold & Aurora Ice)
      const wireMat = new THREE.MeshBasicMaterial({
        color: side === "left" ? 0x38bdf8 : 0xd4af37,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });
      const wireMesh = new THREE.Mesh(mGeo, wireMat);
      wireMesh.position.set(xOffset, -0.9, -45);
      mountainGroup.add(wireMesh);
    };

    createMountainRidge("left");
    createMountainRidge("right");

    // ─── 6. VOLUMETRIC FLOATING PARTICLES & STARFIELD ────────────────────────
    const particleCount = isMobile ? 650 : 2000;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xf59e0b);
    const cyanColor = new THREE.Color(0x38bdf8);
    const whiteColor = new THREE.Color(0xf8fafc);

    for (let i = 0; i < particleCount; i++) {
      const px = (Math.random() - 0.5) * 110;
      const py = Math.random() * 45 - 2;
      const pz = (Math.random() - 0.5) * 200 - 20;

      particlePositions[i * 3] = px;
      particlePositions[i * 3 + 1] = py;
      particlePositions[i * 3 + 2] = pz;

      // Color distribution: gold near top/hero, cyan/white stars deeper in
      const choice = Math.random();
      const col = pz > 0 ? (choice > 0.3 ? goldColor : whiteColor) : (choice > 0.5 ? cyanColor : whiteColor);

      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.35 : 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // ─── 7. INTERACTIVE MOUSE PARALLAX & SCROLL CHOREOGRAPHY ─────────────────
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

    // Visibility handling (pause rendering when tab hidden)
    let isTabVisible = true;
    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // ─── 8. RENDER LOOP & SCROLLTRAJECTORY (PHASE 3) ──────────────────────────
    let animId: number;
    let clock = new THREE.Clock();

    // Smooth lerped camera coordinates
    let curCamZ = 60;
    let curCamY = 6;
    let curCamX = 0;
    let curTargetZ = 30;
    let curTargetY = 4;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isTabVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Mouse Parallax Lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Calculate total page scroll percentage (0.0 to 1.0)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;

      // ─── CAMERA CHOREOGRAPHY BASED ON SCROLL (PHASE 3 SPEC) ─────────────────
      let destCamX = mouseX * 2.5;
      let destCamY = 6;
      let destCamZ = 60;
      let destTargetX = mouseX * 1.2;
      let destTargetY = 4 - mouseY * 1.5;
      let destTargetZ = 30;

      if (scrollRatio <= 0.2) {
        // 0% – 20%: Hero Section — Low dramatic angle down glowing highway
        const t = scrollRatio / 0.2;
        destCamZ = 60 - t * 15;
        destCamY = 6 + t * 2;
        destCamX = mouseX * 2.0;
        destTargetZ = 30 - t * 10;
        destTargetY = 4;
      } else if (scrollRatio <= 0.5) {
        // 20% – 50%: Fleet Section — Accelerated showroom angle along highway
        const t = (scrollRatio - 0.2) / 0.3;
        destCamZ = 45 - t * 20; // 45 -> 25
        destCamY = 8 + t * 2;   // 8 -> 10
        destCamX = mouseX * 2.5;
        destTargetZ = 20 - t * 15;
        destTargetY = 4 + t * 2;
      } else if (scrollRatio <= 0.75) {
        // 50% – 75%: Popular Destinations (Hunza, Skardu, Swat) — Ascend into Mountain Valley
        const t = (scrollRatio - 0.5) / 0.25;
        destCamZ = 25 - t * 40;  // 25 -> -15
        destCamY = 10 + t * 12; // 10 -> 22
        destCamX = mouseX * 3.5;
        destTargetZ = 5 - t * 30;
        destTargetY = 6 + t * 6;
      } else {
        // 75% – 100%: Services, Stats, FAQ & Footer — Starlit night sky transition
        const t = (scrollRatio - 0.75) / 0.25;
        destCamZ = -15 - t * 35; // -15 -> -50
        destCamY = 22 + t * 8;   // 22 -> 30
        destCamX = mouseX * 3.0;
        destTargetZ = -25 - t * 25;
        destTargetY = 12 + t * 8;
      }

      // Smooth camera lerp (scrub feeling)
      curCamX += (destCamX - curCamX) * 0.08;
      curCamY += (destCamY - curCamY) * 0.08;
      curCamZ += (destCamZ - curCamZ) * 0.08;
      curTargetY += (destTargetY - curTargetY) * 0.08;
      curTargetZ += (destTargetZ - curTargetZ) * 0.08;

      camera.position.set(curCamX, curCamY, curCamZ);
      camera.lookAt(destTargetX, curTargetY, curTargetZ);

      // ─── ANIMATE PROCEDURAL VEHICLE SCULPTURE ───────────────────────────────
      // Gentle sine-wave hover float & mouse banking
      const hoverY = 1.8 + Math.sin(elapsedTime * 1.6) * 0.12;
      vehicleGroup.position.y = hoverY;
      vehicleGroup.rotation.z = -mouseX * 0.08; // Banking tilt
      vehicleGroup.rotation.y = -Math.PI / 7 + mouseX * 0.05;

      // Subtle vehicle fade out as camera passes beyond fleet zone
      if (curCamZ < 30) {
        const fade = Math.max(0, (curCamZ - 15) / 15);
        vehicleGroup.position.x = 5.5 + (1 - fade) * 8;
      } else {
        vehicleGroup.position.x = 5.5;
      }

      // ─── ANIMATE SPEED LIGHT TRAILS ─────────────────────────────────────────
      streaks.forEach((streak) => {
        streak.mesh.position.z += streak.speed;
        if (streak.mesh.position.z > 80) {
          streak.mesh.position.z = -120;
          streak.mesh.position.x = (Math.random() - 0.5) * (roadWidth - 1.2);
        }
      });

      // ─── DYNAMIC LIGHTING INTENSITY SHIFTS ──────────────────────────────────
      // Gold warm light follows camera in upper sections
      goldLight.position.set(5, curCamY + 2, curCamZ - 10);
      goldLight.intensity = Math.max(1.0, 3.5 * (1 - scrollRatio * 0.8));

      // Moonlight / Northern Aurora intensifies at destination/footer zone
      moonLight.intensity = 1.5 + scrollRatio * 2.0;

      // Particle subtle rotation
      particleSystem.rotation.y = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    // ─── CLEANUP ON UNMOUNT ──────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);

      // Dispose Geometries and Materials
      roadGeo.dispose();
      roadMat.dispose();
      railMat.dispose();
      streakGeo.dispose();
      cyanTrailMat.dispose();
      goldTrailMat.dispose();
      bodyGeo.dispose();
      bodyMat.dispose();
      cabinGeo.dispose();
      cabinMat.dispose();
      wheelGeo.dispose();
      wheelMat.dispose();
      rimMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      id="iris-3d-canvas"
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
