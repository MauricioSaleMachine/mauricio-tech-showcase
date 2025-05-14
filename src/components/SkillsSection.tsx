
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Code, LineChart, BadgeCheck } from "lucide-react";

interface SkillItemProps {
  name: string;
  value: number;
}

const SkillItem = ({ name, value }: SkillItemProps) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm font-medium text-blue-600">{value}%</span>
      </div>
      <Progress value={value} className="h-2 bg-gray-200 dark:bg-gray-700" />
    </div>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: SkillItemProps[];
}

const SkillCard = ({ icon, title, skills }: SkillCardProps) => {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div>
          {skills.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const programmingSkills: SkillItemProps[] = [
    { name: "Python", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "C++", value: 75 },
    { name: "HTML/CSS", value: 80 }
  ];

  const dataSkills: SkillItemProps[] = [
    { name: "SQL", value: 85 },
    { name: "Data Analysis", value: 75 },
    { name: "Excel", value: 90 },
    { name: "Power BI", value: 70 }
  ];

  const businessSkills: SkillItemProps[] = [
    { name: "Automação de Processos", value: 85 },
    { name: "Gestão de Projetos", value: 80 },
    { name: "Metodologias Ágeis", value: 75 },
    { name: "Comunicação Técnica", value: 85 }
  ];

  return (
    <section id="habilidades" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Minhas Habilidades</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Desenvolvi competências técnicas e analíticas que me permitem criar soluções eficientes
            tanto para o desenvolvimento de software quanto para a automação de processos empresariais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard 
            icon={<Code className="h-6 w-6 text-blue-600" />}
            title="Programação"
            skills={programmingSkills}
          />

          <SkillCard 
            icon={<LineChart className="h-6 w-6 text-blue-600" />}
            title="Dados & Análise"
            skills={dataSkills}
          />

          <SkillCard 
            icon={<BadgeCheck className="h-6 w-6 text-blue-600" />}
            title="Negócios"
            skills={businessSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
