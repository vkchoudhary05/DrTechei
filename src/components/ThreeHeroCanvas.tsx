import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroCanvasProps {
  interactive?: boolean;
}

export const ThreeHeroCanvas: React.FC<ThreeHeroCanvasProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for WebGL support
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 450;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 30, 80);
    camera.lookAt(0, 0, 0);

    // Create 3D Particle Grid Wave (Cyber Digital Ocean)
    const SEPARATION = 4.5;
    const AMOUNTX = 45;
    const AMOUNTY = 45;
    const numParticles = AMOUNTX * AMOUNTY;

    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);
    const colors = new Float32Array(numParticles * 3);

    const color1 = new THREE.Color('#4F46E5'); // Royal Indigo
    const color2 = new THREE.Color('#D98E3A'); // Warm Amber/Gold
    const color3 = new THREE.Color('#06B6D4'); // Cyber Cyan

    let i = 0;
    let j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions[i] = x;
        positions[i + 1] = 0;
        positions[i + 2] = z;

        scales[j] = 1;

        // Color interpolation based on position
        const t = (ix + iy) / (AMOUNTX + AMOUNTY);
        const blended = t < 0.5 
          ? color1.clone().lerp(color3, t * 2)
          : color3.clone().lerp(color2, (t - 0.5) * 2);

        colors[i] = blended.r;
        colors[i + 1] = blended.g;
        colors[i + 2] = blended.b;

        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Shader / Material with circular soft point
    const canvasTexture = (() => {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(240, 245, 255, 0.8)');
        gradient.addColorStop(0.7, 'rgba(99, 102, 241, 0.25)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(c);
    })();

    const material = new THREE.PointsMaterial({
      size: 2.8,
      map: canvasTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Add glowing geometric floating rings
    const ringGroup = new THREE.Group();
    const ringGeo1 = new THREE.TorusGeometry(18, 0.3, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xD98E3A,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(26, 0.2, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x6366F1,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ringGroup.add(ring2);

    scene.add(ringGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetMouseX = (x - rect.width / 2) * 0.15;
      targetMouseY = (y - rect.height / 2) * 0.15;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0 && renderer) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let count = 0;

    const animate = () => {
      count += 0.04;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX * 0.6;
      camera.position.y = 32 + -mouseY * 0.4;
      camera.lookAt(0, 0, 0);

      // Rotate decorative rings
      ringGroup.rotation.y += 0.005;
      ringGroup.rotation.x += 0.003;

      // Dynamic Wave Mathematics
      const posArray = particles.geometry.attributes.position.array as Float32Array;
      let particleIndex = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const yPos =
            Math.sin((ix + count) * 0.3) * 5 +
            Math.sin((iy + count) * 0.4) * 5 +
            Math.sin((ix + iy + count) * 0.2) * 3;

          posArray[particleIndex * 3 + 1] = yPos;
          particleIndex++;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      if (renderer) {
        renderer.render(scene, camera);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      geometry.dispose();
      material.dispose();
      canvasTexture.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-90"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
