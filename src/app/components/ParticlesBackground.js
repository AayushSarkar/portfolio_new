// "use client";
// import { useCallback } from "react";
// import { Particles } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import {
//   SiNextdotjs,
//   SiReact,
//   SiMongodb,
//   SiNodedotjs,
//   SiTailwindcss,
//   SiJavascript,
//   SiFirebase,
//   SiGithub,
//   SiHtml5,
//   SiCss3,
// } from "react-icons/si";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
//       {/* Particle background */}
//       <Particles
//         id="tsparticles"
//         className="absolute w-full h-full"
//         init={particlesInit}
//         options={{
//           background: { color: { value: "#000" } },
//           fpsLimit: 60,
//           particles: {
//             color: { value: "#00ffcc" },
//             links: {
//               enable: true,
//               color: "#00ffcc",
//               distance: 150,
//               opacity: 0.5,
//             },
//             move: { enable: true, speed: 2 },
//             number: { value: 50 },
//             opacity: { value: 0.7 },
//             size: { value: { min: 1, max: 5 } },
//           },
//           interactivity: {
//             events: { onHover: { enable: true, mode: "repulse" } },
//           },
//           detectRetina: true,
//         }}
//       />

//       {/* Floating tech icons */}
//       <div className="absolute w-full h-full pointer-events-none">
//         {/* Top Left */}
//         <div className="absolute top-10 left-10 text-teal-400 text-6xl animate-bounce">
//           <SiReact />
//         </div>

//         {/* Top Right */}
//         <div className="absolute top-10 right-10 text-green-400 text-6xl animate-spin">
//           <SiMongodb />
//         </div>

//         {/* Bottom Left */}
//         <div className="absolute bottom-10 left-60 text-yellow-400 text-6xl animate-bounce">
//           <SiJavascript />
//         </div>

//         {/* Bottom Right */}
//         <div className="absolute bottom-10 right-10 text-green-600 text-6xl animate-pulse">
//           <SiNodedotjs />
//         </div>

//         {/* Mid Left */}
//         <div className="absolute top-[35%] left-50 text-blue-500 text-6xl animate-spin">
//           <SiTailwindcss />
//         </div>

//         {/* Mid Right */}
//         <div className="absolute top-[40%] right-0 text-orange-500 text-6xl animate-pulse">
//           <SiFirebase />
//         </div>

//         {/* Far Top Center */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-6xl animate-bounce">
//           <SiNextdotjs />
//         </div>

//         {/* Bottom Center */}
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-300 text-6xl animate-bounce">
//           <SiGithub />
//         </div>

//         {/* Far Left Center */}
//         <div className="absolute top-1/2 left-4 text-orange-600 text-6xl animate-spin">
//           <SiHtml5 />
//         </div>

//         {/* Far Right Center */}
//         <div className="absolute top-1/2 right-4 text-blue-400 text-6xl animate-spin">
//           <SiCss3 />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParticlesBackground;
"use client";
import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: { color: { value: "#000" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#00ffcc" },
          links: {
            enable: true,
            color: "#00ffcc",
            distance: 150,
            opacity: 0.5,
          },
          move: { enable: true, speed: 2 },
          number: { value: 50 },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 5 } },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
