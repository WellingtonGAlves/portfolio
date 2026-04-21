export type Language = "en" | "pt";

export const translations = {
  en: {
    nav: {
      timeline: "Journey",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    languageToggle: "Switch to Portuguese",
    hero: {
      role: "> Full Stack Developer",
      tagline:
        "+7 years building robust web solutions — from vehicle tracking systems to intelligent WhatsApp automations.",
      available: "🚀 Available for freelance projects",
      footerStart: "💬 I'll review your project and share my opinion ",
      footerHighlight: "with no commitment",
      footerEnd: ". Let's talk!",
      whatsapp: "(41) 9 9582-9776",
    },
    timeline: {
      title: "Journey",
      subtitle: "> From construction worker to full stack developer",
      items: [
        {
          year: "2015",
          title: "Education Begins",
          subtitle: "Uni/Opet — Systems Analysis and Development",
          description:
            "Started college in Systems Analysis, diving into the world of software development.",
          icon: "education" as const,
        },
        {
          year: "2017",
          title: "First Certifications",
          subtitle: "DevMedia — Bootstrap, JavaScript",
          description:
            "Certifications in Bootstrap and JavaScript/TypeScript, consolidating front-end fundamentals.",
          icon: "education" as const,
        },
        {
          year: "2018",
          title: "Full Stack Developer",
          subtitle: "BolTech Trackers & Bolpar Distributor",
          description:
            "Started my career as a full stack dev. Built the company's main product — the vehicle tracking system — from scratch.",
          icon: "work" as const,
        },
        {
          year: "2019-2020",
          title: "Project Expansion",
          subtitle: "Integrations & E-commerce",
          description:
            "Developed the Bolpar e-commerce, WhatsApp messaging system, and integrations between systems via API, Webhook and WebSocket.",
          icon: "work" as const,
        },
        {
          year: "2021",
          title: "Angular Specialization",
          subtitle: "desenvolvedor.io — SPA and Advanced Angular",
          description:
            "Deep dive into Angular with SPA and advanced development courses.",
          icon: "education" as const,
        },
        {
          year: "2022-2024",
          title: "Smart Automations",
          subtitle: "Personal and corporate projects",
          description:
            "Built financial systems, order automation via Bling, image processing scripts and audio campaigns with TTS.",
          icon: "work" as const,
        },
        {
          year: "2025",
          title: "AI & Self-service",
          subtitle: "Integrated WhatsApp bot",
          description:
            "Developed a WhatsApp self-service bot integrated with the Bolpar website, searching products 24/7 with intelligence.",
          icon: "work" as const,
        },
        {
          year: "2026",
          title: "Mobile App — Tracking",
          subtitle: "BolTech Trackers — Ionic + Angular",
          description:
            "Layout improvements, bug fixes and new features for BolTech's vehicle tracking mobile app.",
          icon: "work" as const,
        },
      ],
    },
    skills: {
      title: "Technologies",
      subtitle: "> Full stack to deliver end to end",
      categories: [
        { name: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Ionic", "jQuery", "Bootstrap CSS", "Tailwind CSS"] },
        { name: "Backend", skills: ["PHP", "Laravel", "Java", "Node.js"] },
        { name: "Database", skills: ["PostgreSQL", "MySQL", "Data Modeling", "SQL"] },
        { name: "Integrations", skills: ["RESTful API", "JSON", "XML", "NuSOAP", "Webhook", "WebSocket"] },
        { name: "DevOps & Tools", skills: ["Git", "Linux", "Docker", "Composer", "NPM", "SSL"] },
        { name: "Digital Marketing", skills: ["Google Ads", "Facebook Ads", "Google Analytics", "Tag Manager", "SEO", "Pixel"] },
        { name: "Cloud & Infrastructure", skills: ["AWS (VPS)", "Google Cloud Run", "Google Cloud TTS", "Google Cloud (VPS)", "Hostinger (VPS)", "Google Sheets API", "AppScript"] },
      ],
    },
    contact: {
      title: "Let's Work Together?",
      lead: "I'm available for freelance projects — from a complete system to one-off automations.",
      cta: "💬 I'll review your project and share my opinion with no commitment!",
      whatsappLabel: "WhatsApp",
      whatsappValue: "(41) 9 9582-9776",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      linkedinValue: "Wellington Alves",
      githubLabel: "GitHub",
      footer: (year: number) => `© ${year} Wellington G. Alves — Curitiba, PR`,
    },
  },
  pt: {
    nav: {
      timeline: "Trajetória",
      projects: "Projetos",
      skills: "Skills",
      contact: "Contato",
    },
    languageToggle: "Mudar para inglês",
    hero: {
      role: "> Desenvolvedor Full Stack",
      tagline:
        "+7 anos criando soluções web robustas — de sistemas de rastreamento a automações inteligentes com WhatsApp.",
      available: "🚀 Disponível para projetos freelancer",
      footerStart: "💬 Analiso seu projeto e dou minha opinião ",
      footerHighlight: "sem compromisso",
      footerEnd: ". Vamos conversar!",
      whatsapp: "(41) 9 9582-9776",
    },
    timeline: {
      title: "Trajetória",
      subtitle: "> De servente de obra a desenvolvedor full stack",
      items: [
        {
          year: "2015",
          title: "Início da Formação",
          subtitle: "Uni/Opet — Análise e Desenvolvimento de Sistemas",
          description:
            "Início da graduação em ADS, mergulhando no mundo do desenvolvimento de software.",
          icon: "education" as const,
        },
        {
          year: "2017",
          title: "Primeiros Certificados",
          subtitle: "DevMedia — Bootstrap, JavaScript",
          description:
            "Certificações em Bootstrap e JavaScript/TypeScript, consolidando fundamentos front-end.",
          icon: "education" as const,
        },
        {
          year: "2018",
          title: "Desenvolvedor Full Stack",
          subtitle: "BolTech Rastreadores & Bolpar Distribuidora",
          description:
            "Início da carreira como dev full stack. Criação do sistema de rastreamento de veículos do zero — o projeto principal da empresa.",
          icon: "work" as const,
        },
        {
          year: "2019-2020",
          title: "Expansão de Projetos",
          subtitle: "Integrações & E-commerce",
          description:
            "Desenvolvimento do e-commerce Bolpar, sistema de disparo via WhatsApp e integrações entre sistemas via API, Webhook e WebSocket.",
          icon: "work" as const,
        },
        {
          year: "2021",
          title: "Especialização Angular",
          subtitle: "desenvolvedor.io — SPA e Angular Avançado",
          description:
            "Aprofundamento em Angular com cursos de SPA e desenvolvimento avançado.",
          icon: "education" as const,
        },
        {
          year: "2022-2024",
          title: "Automações Inteligentes",
          subtitle: "Projetos pessoais e corporativos",
          description:
            "Criação de sistemas financeiros, automação de pedidos via Bling, scripts de processamento de imagens e campanhas de áudio com TTS.",
          icon: "work" as const,
        },
        {
          year: "2025",
          title: "IA & Autoatendimento",
          subtitle: "Robô WhatsApp integrado",
          description:
            "Desenvolvimento de robô de autoatendimento via WhatsApp integrado ao site da Bolpar, pesquisando produtos 24/7 com inteligência.",
          icon: "work" as const,
        },
        {
          year: "2026",
          title: "App Mobile — Rastreamento",
          subtitle: "BolTech Rastreadores — Ionic + Angular",
          description:
            "Melhoria de layout, correção de bugs e implementação de novas funcionalidades no aplicativo mobile de rastreamento de veículos da BolTech.",
          icon: "work" as const,
        },
      ],
    },
    skills: {
      title: "Tecnologias",
      subtitle: "> Stack completa para entregar do início ao fim",
      categories: [
        { name: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Ionic", "jQuery", "Bootstrap CSS", "Tailwind CSS"] },
        { name: "Backend", skills: ["PHP", "Laravel", "Java", "Node.js"] },
        { name: "Banco de Dados", skills: ["PostgreSQL", "MySQL", "Modelagem de Dados", "SQL"] },
        { name: "Integrações", skills: ["API RESTful", "JSON", "XML", "NuSOAP", "Webhook", "WebSocket"] },
        { name: "DevOps & Ferramentas", skills: ["Git", "Linux", "Docker", "Composer", "NPM", "SSL"] },
        { name: "Marketing Digital", skills: ["Google Ads", "Facebook Ads", "Google Analytics", "Tag Manager", "SEO", "Pixel"] },
        { name: "Cloud & Infraestrutura", skills: ["AWS (VPS)", "Google Cloud Run", "Google Cloud TTS", "Google Cloud (VPS)", "Hostinger (VPS)", "Google Sheets API", "AppScript"] },
      ],
    },
    contact: {
      title: "Vamos Trabalhar Juntos?",
      lead: "Estou disponível para projetos freelancer — desde um sistema completo até automações pontuais.",
      cta: "💬 Analiso seu projeto e dou minha opinião sem compromisso!",
      whatsappLabel: "WhatsApp",
      whatsappValue: "(41) 9 9582-9776",
      emailLabel: "E-mail",
      linkedinLabel: "LinkedIn",
      linkedinValue: "Wellington Alves",
      githubLabel: "GitHub",
      footer: (year: number) => `© ${year} Wellington G. Alves — Curitiba, PR`,
    },
  },
};

export type TranslationDict = typeof translations.en;
