import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 px-4" id="contato">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-mono font-bold mb-4 text-gradient"
        >
          Vamos Trabalhar Juntos?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed"
        >
          Estou disponível para projetos freelancer — desde um sistema completo até automações pontuais.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary font-mono text-sm mb-12 glass inline-block px-6 py-3 rounded-full"
        >
          💬 Analiso seu projeto e dou minha opinião sem compromisso!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          <a
            href="https://wa.me/5541995829776"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-5 hover:border-primary/50 transition-all group flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="font-mono text-sm font-semibold text-foreground">WhatsApp</p>
              <p className="text-xs text-muted-foreground">(41) 9 9582-9776</p>
            </div>
            <ArrowRight className="w-4 h-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="mailto:wellington_999@live.com"
            className="glass rounded-xl p-5 hover:border-primary/50 transition-all group flex items-center gap-3"
          >
            <Mail className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="font-mono text-sm font-semibold text-foreground">E-mail</p>
              <p className="text-xs text-muted-foreground">wellington_999@live.com</p>
            </div>
            <ArrowRight className="w-4 h-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://www.linkedin.com/in/wellington-alves-9a337b15a"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-5 hover:border-primary/50 transition-all group flex items-center gap-3"
          >
            <Linkedin className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="font-mono text-sm font-semibold text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">Wellington Alves</p>
            </div>
            <ArrowRight className="w-4 h-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://github.com/WellingtonGAlves"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-5 hover:border-primary/50 transition-all group flex items-center gap-3"
          >
            <Github className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="font-mono text-sm font-semibold text-foreground">GitHub</p>
              <p className="text-xs text-muted-foreground">WellingtonGAlves</p>
            </div>
            <ArrowRight className="w-4 h-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-muted-foreground text-xs font-mono"
        >
          © {new Date().getFullYear()} Wellington G. Alves — Curitiba, PR
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
