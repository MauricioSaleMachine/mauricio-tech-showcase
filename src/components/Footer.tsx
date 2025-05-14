
import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold font-poppins mb-4">Maurício Cerqueira</h3>
            <p className="mb-4 text-gray-400 max-w-md">
              Desenvolvedor e programador focado em automação de processos empresariais
              e desenvolvimento web. Estudante da FATEC Barueri.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/MauricioSaleMachine" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mauricio-cerqueira-482962311/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3BMQK%2F%2BXkpQ8aoOD687H%2Fr9Q%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#habilidades" className="text-gray-400 hover:text-white transition-colors">Habilidades</a></li>
              <li><a href="#projetos" className="text-gray-400 hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#formacao" className="text-gray-400 hover:text-white transition-colors">Formação</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                mauricio@salemachine.com.br
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                (11) 97783-8521
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Maurício De Jesus Cerqueira. Todos os direitos reservados.
          </p>
          <button 
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
            onClick={scrollToTop}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
