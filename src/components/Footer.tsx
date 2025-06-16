
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              Aditi Bandewar
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional web applications 
              that make a difference in people's lives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#achievements", label: "Achievements" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Let's Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="https://github.com/aditibandewar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-teal-400" />
              </a>
              <a
                href="https://linkedin.com/in/aditi-bandewar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-teal-400" />
              </a>
              <a
                href="mailto:aditibandewar068@gmail.com"
                className="p-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-teal-400" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Open for opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center mb-4 md:mb-0">
              Made with{" "}
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
              and{" "}
              <Code className="w-4 h-4 mx-1 text-teal-400" />
              by Aditi Bandewar
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
