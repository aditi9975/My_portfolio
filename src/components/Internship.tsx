
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, Code2, Users, GitBranch, Zap } from "lucide-react";

const Internship = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    { name: "React.js", icon: <Code2 className="w-4 h-4" /> },
    { name: "JavaScript", icon: <Code2 className="w-4 h-4" /> },
    { name: "Git", icon: <GitBranch className="w-4 h-4" /> }
  ];

  const contributions = [
    "Built responsive web interfaces with modern design principles",
    "Collaborated effectively with backend development teams",
    "Implemented user-friendly frontend solutions using React.js",
    "Gained hands-on experience in team-based development workflows",
    "Contributed to version control and code review processes"
  ];

  return (
    <section id="internship" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 opacity-0 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 rounded-full border border-teal-500/20 mb-6">
            <Building2 className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Professional Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
              Internship{" "}
            </span>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Real-world experience in professional frontend development
          </p>
        </div>

        {/* Internship Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="group bg-gray-800/30 border-gray-700 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-12 relative z-10">
              {/* Company Header */}
              <div className="flex items-center mb-8">
                <div className="bg-teal-500/10 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer Intern</h3>
                  <p className="text-xl text-teal-300 font-semibold">Hashbit Innovations</p>
                  <div className="flex items-center mt-2 text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>April 2025 - June 2025</span>
                  </div>
                </div>
              </div>

              {/* Key Contributions */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  Key Contributions
                </h4>
                <div className="grid gap-3">
                  {contributions.map((contribution, index) => (
                    <div 
                      key={index}
                      className="flex items-start bg-gray-700/30 px-4 py-3 rounded-xl border border-gray-600/30 hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{contribution}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-teal-400" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center bg-gradient-to-r from-teal-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-teal-500/30 hover:border-teal-400 hover:scale-105 transition-all duration-300"
                    >
                      {tech.icon}
                      <span className="text-teal-300 font-medium ml-2">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Highlight */}
              <div className="mt-8 p-6 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl border border-teal-500/20">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 text-cyan-400 mr-2" />
                  <h4 className="text-lg font-semibold text-white">Real-World Impact</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Gained invaluable real-world experience in team-based development, learning industry best practices 
                  and contributing to meaningful projects that enhanced my technical skills and professional growth.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Internship;
