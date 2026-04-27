import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        accueil: 'Home',
        apropos: 'About',
        projets: 'Projects',
        outils: 'Tools',
        diplomes: 'Education',
        contact: 'Contact-us'
      }
      ,
      hero: {
        title: 'Creative Mind',
        verticalLabel: 'CREATIVE FORCE',
        full: 'FULL',
        stack: 'STACK',
        dev: 'DEV'
      },
    
      about: {
        titre_part1:"About ",
        titre_part2:"Me ",
        status: 'AVAILABLE',
        subtitle: 'Full-Stack Developer ',
        experience: 'available (+ 3yrs experience)',
        projectsCount: '15 projects',
       description: "Mastering both <0>Front and Back-end</0>, I turn complex concepts into seamless digital solutions. Specialized in <1>building robust architectures</1>, I optimize data structures to deliver <2>impactful results</2>",
        downloadCV: 'Download CV ?',
        marquee1: 'LARAVEL • REACT • NODE.JS • REDUX • DOCKER • GITHUB •',
        marquee2: 'MYSQL • MONGODB • CI/CD • FIGMA • TAILWIND • JS •'
      },
      projects: {
         titre_part1:"Recent Projects & ",
        titre_part2:"Works",
        showMore: 'Show more',
        showLess: 'Show less',
        codeAlt: 'Code source'
      ,
      list: [
        {id:1, name: 'PAWSADOPT ', description: 'Design and implementation of a comprehensive Full-Stack application optimizing the pet adoption process through interactive mapping and secure monetization. Mastery of the entire development cycle: from performant REST APIs to a responsive front-end with deep third-party service integration.', tags: ['Spring Boot 3','Java','React','Tailwind CSS','MySQL','Leaflet.js','Stripe API','Spring Security','Axios','Docker']},
        { id: 2, name: 'FANZONE (CAN 2025)', description: 'Design and implementation of an advanced Full-Stack web platform (React.js/Laravel) to manage 10+ Fan Zones (booking, e-tickets with QR scan, Stripe integration, webhooks, statistics). Containerized with Docker and CI/CD optimized.', tags: ['Laravel','React','Redux','MySQL','PDF','QR Scan','Swagger','Stripe','Mailhog','AOS'] },
        { id: 3, name: 'EVENTIFY', description: 'Full-Stack developer — Built a Laravel API (validation, cache, tests, Stripe/webhook) and React.js frontend with validated forms and dynamic UI. Complete client-server integration with secure online payments.', tags: ['Laravel','React','Redux','Bootstrap','MySQL','Stripe','Webhook','Mailhog','Gsap'] },
        { id: 4, name: 'FOODIEAPP ', description: 'React frontend app with Redux for state management, external API consumption, real-time cart updates, error handling and performance optimizations. Responsive interactive UI.', tags: ['React','Redux','Tailwind','EmailJs','Gsap'] },
        { id: 5, name: 'NIKE EVENT ', description: "oa landing page for the Nike Dance Event in Casablanca, designed to promote a unique and immersive dance competition. The project was planned and managed on ClickUp, designed on Figma, then developed and implemented on WordPress, hosted on Hostinger, with tracking integrated through Google Analytics..", tags: ['Figma','WordPress','Google Analytics','Hostinger'] },
         {id : 6 , name : 'ECOMMERCE STORE',description: "Developed a comprehensive e-commerce platform using WordPress and Custom Fields, featuring advanced product management, a seamless shopping cart system, and a fully responsive user interface for a smooth purchasing experience.",tags:["WordPress","WooCommerce","PHP","Custom Fields (ACF)","SEO (Yoast)","Google Analytics"]},
        { id: 6, name: 'SECUREBOARD ', description: 'Full-Stack app (Laravel + React) for project management with auth, roles & permissions, real-time notifications (Pusher), async emails and API documentation (Swagger).', tags: ['Laravel','React','Pusher','Echo','MailTrap'] },

        { id: 7, name: 'MOVIESCOPE', description: 'Modern web app to discover and explore movies and series with a clean UI, interactive features and an immersive intro video.', tags: ['React','Swiper','AOS','REST API'] },
        { id: 8, name: 'HITRADIO_WEATHER', description: 'Weather features integrated for HitRadio to enrich listeners experience on the official site with modern UX and dynamic data.', tags: ['React','GSAP','REST API'] },
        { id: 9, name: 'Sky 365', description: 'Modern responsive hotel booking website.', tags: ['Figma','React','Uiverse','Material UI'] },
        { id: 10, name: 'Educaty', description: 'Innovative learning platform transforming how students access online educational resources.', tags: ['Figma','React','Bootstrap'] },
        { id: 11, name: 'SERVICE_JARDINAGE', description: 'Professional gardening services website with online quote requests.', tags: ['React','Bootstrap','EmailJS','Swiper'] },
        { id: 12, name: 'HONEY WEB', description: 'Selection of artisanal honeys from local sustainable sources with product descriptions and categories.', tags: ['React','Bootstrap','EmailJS'] },
        { id: 13, name: 'DARIShop', description: 'Ecommerce platform for home products — curated selections to beautify and optimize living spaces.', tags: ['Laravel','Blade','MySQL','HTML','CSS','JS','Tailwind'] },
        { id: 14, name: 'Pizza Dyalna', description: 'Delicious pizza website delivering flavorful experiences and easy online ordering.', tags: ['Laravel','Blade','MySQL','HTML','CSS','JS','Tailwind'] }
      ]
      },
      tools: {
         titre_part1:  'Cutting-edge',
        titre_part2: "Technologies"
      },
      diplomas: {
           titre_part1:"MY CAREER",
        titre_part2:"TIMELINE",
      
      list: [
        { id: 1, type: "education", etablissement: 'SIMPLON ACADEMY', periode: 'June 2025 – Décembre 2025', diplome: 'Training: Full Stack React & Laravel', description: 'Intensive full stack web development training with modern technologies.' },
        { id: 4, type: "education", etablissement: "BEN M'SIK UNIVERSITY", periode: 'July 2022', diplome: 'Bachelor in Mathematical and Computer Sciences', description: 'In-depth academic program in mathematics and computer science fundamentals.' },
        { id: 6,  type: "education",etablissement: 'MOULAY ISMAIL HIGH SCHOOL', periode: 'July 2019', diplome: 'Baccalaureate in Physical and Chemical Sciences', description: 'High school diploma with a scientific specialization.' }
      ]
      },
      experiences: {
        list: [
          {
  id: 0,
  type: "experience",
  etablissement: "Freelance Developer",
  periode: "Jan 2026 – Present",
  diplome: "Full-Stack Freelance Developer",
  description: "Working as an independent Full-Stack developer from A to Z."
},
          { id: 2, type: "experience", etablissement: 'IFGA - CASA', periode: 'Dec 2024 – May 2025', diplome: 'Full-Stack Developer', description: 'Full-Stack development with React.js, Laravel & Spring Boot, API integration and MySQL management.' },
          { id: 3,type: "experience", etablissement: 'DIRECTINVEST', periode: '2022 – 2024', diplome: 'Front-End Developer', description: 'Front-end development with React.js and Redux, WordPress customization and API integration.' },
          { id: 5,type: "experience", etablissement: 'SOURCE IT', periode: 'July 2021 – Oct 2021', diplome: 'Web Developer', description: 'Complete web development, front-end and back-end integration, performance optimization.' }
        ]
      },
      portfolio: {
         titre_part1: "MY ACTIVITY",
        titre_part2: "OPEN SOURCE"
        
      },
      portfolioHero: {
        name: 'NABIL HRIZ',
        role: 'FULL-STACK DEVELOPER',
        specialization: 'Specialization',
        description: 'Building Modern & Innovative solutions with React, Laravel & Spring Boot.'
        ,cta:"browse_work"
      },
      contact: {
         titre_part1: "Let's build",
        titre_part2: " TOGETHER ",
        placeholder: { name: 'Your full name', email: 'Your email address', message: 'Tell me about your project...' },
        sending: 'Sending...',
        send: 'Send message',
        toast: { sentTitle: 'Message Sent!', sentText: 'Thanks {{name}}, your message was sent successfully.', errorTitle: 'Error!', errorText: 'Error sending the message.' }
       , description: 'Ready to bring your digital ideas to life. Let\'s build something extraordinary together.'
      },
      collaborate: {
        header: { lineOne: 'Let\'s', lineTwo: 'Work Together' },
        subtitle: 'Let\'s transform your ideas into high-performance digital projects.',
        features: { innovation: 'Innovation', quality: 'Quality', passion: 'Passion' }
      },
      faq: {
         titre_part1:"COMMON",
        titre_part2:"Questions",
        subtitle:"Clear answers for your digital projects",
        items: [
          { question: 'What services do you offer?', answer: 'I offer UI design, frontend and backend web development, responsive apps, SEO optimization and database integrations. I can also help with redesigns or building projects from scratch.' },
          { question: 'What is your technical approach?', answer: 'I understand goals, analyze needs, prototype and then build maintainable, scalable solutions using modern tech like React and Laravel.Node js , Spring-boot' },
          { question: 'How do you manage project timelines?', answer: 'I set clear milestones, use iterative delivery and keep communication transparent to allow adjustments.' },
          { question: 'Can you collaborate with an existing team?', answer: 'Yes — I integrate with teams, use Git workflows, code reviews and Agile/Scrum methodologies.' },
          { question: 'What tools do you use?', answer: 'I use Figma, Git, Docker, Postman, VS Code and technologies like React, Laravel, Node.js and Tailwind CSS.' }
        ]
      },
      footer: {
        madeBy: 'interesting to know more email me or whatsapp me',
        name: 'NABIL HRIZ',
        buildWith: 'BUILT WITH'
      },
      services: {
  titre_part1: "MY CORE",
  titre_part2: "SERVICES",
  list: [
    { id: "01", title: "Full-Stack Development", desc: "Building scalable web applications using React, Laravel, and Spring Boot with clean, maintainable code." },
    { id: "02", title: "UI/UX Design", desc: "Creating modern, sleek, and user-centric interfaces with a focus on minimalist and tech-oriented aesthetics." },
    { id: "03", title: "Database Architecture", desc: "Designing robust database schemas and optimizing complex queries for high-performance systems." },
    { id: "04", title: "Hosting & SEO Optimization", desc: " manage web hosting, SEO optimization, and analytics integration  to enhance visibility and monitor website performance" }
  ]
}
    }
  },
  fr: {
    translation: {
      nav: {
        accueil: 'Accueil',
        apropos: 'À propos',
        projets: 'Projets',
        outils: 'Outils',
        diplomes: 'Éducation',
        contact: 'Contactez-moi'
      }
      ,
   
      about: {
        titre_part1:"A propos ",
        titre_part2:"de moi ",
        status: 'DISPONIBLE',
        subtitle: 'Développeur Full Stack ',
        experience: 'disponible (+ 3 ans d\'expérience)',
        projectsCount: ' + 15 projets',
       description: "Maîtrisant le <0>Front et le Back</0>, je transforme des concepts complexes en solutions digitales fluides. Spécialisé dans la <1>création d'architectures robustes</1>, j'optimise les structures de données pour des <2>résultats concrets</2>."
       , downloadCV: 'Télécharger CV ?',
        marquee1: 'LARAVEL • REACT • NODE.JS • REDUX • DOCKER • GITHUB •',
        marquee2: 'MYSQL • MONGODB • CI/CD • FIGMA • TAILWIND • JS •'
      },
      projects: {
        
         titre_part1:"Projets Récents & ",
        titre_part2:"Réalisations",
        showMore: 'Afficher plus',
        showLess: 'Afficher moins',
        codeAlt: 'Code source'
      ,
      list: [
        { id: 1, name: 'PAWSADOPT ', description: "Conception d'une application Full-Stack complète optimisant le processus d'adoption via la cartographie interactive et la monétisation sécurisée[cite: 62]. Maîtrise de l'intégralité du cycle de développement : des API REST performantes à un front-end réactif avec intégration poussée de services tiers.", tags: ['Spring Boot 3', 'Java', 'React', 'Tailwind CSS', 'MySQL', 'Leaflet.js', 'Stripe API', 'Spring Security', 'Axios', 'Docker']},
        { id: 2, name: 'FANZONE (CAN 2025)', description: "Conception et réalisation d'une plateforme web avancée Full-Stack (React.js/Laravel) pour la gestion digitalisée (réservation, e-tickets QR Code, scan, intégration Stripe et webhooks, statistiques) des 10+ Fan Zones. Projet conteneurisé avec Docker et optimisé par des pipelines de CI/CD", tags: ['Laravel','React','Redux','Mysql','PDF Simple','Scan QR','Swagger','Stripe','Mailhog','AOS Animation'] },        
        { id: 3, name: 'EVENTIFY ', description: "Développeur Full Stack - Réalisation d'une application web en Laravel (API REST, validation, cache, tests, intégration Stripe et webhook) et React.js (interface dynamique, gestion des états, formulaires validés). Conception, intégration et communication client–serveur complètes avec paiement en ligne sécurisé.", tags: ['Laravel','React','Redux','Bootstrap','Mysql','Stripe','Webhook','Mailhog','Gsap'] },
        { id: 4, name: 'FOODIEAPP ', description: "Développeur Front-End React – Développement d'une application web avec React et Redux pour la gestion d'état, consommation d'une API externe, mise à jour du panier en temps réel, gestion des erreurs et optimisation des performances. Interface réactive et responsive.", tags: ['React','Redux','Tailwind','EmailJs','React Bits','Gsap','AtroposJs','Aos','Rest Api'] },
        { id: 5, name: 'NIKE EVENT ', description: "Création de la page d'atterrissage pour l'événement Nike Dance à Casablanca. Ce projet immersif a suivi un cycle complet : planification via ClickUp, conception UI sur Figma, développement WordPress et hébergement sur Hostinger, incluant le tracking via Google Analytics.", tags: ['Figma','WordPress','Google Analytics','Hostinger'] },
       {id:6 , name : 'ECOMMERCE STORE', description : "Réalisation d'une plateforme e-commerce complète avec WordPress et custom Fields , intégrant une gestion de produits, un système de panier, une interface utilisateur réactive et une expérience d'achat fluide.", tags: ['WordPress', 'WooCommerce', 'PHP', 'Custom Fields (ACF)', 'SEO (Yoast)', 'Google Analytics'] },

        { id: 7, name: 'SECUREBOARD – TASK MANAGEMENT', description: 'Full-Stack app (Laravel + React) for project management with auth, roles & permissions, real-time notifications (Pusher), async emails and API documentation (Swagger).', tags: ['Laravel','React','Pusher','Echo','MailTrap'] },
       
        { id: 8, name: 'MOVIESCOPE', description: "Une application web moderne permettant de découvrir et explorer films et séries selon vos préférences, avec une interface épurée, des fonctionnalités interactives et une vidéo d'introduction immersive.", tags: ['React','SwiperJs','Uiverse','AOS (Animate On Scroll)','Rest Api'] },
        { id: 9, name: 'HITRADIO_WEATHER', description: "HitRadio, une station de radio dynamique et populaire, souhaite enrichir l'expérience de ses auditeurs en intégrant des fonctionnalités météorologiques avancées sur leur site web officiel", tags: ['React','Splite 3D','Gsap','Rest Api'] },
        { id: 10, name: 'Sky 365', description: "Un site web pour le booking en ligne des hotels moderne et responsive.", tags: ['Figma','React','Uiverse','Material UI'] },
        { id: 11, name: 'Educaty', description: "Plateforme d’apprentissage innovante qui révolutionne la manière dont les étudiants accèdent aux ressources éducatives en ligne.", tags: ['Figma','React','Bootstrap','WebLeb','Dribble Inspiration'] },
        { id: 12, name: 'SERVICE_JARDINAGE', description: "Notre site propose une gamme complète de services professionnels pour prendre soin de votre jardin et de votre espace extérieur, demander un devis en ligne", tags: ['React','Bootstrap','EmailJS','SwiperJs'] },
        { id: 13, name: 'HONEY WEB', description: "Notre site propose une sélection variée de miels artisanaux provenant de sources locales et durables. Que vous recherchiez du miel cru, du miel biologique ou des variétés spéciales comme le miel de lavande ou de trèfle", tags: ['React','Bootstrap','EmailJS'] },
        { id:14, name: 'DARIShop', description: "Plateforme eCommerce dédiée à l'univers de la maison. Parcourez notre sélection variée de produits soigneusement sélectionnés pour embellir et optimiser votre espace de vie", tags: ['Laravel','Blade','Mysql','HTML','CSS','JS','Tailwind'] },
        { id:15, name: 'Pizza Dyalna', description: "Plongez dans un monde de saveurs délicieuses où chaque bouchée est une explosion de goût.. Un site Web", tags: ['Laravel','Blade','Mysql','HTML','CSS','JS','Tailwind'] }
      ]
      },
      tools: {
        titre_part1: "Technologies de",
        titre_part2: "Pointe"
      },
      diplomas: {
       
        titre_part1:"PARCOURS",
        titre_part2:"EXPERTISE",

      
      list: [
        { id: 1, type: "education", etablissement: 'SIMPLON ACADEMY', periode: 'Jui 2025 – Déc 2025', diplome: 'Certification professionnelle : Développeur Full Stack', description: 'Formation intensive en développement web full stack avec les technologies modernes' },
        { id: 4, type: "education", etablissement: "UNIVERSITÉ BEN M'SIK", periode: 'Juil 2022', diplome: 'Licence fondamentale en sciences mathématiques et informatiques', description: 'Parcours académique approfondi en mathématiques et informatique fondamentale' },
        { id: 6,type: "education", etablissement: 'LYCÉE MOULAY ISMAIL', periode: 'Juil 2019', diplome: 'Baccalauréat en sciences physiques et chimiques', description: 'Diplôme de fin d\'études secondaires avec spécialisation scientifique' }
      ]
      },
      experiences: {
        list: [
{
  id: 0,
  type: "experience",
  etablissement: "Développeur Freelance",
  periode: "Jan 2026 – Présent",
  diplome: "Développeur Full-Stack Freelance",
  description: "Développeur Full-Stack freelance | depuis la conception à le  déploiement d’applications web"
},
          { id: 2,  type: "experience", etablissement: 'IFGA - CASA', periode: 'Déc 2024 – Mai 2025', diplome: 'Développeur Full-Stack', description: 'Développement Full-Stack avec React.js, Laravel & Spring Boot, intégration API REST et gestion MySQL.' },
          { id: 3, type: "experience", etablissement: 'DIRECTINVEST', periode: '2022 – 2024', diplome: 'Développeur Front-End', description: 'Développement front-end React.js avec Redux, personnalisation WordPress et intégration API.' },
          { id: 5, type: "experience",  etablissement: 'SOURCE IT', periode: 'Juil 2021 – Octobre 2021', diplome: 'Développeur Web', description: 'Stage en développement web complet, intégration front-end et back-end, optimisation performances.' }
        ]
      },
      portfolio: {
        titre_part1: "Mon activité",
        titre_part2: "Open Source"
      },
      portfolioHero: {
        name: 'NABIL HRIZ',
        role: 'DÉVELOPPEUR FULL-STACK',
        specialization: 'Spécialisation',
        description:"Développeur Full Stack — je conçois des applications web modernes et des expériences adaptées au mobile.",
        cta:"voir_projets"
      },
      contact: {
        titre_part1: "Créons",
        titre_part2: " ENSEMBLE ",
        placeholder: { name: 'Votre nom complet', email: 'Votre adresse email', message: 'Parlez-moi de votre projet...' },
        sending: 'Envoi en cours...',
        send: 'Envoyer le message',
        toast: { sentTitle: 'Message Envoyé!', sentText: 'Merci {{name}}, votre message a été envoyé avec succès.', errorTitle: 'Erreur!', errorText: 'Erreur lors de l\'envoi du message.' }
      ,description: 'Prêt à donner vie à vos idées digitales. Construisons ensemble quelque chose d\'extraordinaire.'
      },
      collaborate: {
        header: { lineOne: 'Travaillons', lineTwo: 'Ensemble' },
        subtitle: 'Collaborons pour transformer vos idées en projets numériques performants et innovants.',
        features: { innovation: 'Innovation', quality: 'Qualité', passion: 'Passion' }
      },
      faq: {
        titre_part1:"Foire aux",
        titre_part2:"Questions",
        subtitle:"Des réponses claires pour vos projets digitaux",
        items: [
          { question: 'Quels services proposez-vous ?', answer: "Je propose plusieurs services, notamment la conception d'interfaces utilisateur (UI Design), le développement web (Frontend et Backend), la création d'applications web responsive, l'optimisation SEO, et l'intégration de bases de données. Je peux également vous accompagner dans la refonte de sites existants ou le développement de projets from scratch." },
          { question: 'Quelle est votre approche technique ?', answer: "Mon approche consiste à comprendre vos objectifs, analyser vos besoins, concevoir des maquettes et prototypes, puis développer des solutions efficaces en suivant des méthodologies agiles. J'utilise les technologies modernes comme React, Laravel, Node Js ,Spring-boot et je m'assure que le code soit maintenable, scalable et bien documenté." },
          { question: 'Comment gérez-vous les délais de projet ?', answer: "J'établis un calendrier clair comprenant des jalons précis et j'utilise des outils comme Trello pour suivre l'avancement. Je pratique le développement itératif avec des livraisons régulières pour vous permettre de suivre l'évolution et d'apporter des ajustements si nécessaire. La communication transparente est au cœur de ma méthode de travail." },
          { question: 'Pouvez-vous collaborer avec une équipe existante ?', answer: "Absolument ! Je m'intègre facilement dans des équipes déjà en place pour renforcer les efforts de conception et de développement, tout en assurant une communication fluide. Je suis habitué à travailler avec Git en équipe, aux revues de code, et aux méthodologies Agile/Scrum." },
          { question: 'Quels outils utilisez-vous ?', answer: "J'utilise des outils tels que Figma, Git, Docker, Postman, VS Code, ainsi que des technologies comme React, Laravel, Node.js et Tailwind CSS pour assurer la qualité et la performance de mes projets. Je maîtrise également les outils de testing (Jest, PHPUnit) et les plateformes de déploiement (Vercel, AWS, DigitalOcean)." }
        ]
      },
      footer: {
        madeBy: 'Intéressé(e) pour en savoir plus ? Contactez-moi par e-mail ou via WhatsApp',
        name: 'NABIL HRIZ',
        buildWith: 'BUILD WITH'
      },
      services: {
  titre_part1: "OFFRE DE",
  titre_part2: "SERVICES",
  list: [
    { id: "01", title: "Développement Full-Stack", desc: "Création d'applications web scalables avec React, Laravel et Spring Boot, garantissant un code propre." },
    { id: "02", title: "Design UI/UX", desc: "Conception d'interfaces modernes et épurées, mettant l'accent sur une esthétique minimaliste et technologique." },
    { id: "03", title: "Architecture de Données", desc: "Conception de schémas de bases de données robustes et optimisation de requêtes pour des systèmes performants." },
    { id: "04", title: "Hébergement & Optimisation SEO", desc: "Gestion de l'hébergement web, optimisation du référencement naturel (SEO) et intégration d'analytiques pour améliorer la visibilité et surveiller les performances du site." }
  ]
}
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('fr')) ? 'fr' : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
