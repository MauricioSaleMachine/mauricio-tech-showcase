
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const EducationItem = ({ degree, institution, period, description }: EducationItemProps) => {
  return (
    <Card className="border-none shadow-lg mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <div className="flex items-center text-blue-600 font-medium">
              <Calendar className="mr-2 h-5 w-5" />
              {period}
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold">{degree}</h3>
            <p className="text-muted-foreground mb-2">{institution}</p>
            <p className="text-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EducationSection = () => {
  const educationItems: EducationItemProps[] = [
    {
      degree: "Tecnologia em Gestão da Tecnologia da Informação",
      institution: "FATEC Barueri",
      period: "2024 - Presente",
      description: "Estudos focados em gerenciamento de projetos de TI, desenvolvimento de sistemas e automação de processos empresariais."
    },
    {
      degree: "Cursos na area de programação",
      institution: "Instituição Técnica",
      period: "2020 - Presente",
      description: "Formação técnica em programação com foco em desenvolvimento web e linguagens como Python, JavaScript e SQL."
    }
  ];

  return (
    <section id="formacao" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Formação Acadêmica</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Minha trajetória acadêmica me preparou com fortes bases técnicas e teóricas para atuar 
            no desenvolvimento de soluções tecnológicas inovadoras.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:w-3/4">
            <div className="flex items-center mb-10">
              <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                <GraduationCap className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold">Educação & Certificações</h3>
            </div>

            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <EducationItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
