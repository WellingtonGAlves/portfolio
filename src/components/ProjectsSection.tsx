import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  type: "profissional" | "pessoal" | "automação";
}

const projects: Project[] = [
  {
    title: "Sistema de Rastreamento de Veículos",
    description: "Desenvolvido do zero com painel de monitoramento, integração com dispositivos GPS e notificações em tempo real.",
    technologies: ["Java", "PHP", "PostgreSQL", "Bootstrap 3", "jQuery"],
    url: "https://boltech.com.br",
    type: "profissional",
  },
  {
    title: "E-commerce Bolpar Distribuidora",
    description: "Plataforma completa com catálogo de produtos, carrinho de cotações e autenticação. Integração com ERP via WebService.",
    technologies: ["PHP", "PostgreSQL", "NuSoap", "WebService"],
    url: "https://bolpar.com.br",
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
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${typeColors[project.type]}`}>
                      {project.type}
                    </span>
                  </div>
                  <h3 className="font-mono font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors ml-2 mt-1">
                    <Globe className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
