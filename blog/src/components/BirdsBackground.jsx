import { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

const BirdsBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    // Prevent multiple instances
    if (!vantaEffect.current) {
      vantaEffect.current = BIRDS({
        THREE, // Pass the imported Three.js
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0xfafafa, // White background
        separation: 30.0,
        quantity: 5,
        cohesion: 29.00
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="min-h-screen w-full" />;
};

export default BirdsBackground;
