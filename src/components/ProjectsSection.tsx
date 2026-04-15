import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const PlayStoreIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/>
  </svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);


interface Project {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  url2?: string;
  url2Label?: string;
  type: "profissional" | "pessoal" | "automação";
}

const projects: Project[] = [
  {
    title: "Sistema de Rastreamento de Veículos",
    description: "Desenvolvido do zero com painel de monitoramento, integração com dispositivos GPS e notificações em tempo real.",
    technologies: ["Java", "PHP", "PostgreSQL", "Bootstrap 3", "jQuery"],
    url: "https://rastreio.boltech.com.br/",
    type: "profissional",
  },
  {
    title: "App Mobile — BolTech Rastreadores",
    description: "Melhoria de layout, correção de bugs e implementação de novas funcionalidades no aplicativo mobile de rastreamento de veículos.",
    technologies: ["Ionic", "Angular", "TypeScript"],
    url: "https://play.google.com/store/apps/details?id=io.ionic.boltechrastreadores",
    url2: "https://apps.apple.com/br/app/boltech-rastreadores-v2/id6504941062?platform=iphone",
    url2Label: "App Store",
    type: "profissional",
  },
  {
    title: "Site Institucional BolTech",
    description: "Site institucional da BolTech Rastreadores, apresentando serviços de rastreamento e monitoramento veicular.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://boltech.com.br",
    type: "profissional",
  },
  {
    title: "E-commerce Bolpar Distribuidora",
    description: "Plataforma completa com catálogo de produtos, carrinho de cotações e autenticação. Integração com ERP via WebService.",
    technologies: ["PHP", "PostgreSQL", "NuSoap", "WebService"],
    url: "https://www.bolpar.com.br/",
    type: "profissional",
  },
  {
    title: "Sistema de Disparo via WhatsApp",
    description: "Automatização de envios em massa com campos dinâmicos e suporte a múltiplas campanhas.",
    technologies: ["PHP", "PostgreSQL", "Laravel", "Queues", "API WhatsApp"],
    type: "profissional",
  },
  {
    title: "Robô de Autoatendimento WhatsApp",
    description: "Robô integrado ao site da Bolpar que pesquisa produtos 24/7, agilizando o atendimento para o time de vendas.",
    technologies: ["Node.js", "WhatsApp API", "Integração Web"],
    type: "profissional",
  },
  {
    title: "Campanhas de Áudio via WhatsApp com TTS",
    description: "Sistema de marketing não agressivo com áudio personalizado, histórico de compras, disparos inteligentes e perfis de voz profissionais.",
    technologies: ["PHP", "Laravel", "PostgreSQL", "Tailwind CSS", "Google Cloud TTS"],
    type: "pessoal",
  },
  {
    title: "Sistema de Controle Financeiro",
    description: "Gestão financeira empresarial completa — receitas, despesas, fluxo de caixa e relatórios para tomada de decisão.",
    technologies: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "jQuery"],
    type: "pessoal",
  },
  {
    title: "Automação de Pedidos via WhatsApp + Bling",
    description: "Criação automática de pedidos no Bling através de fluxos conversacionais no WhatsApp.",
    technologies: ["Node.js", "Google Cloud Run", "ReplyAgent", "Bling API"],
    type: "automação",
  },
  {
    title: "Identificação de Participação em Vendas",
    description: "Rastreamento e atribuição automática de créditos de participação em pedidos vendidos do Bling.",
    technologies: ["Node.js", "Google Cloud Run", "AppScript", "Bling API", "Google Sheets"],
    type: "automação",
  },
];

const typeColors: Record<string, string> = {
  profissional: "text-primary border-primary/30",
  pessoal: "text-blue-400 border-blue-400/30",
  automação: "text-amber-400 border-amber-400/30",
};

const ProjectsSection = () => {
  return (
    <section className="py-24 px-4" id="projetos">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-mono font-bold text-center mb-4 text-gradient"
        >
          Projetos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-16 font-mono text-sm"
        >
          &gt; Soluções que geram impacto real
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${typeColors[project.type]}`}>
                  {project.type}
                </span>
              </div>
              <h3 className="font-mono font-bold text-foreground text-lg group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                    {tech}
                  </span>
                ))}
              </div>
              {(project.url || project.url2) && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all">
                      {project.url.includes("play.google.com") ? (
                        <><PlayStoreIcon className="w-4 h-4" /> Google Play</>
                      ) : (
                        <><Globe className="w-3.5 h-3.5" /> Visitar site</>
                      )}
                    </a>
                  )}
                  {project.url2 && (
                    <a href={project.url2} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all">
                      <AppleIcon className="w-4 h-4" /> App Store
                    </a>
                  )}
                </div>
              )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
