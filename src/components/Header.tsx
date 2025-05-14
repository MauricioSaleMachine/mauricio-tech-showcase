
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
  
  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-2xl font-bold font-poppins">
          <a href="#hero" className="text-blue-700">Maurício<span className="text-gray-800">.</span></a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#sobre" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Sobre</a></li>
            <li><a href="#habilidades" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Habilidades</a></li>
            <li><a href="#projetos" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Projetos</a></li>
            <li><a href="#formacao" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Formação</a></li>
            <li><a href="#contato" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Contato</a></li>
          </ul>
        </nav>
        
        {/* Contact Button */}
        <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">
          <a href="mailto:mauricio@email.com">Contato</a>
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <ul className="flex flex-col py-4">
            <li><a href="#sobre" className="block py-2 px-4 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#habilidades" className="block py-2 px-4 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#projetos" className="block py-2 px-4 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Projetos</a></li>
            <li><a href="#formacao" className="block py-2 px-4 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Formação</a></li>
            <li><a href="#contato" className="block py-2 px-4 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
            <li className="px-4 pt-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <a href="mailto:mauricio@email.com" className="w-full">Contato</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
