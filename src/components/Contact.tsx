
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "aditibandewar068@gmail.com",
      href: "mailto:aditibandewar068@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9975392467",
      href: "tel:+919975392467"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/aditi-bandewar"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/aditibandewar"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-2 h-2 bg-teal-400 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-700" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-teal-500/30 rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Create Something{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and build the future of web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          {/* Get in Touch - Contact Information */}
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl mb-6">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? "_blank" : undefined}
                  rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600/50 hover:border-teal-500/50 transition-all duration-300 hover:bg-teal-500/5 group"
                >
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                    <p className="text-white group-hover:text-teal-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Send Message - Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-white text-sm font-medium block mb-2">Your Name</Label>
                  <Input
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500/20 rounded-lg h-12"
                    required
                  />
                </div>

                <div>
                  <Label className="text-white text-sm font-medium block mb-2">Your Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500/20 rounded-lg h-12"
                    required
                  />
                </div>

                <div>
                  <Label className="text-white text-sm font-medium block mb-2">Subject</Label>
                  <Input
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500/20 rounded-lg h-12"
                    required
                  />
                </div>

                <div>
                  <Label className="text-white text-sm font-medium block mb-2">Message</Label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 rounded-lg h-12 text-base font-medium"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
