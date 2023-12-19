import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleConfig = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            random: false,
            straight: false,
            outModes: "out",
          },
          number: { density: { enable: true, area: 1000 }, value: 15 },
          shape: {
            type: "image",
            options: {
              image: {
                src: "/bubble.png",
                width: 100,
                height: 100,
              },
            },
          },
          opacity: {
            value: 0.7,
            random: {
              enable: true,
              minimumValue: 0.1,
            },
          },
          size: {
            value: { min: 4, max: 15 },
          },
          emitters: [
            {
              direction: "top",
              particles: {
                color: "#f00",
              },
              rate: {
                quantity: 1,
                delay: 0.1,
              },
              size: {
                width: 100,
                height: 10,
              },
              position: {
                x: 50,
                y: 100,
              },
            },
            {
              direction: "top",
              particles: {
                color: "#0f0",
              },
              rate: {
                quantity: 1,
                delay: 0.1,
              },
              size: {
                width: 100,
                height: 10,
              },
              position: {
                x: 50,
                y: 100,
              },
            },
          ],
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        detectRetina: true,
        background: {
          color: "#000000",
        },
      }}
    />
  );
};

export default ParticleConfig;
