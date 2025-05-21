
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

interface CertificationProps {
  name: string;
  issuer: string;
  date: string;
  skills: string[];
}

const CertificationItem = ({ name, issuer, date, skills }: CertificationProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
              {issuer}
            </span>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
          <h3 className="text-xl font-bold mb-4">{name}</h3>
          
          <div className="space-y-3 mt-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg backdrop-blur-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CertificationsSection = () => {
  const certifications: CertificationProps[] = [
    {
      name: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      skills: [
        "Inteligência Artificial na Nuvem - Machine Learning", 
        "Processamento de Linguagem Natural",
        "Visão Computacional"
      ]
    },
    {
      name: "Inglês Avançado",
      issuer: "Instituto de Idiomas",
      date: "2024",
      skills: [
        "Inglês Intermediário - Escrita Técnica", 
        "Apresentações em Inglês",
        "Conversação para Negócios"
      ]
    },
    {
      name: "Gestão de Processos",
      issuer: "Instituto de Tecnologia",
      date: "2024",
      skills: [
        "Modelagem de Processos - Análise de Fluxo de Trabalho", 
        "Otimização de Recursos",
        "Implementação de Melhorias Contínuas"
      ]
    }
  ];

  return (
    <section id="certificacoes" className="py-16 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Certificações</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Investimento contínuo em aprendizado e desenvolvimento em áreas estratégicas como 
            Inteligência Artificial, idiomas e gestão de processos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationItem key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
