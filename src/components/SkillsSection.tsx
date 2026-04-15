import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  { name: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Ionic", "jQuery", "Bootstrap CSS", "Tailwind CSS"] },
  { name: "Backend", skills: ["PHP", "Laravel", "Java", "Node.js"] },
  { name: "Banco de Dados", skills: ["PostgreSQL", "MySQL", "Modelagem de Dados", "SQL"] },
  { name: "Integrações", skills: ["API RESTful", "JSON", "XML", "NuSOAP", "Webhook", "WebSocket"] },
  { name: "DevOps & Ferramentas", skills: ["Git", "Linux", "Docker", "Composer", "NPM", "SSL"] },
  { name: "Marketing Digital", skills: ["Google Ads", "Facebook Ads", "Google Analytics", "Tag Manager", "SEO", "Pixel"] },
  { name: "Cloud & Infraestrutura", skills: ["AWS (VPS)", "Google Cloud Run", "Google Cloud TTS", "Google Cloud (VPS)", "Hostinger (VPS)", "Google Sheets API", "AppScript"] },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-4" id="skills">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-mono font-bold text-center mb-4 text-gradient"
        >
          Tecnologias
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-16 font-mono text-sm"
        >
          &gt; Stack completa para entregar do início ao fim
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.08 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-mono text-primary font-semibold text-sm mb-4 tracking-wider uppercase">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary text-foreground border border-border hover:border-primary/40 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
