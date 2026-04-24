import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";

const SummarySection = () => {
  const { t } = useLanguage();
  const { title, subtitle, paragraphs, highlights } = t.summary;

  return (
    <section className="py-24 px-4" id="summary">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-mono font-bold text-center mb-4 text-gradient"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-12 font-mono text-sm"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 md:p-10 mb-8"
        >
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed text-base md:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
            >
              <p className="font-mono text-2xl md:text-3xl font-bold text-gradient mb-1">
                {h.value}
              </p>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {h.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
