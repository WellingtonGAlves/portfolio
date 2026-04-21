import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const TimelineSection = () => {
  const { t } = useLanguage();
  const timeline = t.timeline.items;
  return (
    <section className="py-24 px-4" id="timeline">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-mono font-bold text-center mb-4 text-gradient"
        >
          {t.timeline.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-16 font-mono text-sm"
        >
          {t.timeline.subtitle}
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div className="timeline-dot" />
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              }`}>
                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {item.icon === "work" ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                    <span className="font-mono text-primary text-sm font-semibold">{item.year}</span>
                  </div>
                  <h3 className="font-mono font-bold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-primary/70 text-sm font-medium mb-2">{item.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
