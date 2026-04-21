import { motion } from "framer-motion";
import { Mail, Link, Code, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            {t.hero.role}
          </p>
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-gradient glow-text">
            Wellington G. Alves
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            {t.hero.tagline}
          </p>
          <div className="glass inline-block rounded-full px-6 py-3 mb-10">
            <p className="text-primary font-mono text-sm font-semibold">
              {t.hero.available}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="mailto:wellington_999@live.com" className="glass rounded-lg px-5 py-3 flex items-center gap-2 hover:border-primary/50 transition-colors group">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors">wellington_999@live.com</span>
          </a>
          <a href="https://wa.me/5541995829776" target="_blank" rel="noopener noreferrer" className="glass rounded-lg px-5 py-3 flex items-center gap-2 hover:border-primary/50 transition-colors group">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors">{t.hero.whatsapp}</span>
          </a>
          <a href="https://www.linkedin.com/in/wellington-alves-9a337b15a" target="_blank" rel="noopener noreferrer" className="glass rounded-lg px-5 py-3 flex items-center gap-2 hover:border-primary/50 transition-colors group">
            <Link className="w-4 h-4 text-primary" />
            <span className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
          </a>
          <a href="https://github.com/WellingtonGAlves" target="_blank" rel="noopener noreferrer" className="glass rounded-lg px-5 py-3 flex items-center gap-2 hover:border-primary/50 transition-colors group">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors">GitHub</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16"
        >
          <p className="text-muted-foreground text-sm font-mono">
            {t.hero.footerStart}
            <span className="text-primary">{t.hero.footerHighlight}</span>
            {t.hero.footerEnd}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
