
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
      <div className="h-48 bg-muted flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-muted-foreground">Imagem do projeto</div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex gap-3">
        {githubUrl && (
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <ExternalLink className="h-4 w-4" />
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "MailForge",
      description: "Sistema integrado para leitura de arquivos PDF e envio automatizado de emails via SMTP utilizando a API Gemini. Solução para automatizar comunicações baseadas em dados extraídos de documentos.",
      tags: ["Python", "PDF Processing", "Gemini API", "SMTP"],
      githubUrl: "https://github.com/MauricioSaleMachine/Gemini-SMTP-Leitor-de-PDF",
      image: "/lovable-uploads/cb63422a-de91-4376-b463-6f0f2e9cb4c9.png"
    }
  ];

  return (
    <section id="projetos" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Projetos Destacados</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Aqui estão alguns dos meus projetos que combinam conhecimento técnico, criatividade e visão estratégica,
            sempre com o objetivo de simplificar tarefas e agregar valor ao ambiente corporativo.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
