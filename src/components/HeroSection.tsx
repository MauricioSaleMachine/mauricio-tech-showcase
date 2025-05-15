
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Estudante da FATEC Barueri, 19 anos, apaixonado por tecnologia e especializado em automação de processos empresariais e desenvolvimento web.";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < fullText.length) {
          setDisplayText(fullText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        if (index > 0) {
          setDisplayText(fullText.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
          setTimeout(() => {}, 500);
        }
      }
    }, isDeleting ? 30 : 50);
    
    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <p className="text-blue-600 font-medium mb-2">👋 Olá, eu sou</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4">
                Maurício De Jesus Cerqueira
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-6">
                Desenvolvedor e Programador
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg h-24">
                {displayText}<span className="animate-pulse">|</span>
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
                  <div className="text-center p-1">
                    <div className="w-44 h-44 md:w-56 md:h-56 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/lovable-uploads/1bfd5a1a-b5b7-40f8-ae08-3507f13f717a.png" 
                        alt="Maurício Cerqueira" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">Maurício Cerqueira</h3>
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
