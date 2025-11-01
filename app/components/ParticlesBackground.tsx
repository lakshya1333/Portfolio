"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 150,
            links: {
              opacity: 0.8,
            },
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#00f3ff", "#ff00ff", "#b026ff", "#00ff88"],
        },
        links: {
          color: "#00f3ff",
          distance: 150,
          enable: true,
          opacity: 0.6,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 120,
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle"],
        },
        size: {
          value: { min: 1, max: 4 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="w-full h-full"
        />
      </div>
    );
  }

  return <></>;
}
