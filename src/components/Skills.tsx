
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Wrench, Users, Zap, Star, Rocket, Brain } from "lucide-react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C++", "JavaScript", "SQL"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/10",
      description: "Building robust applications with modern languages"
    },
    {
      title: "Frontend Technologies",
      icon: <Rocket className="w-6 h-6" />,
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-500/10",
      description: "Crafting beautiful user interfaces"
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["Firebase", "MySQL", "PHP", "REST APIs"],
      color: "from-teal-500 to-emerald-500",
      bgColor: "bg-teal-500/10",
      description: "Powering applications with reliable backends"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Coding Ninjas"],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      description: "Leveraging the best development tools"
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Leadership", "Communication", "Problem-Solving", "Team Management"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10",
      description: "Building strong teams and relationships"
    },
    {
      title: "Specializations",
      icon: <Star className="w-6 h-6" />,
      skills: ["Competitive Programming", "Project Management"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/10",
      description: "Areas of expertise and passion"
    }
  ];

  const techStack = [
    { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-500 to-amber-500" },
    { name: "HTML/CSS", level: 95, color: "from-green-500 to-emerald-500" },
    { name: "C++", level: 80, color: "from-teal-500 to-cyan-500" },
    { name: "Firebase", level: 75, color: "from-cyan-500 to-teal-500" },
    { name: "MySQL", level: 70, color: "from-indigo-500 to-blue-500" }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 opacity-0 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 rounded-full border border-teal-500/20 mb-6">
            <Zap className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
              Skills &{" "}
            </span>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through passionate learning and hands-on experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group bg-gray-800/30 border-gray-700 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 card-hover"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`${category.bgColor} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`bg-gradient-to-r ${category.color} p-2 rounded-xl`}>
                      {category.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group/skill flex items-center justify-between bg-gray-700/30 px-4 py-3 rounded-xl border border-gray-600/30 hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-300"
                    >
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors">{skill}</span>
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-60 group-hover/skill:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-sm p-12 rounded-3xl border border-gray-800">
            <h3 className="text-3xl font-bold text-center text-white mb-12 flex items-center justify-center">
              <Star className="w-8 h-8 mr-3 text-yellow-400" />
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              {techStack.map((skill, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 font-semibold text-lg">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-teal-400 font-bold">{skill.level}%</span>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`w-4 h-4 ${
                              star <= Math.floor(skill.level / 20) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
