
import { Card, CardContent } from "@/components/ui/card";
import { Code, FileText, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Sou um programador de 19 anos, estudante da FATEC Barueri. Sou dedicado e apaixonado por tecnologia, 
            desenvolvendo projetos com foco em automação de processos empresariais e também atuando na área de desenvolvimento web.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-8 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Desenvolvimento Web</h3>
              <p className="text-muted-foreground">
                Crio soluções web responsivas e intuitivas utilizando as melhores e mais recentes tecnologias do mercado.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-8 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <Rocket className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Automação</h3>
              <p className="text-muted-foreground">
                Desenvolvo soluções de automação que aumentam a produtividade e diminuem erros em processos empresariais.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-8 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Projetos Acadêmicos</h3>
              <p className="text-muted-foreground">
                Participo ativamente de projetos acadêmicos que me ajudam a expandir conhecimentos e aplicar teoria na prática.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
