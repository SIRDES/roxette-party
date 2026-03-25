
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 120,
        particles: {
          color: { value: "#ffffff" },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 1.2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 120,
          },
          opacity: {
            value: { min: 0.1, max: 0.6 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
              minimumValue: 0.1
            }
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
              minimumValue: 1
            }
          },
        },
        detectRetina: true,
        fullScreen: { 
          enable: true, 
          zIndex: 0 
        }
      }}
    />
  );
}
