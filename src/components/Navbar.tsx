
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`
ADITI SANJAY BANDEWAR
Frontend Developer & Tech Enthusiast
Email: aditibandewar068@gmail.com
Phone: 9975392467

EDUCATION
Bachelor of Technology in Information Technology (2021-2025)
MGM's College of Engineering, Nanded - CGPA: 8.5

SKILLS
• Programming: C++, JavaScript, SQL
• Frontend: HTML, CSS, React, Bootstrap
• Backend: Firebase, PHP, MySQL
• Tools: Git, GitHub

PROJECTS
• Movie Recommendation System - Streamlit, Python, ML Algorithm, API
• Contact Manager - React.js, Firebase, REST API
• Primary School Management System - Full-stack PHP/MySQL

ACHIEVEMENTS
• Intel® Unnati Industrial Training–2024 in Power Manager Telemetry
• 150+ competitive programming challenges solved
• Google Developer Student Club core team member
• Multiple technical certifications
    `);
    link.download = 'Aditi_Bandewar_Resume.txt';
    link.click();
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled 
          ? "bg-gray-900/90 backdrop-blur-md border-b border-teal-500/20" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Aditi.dev
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <Button
                onClick={downloadResume}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 rounded-xl"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mb-4 p-4 border border-teal-500/20">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  onClick={() => {
                    downloadResume();
                    setIsOpen(false);
                  }}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 w-full rounded-xl"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
