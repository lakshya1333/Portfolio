"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const codeSnippets = [
  `const developer = {
  name: "Lakshya",
  skills: ["React", "Node.js"],
  passion: "Building dreams"
};`,
  `function createAwesome() {
  const ideas = [];
  while(true) {
    ideas.push(innovate());
  }
  return magic;
}`,
  `class Developer {
  constructor() {
    this.coffee = Infinity;
    this.bugs = 0;
  }
  code() { return "perfect"; }
}`,
  `const skills = [
  "JavaScript", "TypeScript",
  "React", "Next.js",
  "Node.js", "MongoDB"
].map(s => master(s));`,
  `async function buildFuture() {
  await learn();
  await practice();
  await innovate();
  return success;
}`,
];

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Floating code particles
    class CodeParticle {
      x: number;
      y: number;
      speed: number;
      char: string;
      opacity: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.speed = 0.2 + Math.random() * 0.5;
        const chars = "{}[]()<>=+-*/&|!?;:.,#$@";
        this.char = chars[Math.floor(Math.random() * chars.length)];
        this.opacity = Math.random() * 0.5;
        this.size = 12 + Math.random() * 8;
      }

      update() {
        this.y -= this.speed;
        if (this.y < 0) {
          this.y = canvas!.height;
          this.x = Math.random() * canvas!.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.font = `${this.size}px monospace`;
        ctx.fillStyle = `rgba(0, 243, 255, ${this.opacity})`;
        ctx.fillText(this.char, this.x, this.y);
      }
    }

    const particles: CodeParticle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new CodeParticle());
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Rotate code snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating Code Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      {/* Animated Code Snippets */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-8">
          {/* Left side code block */}
          <motion.div
            key={`left-${currentSnippet}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.08, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="bg-black/20 backdrop-blur-sm border border-cyan-500/10 rounded-lg p-6 font-mono text-sm"
          >
            <pre className="text-cyan-400/60">
              <code>{codeSnippets[currentSnippet]}</code>
            </pre>
          </motion.div>

          {/* Right side code block */}
          <motion.div
            key={`right-${currentSnippet}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.08, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-black/20 backdrop-blur-sm border border-purple-500/10 rounded-lg p-6 font-mono text-sm"
          >
            <pre className="text-purple-400/60">
              <code>{codeSnippets[(currentSnippet + 1) % codeSnippets.length]}</code>
            </pre>
          </motion.div>
        </div>
      </div>

      {/* Typing Cursor Effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-5 bg-cyan-400"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Binary Rain */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              color: Math.random() > 0.5 ? "#00f3ff" : "#b026ff",
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: "100vh",
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {Math.random().toString(2).substring(2, 10)}
          </motion.div>
        ))}
      </div>

      {/* Glowing Code Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        <defs>
          <linearGradient id="code-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f3ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f3ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00f3ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal scanning lines */}
        {[20, 40, 60, 80].map((y, i) => (
          <motion.line
            key={i}
            x1="0"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="url(#code-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-5"></div>

      {/* Ambient Glows */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0,243,255,0.6) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(176,38,255,0.6) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Code Terminal Lines */}
      <div className="absolute top-10 left-10 font-mono text-xs text-cyan-400/20 space-y-1">
        <div>{">"} initializing portfolio...</div>
        <div>{">"} loading skills... ✓</div>
        <div>{">"} compiling projects... ✓</div>
        <div className="text-green-400/20">{">"} ready to impress! ✓</div>
      </div>

      <div className="absolute bottom-10 right-10 font-mono text-xs text-purple-400/20 space-y-1 text-right">
        <div>status: online ●</div>
        <div>mode: developer</div>
        <div>coffee: brewing...</div>
      </div>
    </div>
  );
}
