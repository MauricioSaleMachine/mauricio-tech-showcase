
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Code, LineChart, BadgeCheck } from "lucide-react";

interface SkillItemProps {
  name: string;
  value: number;
  icon?: React.ReactNode;
}

const SkillItem = ({ name, value, icon }: SkillItemProps) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon && <span className="text-blue-600">{icon}</span>}
          <span className="font-medium text-foreground">{name}</span>
        </div>
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
  // Import the necessary language icons
  const PythonIcon = () => (
    <svg width="16" height="16" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
      <defs>
        <linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a">
          <stop stopColor="#387EB8" offset="0%" />
          <stop stopColor="#366994" offset="100%" />
        </linearGradient>
        <linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b">
          <stop stopColor="#FFE052" offset="0%" />
          <stop stopColor="#FFC331" offset="100%" />
        </linearGradient>
      </defs>
      <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#a)" />
      <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#b)" />
    </svg>
  );
  
  const JavaScriptIcon = () => (
    <svg width="16" height="16" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
      <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
    </svg>
  );
  
  const CppIcon = () => (
    <svg width="16" height="16" viewBox="0 0 256 288" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
      <path d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#5C8DBC" />
      <path d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074" fill="#1A4674" />
      <path d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352" fill="#1A4674" />
      <path d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#1B598E" />
      <path d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721" fill="#FFF" />
      <path d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371" fill="#FFF" />
    </svg>
  );
  
  const HtmlIcon = () => (
    <svg width="16" height="16" viewBox="0 0 256 361" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
      <path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26" />
      <path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529" />
      <path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB" />
      <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" />
      <path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.78-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF" />
    </svg>
  );

  const programmingSkills: SkillItemProps[] = [
    { name: "Python", value: 90, icon: <PythonIcon /> },
    { name: "JavaScript", value: 85, icon: <JavaScriptIcon /> },
    { name: "C++", value: 75, icon: <CppIcon /> },
    { name: "HTML/CSS", value: 80, icon: <HtmlIcon /> }
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
