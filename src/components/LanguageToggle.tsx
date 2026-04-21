import { useLanguage } from "@/i18n/LanguageProvider";

const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const showingEnglish = language === "en";
  // Click action switches to the OTHER language; show flag of target language.
  const targetFlag = showingEnglish ? "🇧🇷" : "🇺🇸";
  const targetLabel = showingEnglish ? "PT-BR" : "EN";

  return (
    <button
      onClick={toggleLanguage}
      aria-label={t.languageToggle}
      title={t.languageToggle}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-secondary/50 hover:border-primary/50 hover:bg-primary/10 transition-colors font-mono text-xs text-muted-foreground hover:text-primary"
    >
      <span className="text-base leading-none" aria-hidden="true">{targetFlag}</span>
      <span>{targetLabel}</span>
    </button>
  );
};

export default LanguageToggle;
