/**
 * Tanjil Khan - Portfolio JavaScript
 * Zero-latency filtering, dynamic i18n, theme persistence & active navigation
 */

const projectsData = [
    {
        id: "hrbetting",
        name: "HRBetting – Football Analytics Platform",
        period: { pt: "maio de 2026 - agosto de 2026", en: "May 2026 – Aug 2026" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-hrbetting.png",
        desc: {
            pt: "Plataforma de análise de futebol com modelos estatísticos de Poisson e Skellam em C#/WPF, expondo resultados através de uma API Next.js na Vercel para website público e bot de Telegram automatizado. Integração com Stripe para subscrições, Supabase e Resend.",
            en: "Football analytics platform built with C#/.NET, Next.js, and Vercel. Statistical engine running Poisson & Skellam models exposed via Next.js API, with Stripe billing, Supabase, and Telegram Bot."
        },
        skills: ["C# / .NET", "Next.js", "Vercel", "Stripe", "Supabase", "Telegram Bot"],
        github: "https://github.com/tskxz/hrbetting-api",
        website: "https://hrbetting.org/",
        gridSpan: "span-6",
        featured: true,
        categories: ["systems", "fullstack", "data"]
    },
    {
        id: "chefllama",
        name: "Chefllama - Personal Chef AI Agent",
        period: { pt: "agosto de 2026", en: "Aug 2026" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-chefllama.png",
        desc: {
            pt: "Agente de IA desenvolvido em Python, LangChain e llama3.2 que combina visão computacional multimodal e pesquisa web em tempo real (Tavily API e Ollama/LLaVA) para apoiar utilizadores na criação personalizada de receitas e planeamento de refeições.",
            en: "AI agent built with Python, LangChain, and llama3.2 that combines computer vision and real-time web search via Tavily API and Ollama/LLaVA to assist users with personalized recipe creation."
        },
        skills: ["Python", "LangChain", "llama3.2", "LLaVA", "Ollama", "Tavily API"],
        github: "https://github.com/tskxz/chefllama",
        gridSpan: "span-6",
        featured: true,
        categories: ["ai"]
    },
    {
        id: "sonix",
        name: "SoniX – Lightweight Terminal Audio Player",
        period: { pt: "fevereiro de 2026", en: "Feb 2026" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-sonix.png",
        desc: {
            pt: "Leitor de áudio em linha de comandos (CLI) desenvolvido em Rust, utilizando a biblioteca crossterm para controlo por teclado e playback_rs para descodificação e reprodução de som com reposição de terminal limpa.",
            en: "Terminal audio player written in Rust, using crossterm for keyboard-driven interaction and playback_rs for audio decoding and playback with clean terminal state restoration."
        },
        skills: ["Rust", "Crossterm", "CLI", "Audio Processing"],
        github: "https://github.com/tskxz/sonix",
        gridSpan: "span-6",
        featured: true,
        categories: ["systems"]
    },
    {
        id: "bvrgym",
        name: "BVRGym - Personal Android App Lifting Recorder",
        period: { pt: "julho de 2026 - agosto de 2026", en: "Jul 2026 – Aug 2026" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-bvrgym.png",
        desc: {
            pt: "Aplicação Android pessoal desenvolvida em Kotlin no Android Studio para gravar treinos no ginásio de forma focada e leve, sem anúncios nem distrações comuns de outras apps de gravação de vídeo.",
            en: "Personal Android app built with Kotlin in Android Studio to record gym training sessions without the ads and distractions common in other video-recording apps."
        },
        skills: ["Kotlin", "Android Studio", "Mobile Dev"],
        github: "https://github.com/tskxz/bvr-gym",
        gridSpan: "span-6",
        featured: true,
        categories: ["mobile", "systems"]
    },
    {
        id: "andantesys",
        name: "AndanteSys - Porto Metro Ecosystem Simulator",
        period: { pt: "maio de 2026 - junho de 2026", en: "May 2026 – Jun 2026" },
        association: { pt: "ISTEC Porto", en: "ISTEC Porto" },
        logo: "assets/images/logos/project-andantesys.png",
        desc: {
            pt: "Simulador do ecossistema de bilhética do Metro do Porto desenvolvido em C# e WPF. Separa a gestão Backoffice de cartões do validador Frontoffice, cobrindo regras dos passes Gold e Blue com padrões de desenho orientados a objetos e UML.",
            en: "C# and WPF application simulating the Metro do Porto ticketing ecosystem. Separates Backoffice card management from a Frontoffice validator, implementing OOP and UML design patterns."
        },
        skills: ["C#", "WPF", "OOP", "UML", "Desktop Dev"],
        github: "https://github.com/tskxz/andante-sys",
        gridSpan: "span-6",
        featured: true,
        categories: ["systems"]
    },
    {
        id: "metalify",
        name: "Metalify - Metal Band Curator & Collection",
        period: { pt: "abril de 2025 - maio de 2025", en: "Apr 2025 – May 2025" },
        association: { pt: "Cogniwave", en: "Cogniwave" },
        logo: "assets/images/logos/project-metalify.png",
        desc: {
            pt: "Aplicação full-stack em Nuxt.js e Vuetify para gestão e curadoria de bandas de metal por género. Autenticação JWT, persistência com SQLite e Cloudflare D1, monitorização com Sentry e deploy no NuxtHub.",
            en: "Full-stack application built with Nuxt.js and Vuetify for metal band management by genre. Features JWT auth, SQLite, Cloudflare D1, Sentry error monitoring, and NuxtHub edge deployment."
        },
        skills: ["Nuxt.js", "Vuetify", "SQLite", "Cloudflare D1", "NuxtHub"],
        github: "https://github.com/tskxz/metalify",
        gridSpan: "span-6",
        featured: true,
        categories: ["fullstack"]
    },
    {
        id: "electrocycle",
        name: "ElectroCycle - MERN E-Commerce Platform",
        period: { pt: "outubro de 2024 - março de 2025", en: "Oct 2024 – Mar 2025" },
        association: { pt: "ISTEC Porto (Projeto Final)", en: "ISTEC Porto (Final Project)" },
        logo: "assets/images/logos/project-electrocycle.png",
        desc: {
            pt: "Plataforma de e-commerce e agendamento para reparação e revenda de eletrodomésticos, apoiando modelos de economia circular. Desenvolvida com MongoDB, Express.js, React, Node.js e pagamentos PayPal.",
            en: "E-commerce and service scheduling platform for appliance repair and resale supporting circular economy. Built on MongoDB, Express.js, React, Node.js, and PayPal payments."
        },
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "PayPal API"],
        github: "https://github.com/tskxz/ElectroCycle",
        gridSpan: "span-6",
        featured: true,
        categories: ["fullstack"]
    },
    {
        id: "browsemuscle",
        name: "BrowseMuscle - Fitness Management Platform",
        period: { pt: "agosto de 2022 - abril de 2023", en: "Aug 2022 – Apr 2023" },
        association: { pt: "Escola Secundária Filipa de Vilhena", en: "Filipa de Vilhena" },
        logo: "assets/images/logos/project-browsemuscle.png",
        desc: {
            pt: "Plataforma fitness full-stack desenvolvida em Node.js, Sequelize e MySQL em arquitetura MVC com planos de treino personalizados e alojamento em VPS Debian Linux.",
            en: "Full-stack fitness platform built with Node.js, Sequelize, and MySQL in MVC architecture, deployed and self-hosted on a Debian Linux VPS."
        },
        skills: ["Node.js", "Sequelize", "MySQL", "MVC", "Debian Linux"],
        github: "https://github.com/tskxz/browsemuscle",
        gridSpan: "span-6",
        featured: true,
        categories: ["fullstack"]
    },
    {
        id: "matrix",
        name: "Matrix - Linear Algebra & Encryption Engine",
        period: { pt: "novembro de 2025 - dezembro de 2025", en: "Nov 2025 – Dec 2025" },
        association: { pt: "ISTEC Porto", en: "ISTEC Porto" },
        logo: "assets/images/logos/project-matrix.png",
        desc: {
            pt: "Aplicação Flask para operações de álgebra linear e algoritmos de encriptação matricial através de interface web. Inclui cobertura de testes com Pytest e pipeline de CI contínuo com GitHub Actions.",
            en: "Flask web application for matrix operations and linear-algebra-based encryption algorithms, with automated Pytest coverage and GitHub Actions CI pipeline."
        },
        skills: ["Python", "Flask", "Linear Algebra", "Pytest", "CI/CD"],
        github: "https://github.com/tskxz/matrix",
        gridSpan: "span-6",
        featured: false,
        categories: ["fullstack", "data"]
    },
    {
        id: "stockmaster",
        name: "StockMaster – Warehouse & Inventory System",
        period: { pt: "janeiro de 2025 - março de 2025", en: "Jan 2025 – Mar 2025" },
        association: { pt: "ISTEC Porto", en: "ISTEC Porto" },
        logo: "assets/images/logos/project-stockmaster.png",
        desc: {
            pt: "Sistema de gestão de armazém e controlo de stock em tempo real na stack MERN. Inclui proteção com JWT, administração de produtos e categorias, registo de movimentos de entrada/saída e relatórios.",
            en: "Warehouse management system on the MERN stack for real-time stock control, inventory tracking, category administration, and warehouse movement reporting."
        },
        skills: ["MERN Stack", "JWT", "Express.js", "Node.js", "MongoDB"],
        github: "https://github.com/tskxz/stockmaster",
        gridSpan: "span-6",
        featured: false,
        categories: ["fullstack"]
    },
    {
        id: "vertex",
        name: "Vertex - AI Chatbot for Programmers",
        period: { pt: "novembro de 2024 - fevereiro de 2025", en: "Nov 2024 – Feb 2025" },
        association: { pt: "ISTEC Porto", en: "ISTEC Porto" },
        logo: "assets/images/logos/project-vertex.png",
        desc: {
            pt: "Assistente de programação inteligente em React e Express.js para depuração de erros, geração de código e explicações técnicas com integração da API OpenAI em tempo real.",
            en: "AI programming assistant built with React and Express.js for debugging, code generation, and technical explanations powered by OpenAI API."
        },
        skills: ["React.js", "Express.js", "OpenAI API", "Node.js"],
        github: "https://github.com/VertexAI-pt/VertexAI",
        gridSpan: "span-6",
        featured: false,
        categories: ["ai", "fullstack"]
    },
    {
        id: "flavorcraft",
        name: "FlavorCraft – Mobile Culinary Platform",
        period: { pt: "dezembro de 2024 - janeiro de 2025", en: "Dec 2024 – Jan 2025" },
        association: { pt: "ISTEC Porto", en: "ISTEC Porto" },
        logo: "assets/images/logos/project-flavorcraft.png",
        desc: {
            pt: "Aplicação móvel multiplataforma de receitas em React Native e Expo com backend REST API em Node.js e Express ligado a base de dados MongoDB e Mongoose.",
            en: "Cross-platform mobile recipe app built with React Native and Expo, backed by a Node.js and Express REST API connected to MongoDB and Mongoose."
        },
        skills: ["React Native", "Expo", "Node.js", "Express.js", "MongoDB"],
        github: "https://github.com/tskxz/flavor-craft",
        gridSpan: "span-6",
        featured: false,
        categories: ["mobile", "fullstack"]
    },
    {
        id: "schetech",
        name: "schetech - Tech Repair Scheduling API",
        period: { pt: "novembro de 2024", en: "Nov 2024" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-schetech.png",
        desc: {
            pt: "API REST em Node.js, Express.js e MongoDB para agendamento de serviços de reparação técnica, marcações de visitas ao domicílio, autenticação JWT e encriptação bcrypt em arquitetura MVC.",
            en: "REST API for tech repair workflows, appointments, technician scheduling, JWT authentication, and bcrypt password hashing using MVC structure."
        },
        skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
        github: "https://github.com/tskxz/schetech",
        gridSpan: "span-6",
        featured: false,
        categories: ["fullstack"]
    },
    {
        id: "metalshop",
        name: "MetalShop – Heavy Metal Merchandise E-Commerce",
        period: { pt: "junho de 2024 - outubro de 2024", en: "Jun 2024 – Oct 2024" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-metalshop.png",
        desc: {
            pt: "Plataforma de comércio eletrónico MERN para merchandise de heavy metal com gestão de estado global em Redux, pagamentos integrados com PayPal, encomendas e painel administrativo.",
            en: "MERN e-commerce application for heavy metal merchandise, featuring Redux state management, PayPal payments, order handling, and administration."
        },
        skills: ["React.js", "Redux", "Node.js", "Express.js", "PayPal API"],
        github: "https://github.com/tskxz/MetalShop",
        gridSpan: "span-6",
        featured: false,
        categories: ["fullstack"]
    },
    {
        id: "macros4ever",
        name: "Macros4Ever – Nutrition Database API",
        period: { pt: "setembro de 2024", en: "Sep 2024" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-macros4ever.png",
        desc: {
            pt: "API backend em Node.js e Express para gestão de base de dados nutricional, com middlewares de validação, processos de aprovação de alimentos e documentação Postman.",
            en: "Node.js and Express API for maintaining a detailed food and nutrition database, with validation middlewares and Postman testing/documentation."
        },
        skills: ["Node.js", "Express.js", "Postman", "Backend Dev"],
        github: "https://github.com/tskxz/macros4ever",
        gridSpan: "span-6",
        featured: false,
        categories: ["fullstack"]
    },
    {
        id: "sixpackacademy",
        name: "SixPackAcademy - Gym Booking Platform",
        period: { pt: "maio de 2024 - julho de 2024", en: "May 2024 – Jul 2024" },
        association: { pt: "ISTEC Porto", en: "ISTEC Porto" },
        logo: "assets/images/logos/project-sixpackacademy.png",
        desc: {
            pt: "Aplicação web em PHP e MySQL para gestão de ginásio, integração com Calendly para marcação de massagens e fisioterapia, notificações SMTP via PHPMailer e área administrativa.",
            en: "PHP and MySQL web application for gym operations, with Calendly integration for appointments, custom SMTP via PHPMailer, and administration area."
        },
        skills: ["PHP", "MySQL", "Calendly API", "PHPMailer", "SMTP"],
        github: "https://github.com/sixpackacademy/experimental_view6p",
        gridSpan: "span-6",
        featured: false,
        categories: ["fullstack"]
    },
    {
        id: "tablebook",
        name: "TableBook – Restaurant Reservation System",
        period: { pt: "junho de 2024 - julho de 2024", en: "Jun 2024 – Jul 2024" },
        association: { pt: "ISTEC Porto", en: "ISTEC Porto" },
        logo: "assets/images/logos/project-tablebook.png",
        desc: {
            pt: "Sistema de reserva de mesas e pedidos para restaurantes em Python, Flask e MongoDB/PyMongo com seleção e personalização de pratos.",
            en: "Restaurant table and meal reservation web application built with Python, Flask, MongoDB, and PyMongo."
        },
        skills: ["Python", "Flask", "MongoDB", "PyMongo"],
        github: "https://github.com/tskxz/reservarmesa-bifes",
        gridSpan: "span-6",
        featured: false,
        categories: ["fullstack"]
    },
    {
        id: "weatherdata",
        name: "WeatherData – Node.js Forecast CLI",
        period: { pt: "novembro de 2020", en: "Nov 2020" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-weatherdata.png",
        desc: {
            pt: "Ferramenta CLI em Node.js que consulta dados meteorológicos em tempo real através da OpenWeather API e formata previsões diretamente no terminal.",
            en: "Node.js command-line application that retrieves real-time weather forecasts from the OpenWeather API and formats data for terminal output."
        },
        skills: ["Node.js", "CLI", "OpenWeather API", "REST API"],
        github: "https://github.com/tskxz/",
        gridSpan: "span-6",
        featured: false,
        categories: ["systems", "fullstack"]
    },
    {
        id: "farmersteamcards",
        name: "FarmerSteamCards - Headless Steam Farming",
        period: { pt: "março de 2020 - julho de 2020", en: "Mar 2020 – Jul 2020" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-farmersteamcards.png",
        desc: {
            pt: "Ferramenta em linha de comandos Node.js para automatizar o 'farming' de cartas Steam sem necessidade de instalar jogos, utilizando a biblioteca steam-user para emular sessões headless.",
            en: "Node.js CLI tool automating Steam trading-card farming without game installations, using steam-user to emulate headless client sessions."
        },
        skills: ["Node.js", "steam-user", "CLI Automation"],
        github: "https://github.com/tskxz/FarmerSteamCards",
        gridSpan: "span-6",
        featured: false,
        categories: ["systems"]
    },
    {
        id: "escolhaacertada",
        name: "Escolha-Acertada – Real Estate Data Analytics",
        period: { pt: "junho de 2020", en: "Jun 2020" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-escolhaacertada.png",
        desc: {
            pt: "Projeto de recolha e tratamento de dados imobiliários na web com Python, BeautifulSoup, Requests, Pandas e Jupyter Notebook, transformando dados não-estruturados em datasets CSV.",
            en: "Python real-estate web scraper and data processing tool built with BeautifulSoup, Requests, Pandas, and Jupyter Notebook to generate analytical CSV datasets."
        },
        skills: ["Python", "BeautifulSoup", "Pandas", "Web Scraping"],
        github: "https://github.com/tskxz/Escolha-Acertada",
        gridSpan: "span-6",
        featured: false,
        categories: ["data"]
    },
    {
        id: "motiondetection",
        name: "Real-Time Object Motion Detection & Data Viz",
        period: { pt: "março de 2020", en: "Mar 2020" },
        association: { pt: "Projeto Pessoal", en: "Personal Project" },
        logo: "assets/images/logos/project-motiondetection.png",
        desc: {
            pt: "Sistema de deteção de movimento em tempo real com Python e OpenCV a partir de câmara de vídeo, registando intervalos de movimento em Pandas DataFrames e gerando gráficos temporais com Bokeh.",
            en: "Real-time motion-detection system developed with Python and OpenCV on video feed, logging timestamps to Pandas DataFrames and rendering interactive time-series charts with Bokeh."
        },
        skills: ["Python", "OpenCV", "Pandas", "Bokeh", "Computer Vision"],
        github: "https://github.com/tskxz/detect-objects-webcam",
        gridSpan: "span-12",
        featured: false,
        categories: ["data", "systems"]
    }
];

const certificatesData = [
    {
        id: "langchain-foundation",
        title: { pt: "Foundation: Introduction to LangChain - Python", en: "Foundation: Introduction to LangChain - Python" },
        issuer: "LangChain Academy",
        date: { pt: "agosto de 2026", en: "Aug 2026" },
        logo: "assets/images/logos/langchain.png",
        pdf: "assets/certificates/cert-langchain-foundation.pdf",
        credentialId: "qxjdy9xqsg"
    },
    {
        id: "mcp",
        title: { pt: "Introduction to Model Context Protocol", en: "Introduction to Model Context Protocol" },
        issuer: "Anthropic / Model Context Protocol",
        date: { pt: "agosto de 2026", en: "Aug 2026" },
        logo: "assets/images/logos/anthropic.png",
        pdf: "assets/certificates/cert-mcp.pdf",
        credentialId: "pg569sbzob9i"
    },
    {
        id: "aws",
        title: { pt: "AWS Technical Essentials", en: "AWS Technical Essentials" },
        issuer: "Amazon Web Services (AWS)",
        date: { pt: "julho de 2026", en: "Jul 2026" },
        logo: "assets/images/logos/aws.png",
        pdf: "assets/certificates/cert-aws-technical-essentials.pdf"
    },
    {
        id: "what-is-rag",
        title: { pt: "What is RAG? - NORAI Academy", en: "What is RAG? - NORAI Academy" },
        issuer: "NORAI Academy",
        date: { pt: "julho de 2026", en: "Jul 2026" },
        logo: "assets/images/logos/norai.png",
        pdf: "assets/certificates/cert-norai-what-is-rag.pdf",
        credentialId: "c820ec9de62c24d6"
    },
    {
        id: "gemini-multimodal-rag",
        title: { pt: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG", en: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG" },
        issuer: "Google",
        date: { pt: "julho de 2026", en: "Jul 2026" },
        logo: "assets/images/logos/google.png",
        credentialId: "26121084"
    },
    {
        id: "prompt-engineering-mastery",
        title: { pt: "Prompt Engineering Mastery: From Foundations to Future", en: "Prompt Engineering Mastery: From Foundations to Future" },
        issuer: "NORAI Academy",
        date: { pt: "julho de 2026", en: "Jul 2026" },
        logo: "assets/images/logos/norai.png",
        pdf: "assets/certificates/cert-norai-prompt-engineering.pdf",
        credentialId: "dc5f4ccbcd3be140"
    },
    {
        id: "nodejs",
        title: { pt: "Node.js, Express, MongoDB & More: The Complete Bootcamp", en: "Node.js, Express, MongoDB & More: The Complete Bootcamp" },
        issuer: "Udemy",
        date: "2024",
        logo: "assets/images/logos/udemy.png",
        pdf: "assets/certificates/cert-nodejs-bootcamp.pdf",
        credentialId: "UC-5a1696cd-cfde-4906-a556-498c6682f9f2"
    },
    {
        id: "hackathon",
        title: { pt: "3º Lugar - Natixis Hackathon 2024", en: "3rd Place - Natixis Hackathon 2024" },
        issuer: "Natixis",
        date: "2024",
        logo: "assets/images/logos/natixis.png"
    },
    {
        id: "natixis-bd",
        title: { pt: "Natixis Certificate of Participation - Big Data Engineer", en: "Natixis Certificate of Participation - Big Data Engineer" },
        issuer: "Natixis",
        date: "2024",
        logo: "assets/images/logos/natixis.png"
    },
    {
        id: "jornadas",
        title: { pt: "VII Jornadas de Engenharia de Sistemas", en: "VII Jornadas de Engenharia de Sistemas" },
        issuer: "ISTEC Porto",
        date: "2023",
        logo: "assets/images/logos/isep.png",
        pdf: "assets/certificates/cert-jornadas-sistemas.pdf"
    }
];

const translations = {
    pt: {
        role: "Software Engineer",
        location: "Moreira da Maia, Porto, Portugal",
        statusLabel: "ISTEC &middot; Disponível para projetos & funções de engenharia",
        themeLight: "Claro",
        themeDark: "Escuro",
        navAbout: "Sobre",
        navEducation: "Educação",
        navExperience: "Experiência",
        navProjects: "Projetos",
        navCertifications: "Certificados",
        navLanguages: "Idiomas",
        aboutTitle: "Sobre",
        aboutHtml: `<p>Estudante de Engenharia Informática no ISTEC, com foco em Backend Engineering e APIs.</p><p>Desenvolvo soluções backend e REST APIs utilizando Node.js, Python e bases de dados SQL/NoSQL. Tenho também experiência Full-Stack a construir aplicações com Next.js, Nuxt, MERN e Laravel, e atualmente estou a explorar a integração de IA com LangChain.</p>`,
        educationTitle: "Formação Académica",
        edu1Period: "setembro de 2025 - setembro de 2028",
        edu1Degree: "Nível 6, Licenciatura em Engenharia Informática (Computer Software Engineering)",
        edu2Period: "outubro de 2023 - setembro de 2025",
        edu2Degree: "Nível 5, CTESP em Desenvolvimento de Software",
        edu3Period: "setembro de 2020 - julho de 2023",
        edu3Degree: "Nível 4, Técnico de Gestão e Programação de Sistemas Informáticos",
        experienceTitle: "Experiência Profissional",
        expGroupSoftware: "Desenvolvimento de Software",
        expGroupSystems: "Sistemas & Infraestrutura Técnica",
        exp1Period: "março de 2025 - julho de 2025",
        exp1Role: "Web Developer",
        exp1Grade: "Nota: 20/20",
        exp1Bullets: [
            "Arquitetura e implementação de backend serverless e plataforma web com Nuxt 3 e TypeScript em Cloudflare Workers com NuxtHub.",
            "Modelação relacional de dados type-safe com Drizzle ORM sobre base de dados SQLite / Cloudflare D1 distribuída.",
            "Integração de serviços transacionais via Brevo e automação contínua de pipelines CI/CD com GitHub Actions."
        ],
        exp2Period: "junho de 2023 - julho de 2023",
        exp2Role: "Web Developer",
        exp2Grade: "Nota: 19/20",
        exp2Bullets: [
            "Desenvolvimento full-stack de sistema de gestão de conteúdos (CMS) para o projeto \"Eco-Escolas\" com Laravel e Livewire.",
            "Implementação de módulos CRUD dinâmicos com autenticação, controlo de permissões de professores e upload de ficheiros.",
            "Modelação e otimização de queries relacionais com Eloquent ORM sobre base de dados MySQL."
        ],
        exp3Period: "maio de 2023 - junho de 2023",
        exp3Role: "Computer Technician",
        exp3Bullets: [
            "Atualização do website institucional em Wix, ajustando a estrutura de páginas e layouts para melhorar a experiência do utilizador (UI/UX).",
            "Implementação do Reboot Restore Rx em postos de trabalho públicos para restaurar automaticamente alterações de sistema não autorizadas após reinicialização.",
            "Otimização do desempenho do Windows através da edição de chaves de registo (Regedit), desativação de serviços de arranque não essenciais e limpeza de caches do sistema."
        ],
        exp4Period: "maio de 2023",
        exp4Role: "IT Technician",
        exp4Bullets: [
            "Implementação de distribuições Linux ultra-leves (Tiny Core Linux e antiX) em portáteis de baixo desempenho, ajustando a escolha do SO a fortes restrições de hardware, RAM e armazenamento.",
            "Transporte físico e instalação de múltiplos servidores pesados para locais designados, assegurando a configuração e implementação segura do equipamento."
        ],
        exp5Period: "maio de 2023",
        exp5Role: "Stage Technician",
        exp5Bullets: [
            "Gestão de iluminação de palco ao vivo, sistemas de som e equipamento de projeção durante eventos no Palacio de Congresos de Granada.",
            "Operação de consolas de mistura AV e iluminação em tempo real, assegurando a execução sonora e visual para audiências ao vivo.",
            "Configuração, testes e manutenção preventiva de tecnologia de palco para prevenir falhas durante eventos."
        ],
        exp6Period: "maio de 2022 - julho de 2022",
        exp6Role: "Support Worker",
        exp6Grade: "Nota: 19/20",
        exp6Bullets: [
            "Gestão de tickets de suporte técnico L1/L2, diagnóstico de problemas e encaminhamento de bugs complexos para a equipa de desenvolvimento.",
            "Administração remota de servidores com AnyDesk e RDP para aceder com segurança a infraestruturas e recuperar dados críticos.",
            "Tratamento de transferências de dados confidenciais em estrito cumprimento de protocolos de privacidade e normas de segurança interna."
        ],
        projectsTitle: "Projetos",
        filterFeatured: "Destaques (8)",
        filterAi: "IA & LLMs",
        filterSystems: "Sistemas & CLI",
        filterMobile: "Mobile Development",
        filterFullstack: "Full-Stack & APIs",
        filterData: "Dados & Visão Computacional",
        filterAll: "Todos (20)",
        featuredBadge: "Destaque",
        certificationsTitle: "Certificados & Prémios",
        credIdLabel: "ID Credencial:",
        viewCertBtn: "Ver Certificado",
        languagesTitle: "Idiomas",
        langPt: "Português",
        langPtLevel: "Nativo ou Bilingue",
        langEn: "Inglês",
        langEnLevel: "Nível Profissional / Trabalho",
        footerRole: "Software Engineer",
        footerText: "Portfólio Pessoal",
        viewCode: "Ver no GitHub",
        viewWebsite: "Website"
    },
    en: {
        role: "Software Engineer",
        location: "Moreira da Maia, Porto, Portugal",
        statusLabel: "ISTEC &middot; Open to engineering opportunities & projects",
        themeLight: "Light",
        themeDark: "Dark",
        navAbout: "About",
        navEducation: "Education",
        navExperience: "Experience",
        navProjects: "Projects",
        navCertifications: "Certifications",
        navLanguages: "Languages",
        aboutTitle: "About",
        aboutHtml: `<p>Computer Software Engineering student at ISTEC, focused on Backend Engineering and APIs.</p><p>I develop backend solutions and REST APIs using Node.js, Python, and SQL/NoSQL databases. I also have Full-Stack experience building applications with Next.js, Nuxt, MERN, and Laravel.</p>`,
        educationTitle: "Education",
        edu1Period: "September 2025 - September 2028",
        edu1Degree: "Level 6, Bachelor in Computer Software Engineering",
        edu2Period: "October 2023 - September 2025",
        edu2Degree: "Level 5, Higher Professional Technical Diploma (CTESP) in Software Development",
        edu3Period: "September 2020 - July 2023",
        edu3Degree: "Level 4, IT Systems Management and Programming Technician",
        experienceTitle: "Professional Experience",
        expGroupSoftware: "Software Engineering",
        expGroupSystems: "Systems & Technical Infrastructure",
        exp1Period: "March 2025 - July 2025",
        exp1Role: "Web Developer",
        exp1Grade: "Grade: 20/20",
        exp1Bullets: [
            "Architected and deployed a serverless web platform using Nuxt 3 and TypeScript on Cloudflare Workers with NuxtHub.",
            "Engineered type-safe relational data models with Drizzle ORM over distributed SQLite / Cloudflare D1 databases.",
            "Integrated transactional email services via Brevo and automated CI/CD deployment pipelines with GitHub Actions."
        ],
        exp2Period: "June 2023 - July 2023",
        exp2Role: "Web Developer",
        exp2Grade: "Grade: 19/20",
        exp2Bullets: [
            "Developed a full-stack administrative CMS for the \"Eco-Escolas\" initiative with reactive UI components using Laravel and Livewire.",
            "Implemented dynamic CRUD workflows with authentication, teacher role-based access control, and media file uploads.",
            "Structured and optimized relational data queries using Eloquent ORM on MySQL database."
        ],
        exp3Period: "May 2023 - June 2023",
        exp3Role: "Computer Technician",
        exp3Bullets: [
            "Updated the institutional website on Wix, adjusting page structure and layouts to improve UI/UX.",
            "Implemented Reboot Restore Rx on public workstations to automatically revert unauthorized system changes upon restart.",
            "Optimized Windows performance by editing registry keys (Regedit), disabling non-essential startup services, and clearing system caches."
        ],
        exp4Period: "May 2023",
        exp4Role: "IT Technician",
        exp4Bullets: [
            "Deployed ultra-lightweight Linux distributions such as Tiny Core Linux and antiX on low-spec laptops, tailoring OS selection to severe hardware, RAM, and storage constraints.",
            "Handled the physical transport and installation of multiple heavy servers to designated workspace sites, ensuring safe equipment deployment and setup."
        ],
        exp5Period: "May 2023",
        exp5Role: "Stage Technician",
        exp5Bullets: [
            "Managed live stage lighting, sound systems, and projection equipment during events at Palacio de Congresos de Granada.",
            "Operated AV and lighting mixing consoles in real time, ensuring seamless audio and visual execution for live audiences.",
            "Performed setup, testing, and preventive maintenance of stage technology to avoid equipment failure during events."
        ],
        exp6Period: "May 2022 - July 2022",
        exp6Role: "Support Worker",
        exp6Grade: "Grade: 19/20",
        exp6Bullets: [
            "Managed L1/L2 IT support tickets, diagnosing incoming issues and escalating complex bugs to the development team.",
            "Provided remote server administration using AnyDesk and RDP to access infrastructure and retrieve sensitive data securely.",
            "Handled confidential data transfers while adhering to privacy protocols and internal security standards."
        ],
        projectsTitle: "Projects",
        filterFeatured: "Featured (8)",
        filterAi: "AI & LLMs",
        filterSystems: "Systems & CLI",
        filterMobile: "Mobile Development",
        filterFullstack: "Full-Stack & APIs",
        filterData: "Data & Computer Vision",
        filterAll: "All (20)",
        featuredBadge: "Featured",
        certificationsTitle: "Certifications & Awards",
        credIdLabel: "Credential ID:",
        viewCertBtn: "View Certificate",
        languagesTitle: "Languages",
        langPt: "Portuguese",
        langPtLevel: "Native or Bilingual",
        langEn: "English",
        langEnLevel: "Professional Working Proficiency",
        footerRole: "Software Engineer",
        footerText: "Personal Portfolio",
        viewCode: "View on GitHub",
        viewWebsite: "Website"
    }
};

let currentFilter = 'featured';

function renderProjectFilters(lang) {
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;
    const t = translations[lang];

    const filters = [
        { key: 'featured', label: t.filterFeatured },
        { key: 'all', label: t.filterAll },
        { key: 'fullstack', label: t.filterFullstack },
        { key: 'ai', label: t.filterAi },
        { key: 'systems', label: t.filterSystems },
        { key: 'mobile', label: t.filterMobile },
        { key: 'data', label: t.filterData }
    ];

    filterContainer.innerHTML = filters.map(f => `
        <button type="button" class="filter-btn ${currentFilter === f.key ? 'active' : ''}" onclick="setProjectFilter('${f.key}')">
            ${f.label}
        </button>
    `).join('');
}

function setProjectFilter(filter) {
    currentFilter = filter;
    const currentLang = localStorage.getItem('preferred_lang') || 'pt';
    renderProjectFilters(currentLang);
    renderProjects(currentLang);
}

function renderProjects(lang) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const githubIconSvg = `<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;
    const externalIconSvg = `<svg viewBox="0 0 24 24"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7z"/></svg>`;
    const t = translations[lang];

    const filteredProjects = projectsData.filter(p => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'featured') return p.featured;
        if (Array.isArray(p.categories)) {
            return p.categories.includes(currentFilter);
        }
        return p.category === currentFilter;
    });

    container.innerHTML = filteredProjects.map(p => {
        const period = p.period[lang] || p.period.pt;
        const association = p.association[lang] || p.association.pt;
        const desc = p.desc[lang] || p.desc.pt;
        const btnLabel = t.viewCode;
        const websiteLabel = t.viewWebsite || "Website";
        const spanClass = p.gridSpan || "span-6";
        const featuredCardClass = p.featured ? "featured-card" : "";

        const skillsHtml = p.skills.map(s => `<span class="skill-chip">${s}</span>`).join('');

        return `
            <article class="project-card ${spanClass} ${featuredCardClass}">
                <div>
                    <div class="project-top-row">
                        <div class="project-logo-slot">
                            <img src="${p.logo}" alt="Logótipo ${p.name}" onerror="this.style.display='none'">
                        </div>
                        <div class="project-header-info">
                            <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 4px;">
                                <h3 class="project-name" style="margin-bottom: 0;">${p.name}</h3>
                                ${p.featured ? `<span class="featured-badge">${t.featuredBadge}</span>` : ''}
                            </div>
                            <div class="project-meta-line">
                                <span class="project-meta-assoc">${association}</span>
                                <span>&middot;</span>
                                <span>${period}</span>
                            </div>
                        </div>
                    </div>
                    <p class="project-desc">${desc}</p>
                </div>
                <div class="project-footer">
                    <div class="project-skill-cluster">${skillsHtml}</div>
                    ${(p.github || p.website) ? `
                    <div class="project-action-row" style="display: flex; align-items: center; justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
                        ${p.website ? `
                        <a href="${p.website}" target="_blank" rel="noopener noreferrer" class="btn-code" title="${websiteLabel}">
                            ${externalIconSvg}
                            <span>${websiteLabel}</span>
                        </a>` : ''}
                        ${p.github ? `
                        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-code" title="${btnLabel}">
                            ${githubIconSvg}
                            <span>${btnLabel}</span>
                        </a>` : ''}
                    </div>` : ''}
                </div>
            </article>
        `;
    }).join('');
}

function renderCertificates(lang) {
    const container = document.getElementById('certificates-container');
    if (!container) return;

    const certIconSvg = `<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`;
    const t = translations[lang];

    container.innerHTML = certificatesData.map(c => {
        const title = c.title[lang] || c.title.pt;
        const date = (typeof c.date === 'object') ? (c.date[lang] || c.date.pt) : c.date;

        return `
            <article class="cert-card">
                <div class="cert-top">
                    <div class="cert-logo-slot">
                        <img src="${c.logo}" alt="Logótipo ${title}" onerror="this.style.display='none'">
                    </div>
                    <div class="cert-info">
                        <h3 class="cert-title">${title}</h3>
                        <div class="cert-meta">
                            <span>${c.issuer}</span>
                            <span>&middot;</span>
                            <span>${date}</span>
                        </div>
                    </div>
                </div>

                ${c.credentialId ? `
                <div class="cert-cred-row">
                    <span>${t.credIdLabel}</span>
                    <code class="cert-cred-code">${c.credentialId}</code>
                </div>` : ''}

                ${c.pdf ? `
                <div class="cert-actions">
                    <a href="${c.pdf}" target="_blank" rel="noopener noreferrer" class="btn-cert" title="${t.viewCertBtn}">
                        ${certIconSvg}
                        <span>${t.viewCertBtn}</span>
                    </a>
                </div>` : ''}
            </article>
        `;
    }).join('');
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function setTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') return;
    localStorage.setItem('preferred_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    const btn = document.getElementById('btn-theme-toggle');
    if (btn) {
        if (theme === 'dark') {
            btn.innerHTML = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
            btn.setAttribute('title', 'Modo Escuro / Dark Mode');
            btn.setAttribute('aria-label', 'Modo Escuro');
        } else {
            btn.innerHTML = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
            btn.setAttribute('title', 'Modo Claro / Light Mode');
            btn.setAttribute('aria-label', 'Modo Claro');
        }
    }
}

function setLanguage(lang) {
    if (!translations[lang]) return;

    localStorage.setItem('preferred_lang', lang);
    document.documentElement.lang = lang;

    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    if (btnPt) btnPt.classList.toggle('active', lang === 'pt');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');

    // Translate data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Translate data-i18n-html elements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Translate list elements
    document.querySelectorAll('[data-i18n-list]').forEach(el => {
        const key = el.getAttribute('data-i18n-list');
        const items = translations[lang][key];
        if (Array.isArray(items)) {
            el.innerHTML = '';
            items.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                el.appendChild(li);
            });
        }
    });

    // Render projects, filters, and certificates in selected language
    renderProjectFilters(lang);
    renderProjects(lang);
    renderCertificates(lang);
}

// Initialize on DOMContentLoaded or immediate execution
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const storedLang = localStorage.getItem('preferred_lang');
    const defaultLang = (storedLang === 'pt' || storedLang === 'en') ? storedLang : 'pt';
    setLanguage(defaultLang);

    const storedTheme = localStorage.getItem('preferred_theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
        setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Active section tracking for dot navigation
    const sections = document.querySelectorAll('section[id]');
    const navDots = document.querySelectorAll('.dot-nav .nav-dot');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 140;
        let currentId = '';

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                currentId = sec.getAttribute('id');
            }
        });

        if (currentId) {
            navDots.forEach(dot => {
                const section = dot.getAttribute('data-section');
                dot.classList.toggle('active', section === currentId);
            });
        }
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
});
