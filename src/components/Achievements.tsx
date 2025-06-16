import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Users, BookOpen, ExternalLink, Cpu, Code2, Code } from "lucide-react";

const Achievements = () => {
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

  const achievements = [
    {
      title: "Intel® Unnati Industrial Training–2024",
      description: "Successfully completed Power Manager Telemetry training from May 2024 to July 2024",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-500",
      link: "#"
    },
    {
      title: "150+ Competitive Programming Challenges",
      description: "Mastered over 150 competitive programming challenges across LeetCode, GeeksforGeeks, and CodeStudio platforms",
      icon: <Trophy className="w-6 h-6" />,
      gradient: "from-yellow-500 to-amber-500",
      link: "#"
    },
    {
      title: "13 Technical Skill Badges",
      description: "Earned 13 technical skill badges on Coding Ninjas for proficiency in multiple programming concepts",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500",
      link: "#"
    },
    {
      title: "Google Developer Student Club",
      description: "Selected as Women Tech Makers representative in Google Developer Student Clubs (GDSC) core team",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-500",
      link: "#"
    },
    {
      title: "C++ Certification",
      description: "Certified for successfully completing Basics of C++ on Coding Ninjas platform",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-500",
      link: "#"
    },
    {
      title: "Python Certification",
      description: "Get certified for successfully completing 'Python' with the Infosys Springboard Platform",
      icon: <Code2 className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      link: "#"
    },
    {
      title: "Soft Skills Certification",
      description: "Certified for completing 'Soft Skills and Communication Skills' course on TCS-ION Platform",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-500",
      link: "#"
    }
  ];

  const responsibilities = [
    {
      title: "Departmental Coordinator",
      organization: "Visiotech Techfest 2k24",
      description: "Led departmental coordination for the annual technology festival at MGM's College of Engineering"
    },
    {
      title: "Class Representative",
      organization: "MGM's College of Engineering",
      description: "Served as class representative for 4 consecutive years, facilitating communication between students and faculty"
    },
    {
      title: "Student Coordinator Lead",
      organization: "Training and Placement Cell",
      description: "Worked as student coordinator lead under the Training and Placement Cell at MGM's College of Engineering"
    }
  ];

  return (
    <section id="achievements" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Celebrating milestones, certifications, and leadership roles that showcase my commitment to excellence
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/30 border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-r ${achievement.gradient} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-white font-semibold mb-3 text-lg leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership & Responsibilities */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Leadership & Responsibilities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {responsibilities.map((role, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/30 border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-lg w-fit mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{role.title}</h4>
                  <p className="text-teal-400 text-sm mb-3 font-medium">{role.organization}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "150+", label: "Problems Solved", color: "text-yellow-400" },
            { number: "13", label: "Certifications", color: "text-teal-400" },
            { number: "4", label: "Years Leadership", color: "text-cyan-400" },
            { number: "8.5", label: "CGPA", color: "text-green-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Competitive Programming Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-12 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 rounded-2xl">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Competitive Programming</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Solved 150+ challenges across multiple platforms, sharpening problem-solving skills 
              and algorithmic thinking through consistent practice and dedication.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">150+</div>
                <div className="text-gray-300">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
                <div className="text-gray-300">Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">Daily</div>
                <div className="text-gray-300">Practice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
