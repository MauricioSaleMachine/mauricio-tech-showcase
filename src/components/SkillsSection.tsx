
import { Progress } from "@/components/ui/progress";

interface SkillProps {
  name: string;
  percentage: number;
  color?: string;
}

const Skill = ({ name, percentage, color = "bg-blue-600" }: SkillProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-gray-500">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" indicatorClassName={color} />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Minhas Habilidades</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Com domínio em diversas linguagens de programação, construo soluções eficientes e inovadoras que contribuem
            diretamente para a melhoria da produtividade e organização de empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-6 border-b pb-2">Linguagens de Programação</h3>
            <Skill name="Python" percentage={90} />
            <Skill name="JavaScript" percentage={85} />
            <Skill name="C++" percentage={75} />
            <Skill name="HTML/CSS" percentage={88} />
          </div>

          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-6 border-b pb-2">Tecnologias & Ferramentas</h3>
            <Skill name="React" percentage={80} color="bg-blue-500" />
            <Skill name="Git" percentage={85} color="bg-blue-500" />
            <Skill name="SQL" percentage={75} color="bg-blue-500" />
            <Skill name="Automação" percentage={90} color="bg-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
