
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Project = ({ title, description, tags, image, githubUrl, liveUrl }: ProjectProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400">Imagem do projeto</div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex gap-3">
        {githubUrl && (
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            Código
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <ExternalLink className="h-4 w-4" />
            Ver Projeto
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "Sistema de Automação Empresarial",
      description: "Solução que automatiza processos repetitivos em empresas, aumentando a eficiência operacional.",
      tags: ["Python", "Automação", "SQL"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Dashboard Interativo",
      description: "Interface web para visualização e análise de dados empresariais em tempo real.",
      tags: ["React", "JavaScript", "Data Visualization"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Aplicação Web com API",
      description: "Sistema web integrado com APIs para gerenciamento de informações comerciais.",
      tags: ["HTML/CSS", "JavaScript", "API"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projetos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Projetos Destacados</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Aqui estão alguns dos meus projetos que combinam conhecimento técnico, criatividade e visão estratégica,
            sempre com o objetivo de simplificar tarefas e agregar valor ao ambiente corporativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Ver mais projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
