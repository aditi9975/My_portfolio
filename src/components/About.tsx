
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Award, Target, Heart } from "lucide-react";

const About = () => {
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

  const highlights = [
    { icon: Award, label: "150+ Problems", value: "Solved", color: "from-yellow-400 to-amber-500" },
    { icon: GraduationCap, label: "8.5 CGPA", value: "Academic", color: "from-green-400 to-emerald-500" },
    { icon: Target, label: "13 Badges", value: "Earned", color: "from-teal-400 to-cyan-500" },
    { icon: Heart, label: "4 Years", value: "Leadership", color: "from-cyan-400 to-teal-500" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 opacity-0 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 rounded-full border border-teal-500/20 mb-6">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-teal-300 text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
              Passionate Developer with a{" "}
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Creative Vision
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Turning ideas into beautiful, functional digital experiences through code and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mr-3 flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hello! I'm Aditi, a passionate Full Stack Developer currently pursuing my 
                    Bachelor's in Information Technology at MGM's College of Engineering, Nanded. 
                    My journey in tech began with curiosity and has evolved into a deep passion 
                    for creating digital experiences that matter.
                  </p>
                  <p>
                    I specialize in React.js, JavaScript, and modern web development practices. 
                    My approach combines technical expertise with creative problem-solving to 
                    deliver solutions that are not just functional, but beautiful and user-friendly.
                  </p>
                  <p>
                    Beyond coding, I'm actively involved in tech communities, having served as 
                    a Women Tech Makers representative in GDSC and demonstrating leadership 
                    in various capacities throughout my academic journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group bg-gray-800/30 border-gray-700 hover:border-teal-500/50 transition-all duration-500 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Educational Excellence
          </h3>
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-500"></div>
            
            {[
              {
                degree: "Bachelor of Technology in Information Technology",
                institution: "MGM's College of Engineering, Nanded",
                period: "2021 - 2025",
                grade: "CGPA: 8.5",
                status: "current"
              },
              {
                degree: "Maharashtra State Board 12th",
                institution: "Blue Bells Junior College, Nanded",
                period: "2020 - 2021",
                grade: "96.00%",
                status: "completed"
              },
              {
                degree: "Maharashtra State Board 10th",
                institution: "Mahatma Phule High School, Nanded",
                period: "2018 - 2019",
                grade: "91.80%",
                status: "completed"
              }
            ].map((edu, index) => (
              <div key={index} className="relative flex items-center group">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="ml-16 flex-1">
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-white font-semibold text-lg">{edu.degree}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'current' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {edu.status === 'current' ? 'Current' : 'Completed'}
                        </span>
                      </div>
                      <p className="text-teal-300 text-sm mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.institution}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </span>
                        <span className="bg-gradient-to-r from-teal-500 to-cyan-500 px-3 py-1 rounded-full text-white text-xs font-bold">
                          {edu.grade}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
