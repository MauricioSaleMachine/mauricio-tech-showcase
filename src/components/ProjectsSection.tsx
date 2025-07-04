
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
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
      <CardFooter className="flex gap-3 mt-auto">
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
      title: "PersAi",
      description: "Plataforma inteligente de criação e personalização de links com IA. Sistema avançado que utiliza inteligência artificial para gerar links personalizados, otimizar URLs e criar experiências de navegação únicas e dinâmicas para usuários.",
      tags: ["IA", "Link Generation", "React", "Personalização", "Automation"],
      liveUrl: "https://persai-link-forge.lovable.app/",
      image: "/lovable-uploads/persai-logo.png"
    },
    {
      title: "TaskHub",
      description: "Plataforma para gerenciamento de tarefas e colaboração em equipe, facilitando a organização de projetos e aumentando a produtividade através de uma interface intuitiva e funcionalidades colaborativas.",
      tags: ["React", "Tailwind CSS", "Em desenvolvimento", "Gerenciamento"],
      liveUrl: "https://taskhub-team-connect.lovable.app/",
      image: "/lovable-uploads/86d9a45c-25a8-47bb-80f6-555f5ccd16b9.png"
    },
    {
      title: "Programar+",
      description: "Projeto independente focado na curadoria e centralização de cursos na área de programação, com uma plataforma desenvolvida para oferecer uma experiência de navegação simples, acessível e eficiente, facilitando o acesso ao conhecimento e à capacitação em tecnologia.",
      tags: ["React", "Curadoria", "Educação", "Desenvolvimento Web"],
      liveUrl: "https://programa-plus-cursos-online.lovable.app/",
      image: "/lovable-uploads/1c67769a-26ae-425e-a06b-6dc902bdfef9.png"
    },
    {
      title: "NotiSynth",
      description: "Este aplicativo em Python utiliza web scraping e inteligência artificial (via API Gemini do Google) para buscar e resumir notícias de forma personalizada. Com interface gráfica em PyQt5 e arquitetura multithread, o sistema oferece uma experiência fluida e interativa.",
      tags: ["Python", "Web Scraping", "PyQt5", "Gemini API", "Multithread"],
      githubUrl: "https://github.com/MauricioSaleMachine/NoticeAI",
      image: "/lovable-uploads/d07a382d-a2f9-4202-9bcf-7d0249b13a05.png"
    },
    {
      title: "Desenvolvimento Web",
      description: "Galeria de projetos web demonstrando habilidades em desenvolvimento frontend com React, TypeScript e design responsivo. Interface moderna e interativa com transições suaves e componentes reutilizáveis.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://web-showcase-gallery-short.lovable.app/",
      image: "/lovable-uploads/933812b0-9c22-478c-a471-f012bc7fa4a2.png"
    },
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

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start" }}>
            <CarouselContent className="py-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="h-full">
                    <Project {...project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static mx-2 transform-none" />
              <CarouselNext className="static mx-2 transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
