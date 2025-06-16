import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Database, Film } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "Contact Manager",
      description: "A comprehensive contact management system built with React.js and Firebase, featuring role-based access control, real-time search, and CSV import/export functionality.",
      technologies: ["React.js", "Firebase", "REST API", "HTML", "CSS"],
      features: [
        "Responsive user interface across all devices",
        "Secure authentication system",
        "Real-time search functionality",
        "CSV import/export capabilities",
        "Role-based access control"
      ],
      githubUrl: "#",
      liveUrl: "#",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500",
      image: "/images/projects/contact-manager.png"
    },
    {
      title: "Movie Recommendation System",
      description: "An intelligent machine learning-based movie recommendation model that analyzes user preferences and viewing behavior to provide personalized movie suggestions using TMDB dataset.",
      technologies: ["Python", "Streamlit", "Machine Learning", "TMDB API", "Pandas"],
      features: [
        "Machine learning algorithms for personalized recommendations",
        "Integration with TMDB API for real-time movie data",
        "Intuitive Streamlit interface for easy discovery",
        "User preference analysis and behavior tracking",
        "Content-based and collaborative filtering"
      ],
      githubUrl: "#",
      liveUrl: null,
      icon: <Film className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-500",
      image: "/images/projects/movie-recommender.png"
    },
    {
      title: "Primary School Management System",
      description: "A full-stack web application with role-based dashboards for students and administrators, featuring responsive design and optimized database operations.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      features: [
        "Role-based dashboards for different user types",
        "Responsive layouts with smooth navigation",
        "Optimized MySQL database schemas",
        "Efficient data retrieval and storage",
        "Administrative control panel"
      ],
      githubUrl: "#",
      liveUrl: null,
      icon: <Database className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-500",
      image: "/images/projects/school-management.png"
    },
    {
      title: "Personal Portfolio Website",
      description: "A visually engaging portfolio site built with React, showcasing my skills, projects, internships, and achievements, with a modern and fully responsive UI.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vite"],
      features: [
        "Modern, responsive design",
        "Animated sections and smooth transitions",
        "Showcases personal projects, skills, and achievements",
        "Contact form and social links",
        "Clean, accessible codebase"
      ],
      githubUrl: "https://github.com/aditibandewar",
      liveUrl: "#home",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-teal-400 to-indigo-500",
      image: "/images/projects/portfolio.png"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical skills through real-world applications and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/30 border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400">
                        <Github className="w-5 h-5" />
                      </Button>
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-teal-400">
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-teal-300 font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-cyan-300 font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      className="border-teal-500 text-teal-300 hover:bg-teal-500/10"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0"
            asChild
          >
            <a href="https://github.com/aditibandewar" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
