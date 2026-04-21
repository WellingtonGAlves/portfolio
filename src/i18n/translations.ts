export type Language = "en" | "pt";

export type ProjectType = "professional" | "personal" | "automation";

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  url2?: string;
  url2Label?: string;
  type: ProjectType;
}

const sharedProjects = (lang: Language): ProjectItem[] => {
  if (lang === "en") {
    return [
      {
        title: "Vehicle Tracking System",
        description:
          "Built from scratch with a monitoring dashboard, GPS device integration and real-time notifications.",
        technologies: ["Java", "PHP", "PostgreSQL", "Bootstrap 3", "jQuery"],
        url: "https://rastreio.boltech.com.br/",
        type: "professional",
      },
      {
        title: "Mobile App — BolTech Trackers",
        description:
          "Layout improvements, bug fixes and new features for the vehicle tracking mobile app.",
        technologies: ["Ionic", "Angular", "TypeScript"],
        url: "https://play.google.com/store/apps/details?id=io.ionic.boltechrastreadores",
        url2: "https://apps.apple.com/br/app/boltech-rastreadores-v2/id6504941062?platform=iphone",
        url2Label: "App Store",
        type: "professional",
      },
      {
        title: "BolTech Institutional Website",
        description:
          "Institutional website for BolTech Trackers, presenting vehicle tracking and monitoring services.",
        technologies: ["WordPress", "Elementor"],
        url: "https://boltech.com.br",
        type: "professional",
      },
      {
        title: "Bolpar Distributor E-commerce",
        description:
          "Complete platform with product catalog, quote cart and authentication. ERP integration via WebService.",
        technologies: ["PHP", "PostgreSQL", "NuSoap", "WebService"],
        url: "https://www.bolpar.com.br/",
        type: "professional",
      },
      {
        title: "WhatsApp Bulk Messaging System",
        description:
          "Mass message automation with dynamic fields and support for multiple campaigns.",
        technologies: ["PHP", "PostgreSQL", "Laravel", "Queues", "WhatsApp API"],
        type: "professional",
      },
      {
        title: "WhatsApp Self-service Bot",
        description:
          "Bot integrated with the Bolpar website that searches products 24/7, speeding up the sales team.",
        technologies: ["Node.js", "WhatsApp API", "Web Integration"],
        type: "professional",
      },
      {
        title: "WhatsApp Audio Campaigns with TTS",
        description:
          "Non-aggressive marketing system with personalized audio, purchase history, smart broadcasts and professional voice profiles.",
        technologies: ["PHP", "Laravel", "PostgreSQL", "Tailwind CSS", "Google Cloud TTS"],
        type: "personal",
      },
      {
        title: "Financial Control System",
        description:
          "Complete business financial management — income, expenses, cash flow and reports for decision making.",
        technologies: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "jQuery"],
        type: "personal",
      },
      {
        title: "WhatsApp + Bling Order Automation",
        description:
          "Automatic order creation in Bling through conversational flows on WhatsApp.",
        technologies: ["Node.js", "Google Cloud Run", "ReplyAgent", "Bling API"],
        type: "automation",
      },
      {
        title: "Sales Participation Tracking",
        description:
          "Automatic tracking and attribution of participation credits on sold orders from Bling.",
        technologies: ["Node.js", "Google Cloud Run", "AppScript", "Bling API", "Google Sheets"],
        type: "automation",
      },
    ];
  }
  return [
    {
      title: "Sistema de Rastreamento de Veículos",
      description:
        "Desenvolvido do zero com painel de monitoramento, integração com dispositivos GPS e notificações em tempo real.",
      technologies: ["Java", "PHP", "PostgreSQL", "Bootstrap 3", "jQuery"],
      url: "https://rastreio.boltech.com.br/",
      type: "professional",
    },
    {
      title: "App Mobile — BolTech Rastreadores",
      description:
        "Melhoria de layout, correção de bugs e implementação de novas funcionalidades no aplicativo mobile de rastreamento de veículos.",
      technologies: ["Ionic", "Angular", "TypeScript"],
      url: "https://play.google.com/store/apps/details?id=io.ionic.boltechrastreadores",
      url2: "https://apps.apple.com/br/app/boltech-rastreadores-v2/id6504941062?platform=iphone",
      url2Label: "App Store",
      type: "professional",
    },
    {
      title: "Site Institucional BolTech",
      description:
        "Site institucional da BolTech Rastreadores, apresentando serviços de rastreamento e monitoramento veicular.",
      technologies: ["WordPress", "Elementor"],
      url: "https://boltech.com.br",
      type: "professional",
    },
    {
      title: "E-commerce Bolpar Distribuidora",
      description:
        "Plataforma completa com catálogo de produtos, carrinho de cotações e autenticação. Integração com ERP via WebService.",
      technologies: ["PHP", "PostgreSQL", "NuSoap", "WebService"],
      url: "https://www.bolpar.com.br/",
      type: "professional",
    },
    {
      title: "Sistema de Disparo via WhatsApp",
      description:
        "Automatização de envios em massa com campos dinâmicos e suporte a múltiplas campanhas.",
      technologies: ["PHP", "PostgreSQL", "Laravel", "Queues", "API WhatsApp"],
      type: "professional",
    },
    {
      title: "Robô de Autoatendimento WhatsApp",
      description:
        "Robô integrado ao site da Bolpar que pesquisa produtos 24/7, agilizando o atendimento para o time de vendas.",
      technologies: ["Node.js", "WhatsApp API", "Integração Web"],
      type: "professional",
    },
    {
      title: "Campanhas de Áudio via WhatsApp com TTS",
      description:
        "Sistema de marketing não agressivo com áudio personalizado, histórico de compras, disparos inteligentes e perfis de voz profissionais.",
      technologies: ["PHP", "Laravel", "PostgreSQL", "Tailwind CSS", "Google Cloud TTS"],
      type: "personal",
    },
    {
      title: "Sistema de Controle Financeiro",
      description:
        "Gestão financeira empresarial completa — receitas, despesas, fluxo de caixa e relatórios para tomada de decisão.",
      technologies: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "jQuery"],
      type: "personal",
    },
    {
      title: "Automação de Pedidos via WhatsApp + Bling",
      description:
        "Criação automática de pedidos no Bling através de fluxos conversacionais no WhatsApp.",
      technologies: ["Node.js", "Google Cloud Run", "ReplyAgent", "Bling API"],
      type: "automation",
    },
    {
      title: "Identificação de Participação em Vendas",
      description:
        "Rastreamento e atribuição automática de créditos de participação em pedidos vendidos do Bling.",
      technologies: ["Node.js", "Google Cloud Run", "AppScript", "Bling API", "Google Sheets"],
      type: "automation",
    },
  ];
};

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
        "+8 years building robust web solutions — from vehicle tracking systems to intelligent WhatsApp automations.",
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
    projects: {
      title: "Projects",
      subtitle: "> Solutions that drive real impact",
      typeLabels: {
        professional: "professional",
        personal: "personal",
        automation: "automation",
      },
      visitSite: "Visit site",
      items: sharedProjects("en"),
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
        "+8 anos criando soluções web robustas — de sistemas de rastreamento a automações inteligentes com WhatsApp.",
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
    projects: {
      title: "Projetos",
      subtitle: "> Soluções que geram impacto real",
      typeLabels: {
        professional: "profissional",
        personal: "pessoal",
        automation: "automação",
      },
      visitSite: "Visitar site",
      items: sharedProjects("pt"),
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
