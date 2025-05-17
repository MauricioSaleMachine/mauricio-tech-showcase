import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Maurício";
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Typing animation effect
  useEffect(() => {
    let timeout: number;
    
    if (!isDeleting && displayText === fullText) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(75); // Faster when deleting
      }, 1500); // Pause at full text
    } else if (isDeleting && displayText === "") {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setTypingSpeed(150); // Normal speed when typing
      }, 800); // Pause when empty
    } else {
      timeout = window.setTimeout(() => {
        if (isDeleting) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }
      }, typingSpeed);
    }
    
    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, fullText, typingSpeed]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80 // Offset for the fixed header
      });
      setIsMenuOpen(false);
    }
  };
  
  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-background/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-2xl font-bold font-poppins">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-blue-700"
          >
            <span className="inline-block min-w-[100px] font-mono">{displayText}</span>
            <span className="text-foreground">.</span>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="font-medium text-foreground hover:text-blue-600 transition-colors"
              >
                Sobre
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('habilidades')} 
                className="font-medium text-foreground hover:text-blue-600 transition-colors"
              >
                Habilidades
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projetos')} 
                className="font-medium text-foreground hover:text-blue-600 transition-colors"
              >
                Projetos
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('formacao')} 
                className="font-medium text-foreground hover:text-blue-600 transition-colors"
              >
                Formação
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('certificacoes')} 
                className="font-medium text-foreground hover:text-blue-600 transition-colors"
              >
                Certificações
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="font-medium text-foreground hover:text-blue-600 transition-colors"
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
        
        {/* Contact Button and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button className="bg-blue-600 hover:bg-blue-700">
            <a href="https://www.linkedin.com/in/mauricio-cerqueira-482962311/" target="_blank" rel="noopener noreferrer">Contato</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="text-foreground" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-lg absolute w-full">
          <ul className="flex flex-col py-4">
            <li><button onClick={() => scrollToSection('sobre')} className="text-left block py-2 px-4 w-full hover:bg-blue-50 dark:hover:bg-blue-900/20">Sobre</button></li>
            <li><button onClick={() => scrollToSection('habilidades')} className="text-left block py-2 px-4 w-full hover:bg-blue-50 dark:hover:bg-blue-900/20">Habilidades</button></li>
            <li><button onClick={() => scrollToSection('projetos')} className="text-left block py-2 px-4 w-full hover:bg-blue-50 dark:hover:bg-blue-900/20">Projetos</button></li>
            <li><button onClick={() => scrollToSection('formacao')} className="text-left block py-2 px-4 w-full hover:bg-blue-50 dark:hover:bg-blue-900/20">Formação</button></li>
            <li><button onClick={() => scrollToSection('certificacoes')} className="text-left block py-2 px-4 w-full hover:bg-blue-50 dark:hover:bg-blue-900/20">Certificações</button></li>
            <li><button onClick={() => scrollToSection('contato')} className="text-left block py-2 px-4 w-full hover:bg-blue-50 dark:hover:bg-blue-900/20">Contato</button></li>
            <li className="px-4 pt-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <a href="https://www.linkedin.com/in/mauricio-cerqueira-482962311/" className="w-full" target="_blank" rel="noopener noreferrer">Contato</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
