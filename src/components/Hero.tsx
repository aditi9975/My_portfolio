import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, ExternalLink } from "lucide-react";

const roles = [
  "Frontend Developer",
  "Problem Solver",
  "Creative Leader",
  "Competitive Programmer",
  "Tech Enthusiast"
];

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Animated background particles
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: Array<{x: number, y: number, dx: number, dy: number, size: number}> = [];
      
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.5
        });
      }

      function animate() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.x += particle.dx;
          particle.y += particle.dy;
          
          if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(79, 209, 199, 0.1)';
          ctx.fill();
        });
        
        requestAnimationFrame(animate);
      }
      
      animate();
    }

    // Role rotation interval
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div ref={textRef} className="opacity-0 transition-all duration-1000">
          {/* Name Introduction */}
          <div className="mb-12 animate-fade-in">
            <p className="text-lg md:text-xl text-teal-300 font-medium mb-4">Hello, I'm</p>
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent mb-8">
              Aditi Bandewar
            </h1>
          </div>

          {/* Rotating Roles */}
          <div className="mb-8 min-h-[40px] flex justify-center items-center h-10">
            <span
              key={roles[currentRoleIndex]}
              className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-fade-in"
            >
              {roles[currentRoleIndex]}
            </span>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in delay-600">
              Passionate about crafting{" "}
              <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text font-semibold">
                beautiful digital experiences
              </span>
              {" "}that combine cutting-edge technology with exceptional user experience
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in delay-800">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105"
            >
              <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-teal-500/50 text-teal-300 hover:bg-teal-500/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm hover:border-teal-400 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Let's Connect
            </Button>
          </div>

          {/* Social Links with hover effects */}
          <div className="flex justify-center space-x-8 animate-fade-in delay-1000">
            {[
              { icon: Github, href: "https://github.com/aditibandewar", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/aditi-bandewar", label: "LinkedIn" },
              { icon: Mail, href: "mailto:aditibandewar068@gmail.com", label: "Email" },
              { icon: ExternalLink, href: "https://leetcode.com/aditibandewar", label: "LeetCode" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500/10">
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
