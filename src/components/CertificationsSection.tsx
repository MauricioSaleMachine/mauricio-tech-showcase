
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
    <Card className="border-none shadow-lg mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <div className="flex items-center text-blue-600 font-medium">
              <Award className="mr-2 h-5 w-5" />
              {issuer}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{date}</div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className="mt-3">
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
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
    <section id="certificacoes" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Certificações</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Investimento contínuo em aprendizado e desenvolvimento de competências em áreas estratégicas como 
            Inteligência Artificial, idiomas e gestão de processos.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:w-3/4">
            <div className="flex items-center mb-10">
              <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold">Cursos & Certificações</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <CertificationItem key={index} {...cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
