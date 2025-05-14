
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if form fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro no envio",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, you would send the form data to a backend service
    // Here we're just simulating the form submission
    try {
      // Simulate sending email (in a real app, you'd call an API endpoint)
      console.log('Form submitted to:', 'mauricio@salemachine.com.br');
      console.log('Form data:', formData);
      
      // Simulate successful submission
      setTimeout(() => {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Retornarei em breve!"
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Erro no envio",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Tem alguma pergunta ou está interessado em trabalhar junto? Envie uma mensagem e entrarei em contato o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Envie uma mensagem</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Sua mensagem"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:mauricio@salemachine.com.br" className="text-blue-600 hover:underline">mauricio@salemachine.com.br</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Telefone</h4>
                      <p className="text-muted-foreground">(11) 97783-8521</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/MauricioSaleMachine" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mauricio-cerqueira-482962311/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3BMQK%2F%2BXkpQ8aoOD687H%2Fr9Q%3D%3D" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
