
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const fullText = "Estudante da FATEC Barueri, 19 anos, apaixonado por tecnologia e especializado em automação de processos empresariais e desenvolvimento web.";
  const [index, setIndex] = useState(0);
  
  // Programming language logos
  const programmingLogos = [
    { name: "JavaScript", icon: "🟨" },
    { name: "Python", icon: "🐍" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "🔷" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Git", icon: "📦" }
  ];
  
  useEffect(() => {
    if (!hasAnimated && index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, index + 1));
        setIndex(index + 1);
      }, 50);
      
      return () => clearTimeout(timeout);
    } else if (index === fullText.length && !hasAnimated) {
      setHasAnimated(true);
      setDisplayText(fullText);
    }
  }, [index, hasAnimated, fullText]);

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <p className="text-blue-600 font-medium mb-2">👋 Olá, eu sou</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4">
                Mauricio Cerqueira
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-6">
                Desenvolvedor e Programador
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg h-24">
                {displayText}
                {!hasAnimated && <span className="animate-pulse">|</span>}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                  onClick={() => window.open("https://www.linkedin.com/in/mauricio-cerqueira-482962311/", "_blank")}
                >
                  <Download size={18} />
                  Competencias
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => window.open("https://github.com/MauricioSaleMachine?tab=repositories", "_blank")}
                >
                  Ver projetos
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-40"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-1">
                <div className="h-full w-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="flex animate-scroll-infinite">
                        {/* First set of logos */}
                        {programmingLogos.map((logo, index) => (
                          <div
                            key={`first-${index}`}
                            className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 mx-2 flex items-center justify-center text-3xl md:text-4xl bg-gray-100 dark:bg-gray-700 rounded-lg"
                            title={logo.name}
                          >
                            {logo.icon}
                          </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {programmingLogos.map((logo, index) => (
                          <div
                            key={`second-${index}`}
                            className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 mx-2 flex items-center justify-center text-3xl md:text-4xl bg-gray-100 dark:bg-gray-700 rounded-lg"
                            title={logo.name}
                          >
                            {logo.icon}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
