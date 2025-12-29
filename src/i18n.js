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
        contact: 'Contact'
      }
      ,
      hero: {
        title: 'Creative Mind',
        verticalLabel: 'CREATIVE FORCE',
        full: 'FULL',
        stack: 'STACK',
        dev: 'DEV'
      },
      intro3d: {
        message: 'CLICK & DRAG TO EXPLORE MY PORTFOLIO ({{count}}s)'
      },
      intro3d: {
        message: 'CLIQUEZ ET FAITES GLISSER POUR EXPLORER MON PORTFOLIO ({{count}}s)'
      },
      about: {
        status: 'AVAILABLE',
        subtitle: 'Full-Stack Developer React & Laravel',
        description: "Mastering both <0>Front and Back</0>, I design modern and high-performance web applications. Specialized in <1>PHP, Laravel and React</1>, I optimize data structures for <2>tangible results</2>.",
        downloadCV: 'Download CV',
        marquee1: 'LARAVEL • REACT • NODE.JS • REDUX • DOCKER • GITHUB •',
        marquee2: 'MYSQL • MONGODB • CI/CD • FIGMA • TAILWIND • JS •'
      },
      projects: {
        header: { lineOne: 'Recent Projects &', lineTwo: 'Works' },
        showMore: 'Show more',
        showLess: 'Show less',
        codeAlt: 'Code source'
      ,
      list: [
        { id: 1, name: 'FANZONE - FAN ZONES DIGITALISATION (CAN 2025)', description: 'Design and implementation of an advanced Full-Stack web platform (React.js/Laravel) to manage 10+ Fan Zones (booking, e-tickets with QR scan, Stripe integration, webhooks, statistics). Containerized with Docker and CI/CD optimized.', tags: ['Laravel','React','Redux','MySQL','PDF','QR Scan','Swagger','Stripe','Mailhog','AOS'] },
        { id: 2, name: 'EVENTIFY - EVENT MANAGEMENT', description: 'Full-Stack developer — Built a Laravel API (validation, cache, tests, Stripe/webhook) and React.js frontend with validated forms and dynamic UI. Complete client-server integration with secure online payments.', tags: ['Laravel','React','Redux','Bootstrap','MySQL','Stripe','Webhook','Mailhog','Gsap'] },
        { id: 3, name: 'SECUREBOARD – TASK MANAGEMENT', description: 'Full-Stack app (Laravel + React) for project management with auth, roles & permissions, real-time notifications (Pusher), async emails and API documentation (Swagger).', tags: ['Laravel','React','Pusher','Echo','MailTrap'] },
        { id: 4, name: 'FOODIEAPP – ONLINE ORDERING', description: 'React frontend app with Redux for state management, external API consumption, real-time cart updates, error handling and performance optimizations. Responsive interactive UI.', tags: ['React','Redux','Tailwind','EmailJs','Gsap'] },
        { id: 5, name: 'MOVIESCOPE', description: 'Modern web app to discover and explore movies and series with a clean UI, interactive features and an immersive intro video.', tags: ['React','Swiper','AOS','REST API'] },
        { id: 6, name: 'HITRADIO_WEATHER', description: 'Weather features integrated for HitRadio to enrich listeners experience on the official site with modern UX and dynamic data.', tags: ['React','GSAP','REST API'] },
        { id: 7, name: 'Sky 365', description: 'Modern responsive hotel booking website.', tags: ['Figma','React','Uiverse','Material UI'] },
        { id: 8, name: 'Educaty', description: 'Innovative learning platform transforming how students access online educational resources.', tags: ['Figma','React','Bootstrap'] },
        { id: 9, name: 'SERVICE_JARDINAGE', description: 'Professional gardening services website with online quote requests.', tags: ['React','Bootstrap','EmailJS','Swiper'] },
        { id: 10, name: 'HONEY WEB', description: 'Selection of artisanal honeys from local sustainable sources with product descriptions and categories.', tags: ['React','Bootstrap','EmailJS'] },
        { id: 11, name: 'DARIShop', description: 'Ecommerce platform for home products — curated selections to beautify and optimize living spaces.', tags: ['Laravel','Blade','MySQL','HTML','CSS','JS','Tailwind'] },
        { id: 12, name: 'Pizza Dyalna', description: 'Delicious pizza website delivering flavorful experiences and easy online ordering.', tags: ['Laravel','Blade','MySQL','HTML','CSS','JS','Tailwind'] }
      ]
      },
      tools: {
        header: { lineOne: 'Cutting-edge', lineTwo: 'Technologies' }
      },
      diplomas: {
        header: { lineOne: 'My Journey', lineTwo: 'Academic' }
      ,
      list: [
        { id: 1, etablissement: 'SIMPLON ACADEMY', periode: 'June 2025 – Present', diplome: 'Training: Full Stack React & Laravel', description: 'Intensive full stack web development training with modern technologies.' },
        { id: 2, etablissement: "BEN M'SIK UNIVERSITY", periode: 'July 2022', diplome: 'Bachelor in Mathematical and Computer Sciences', description: 'In-depth academic program in mathematics and computer science fundamentals.' },
        { id: 3, etablissement: 'MOULAY ISMAIL HIGH SCHOOL', periode: 'July 2019', diplome: 'Baccalaureate in Physical and Chemical Sciences', description: 'High school diploma with a scientific specialization.' }
      ]
      },
      portfolio: {
        header: { lineOne: 'MY ACTIVITY', lineTwo: 'OPEN SOURCE' }
      },
      contact: {
        header: { lineOne: "Let's build", lineTwo: 'Something Amazing' },
        placeholder: { name: 'Your full name', email: 'Your email address', message: 'Tell me about your project...' },
        sending: 'Sending...',
        send: 'Send message',
        toast: { sentTitle: 'Message Sent!', sentText: 'Thanks {{name}}, your message was sent successfully.', errorTitle: 'Error!', errorText: 'Error sending the message.' }
      },
      collaborate: {
        header: { lineOne: 'Let\'s', lineTwo: 'Work Together' },
        subtitle: 'Let\'s transform your ideas into high-performance digital projects.',
        features: { innovation: 'Innovation', quality: 'Quality', passion: 'Passion' }
      },
      faq: {
        header: { lineOne: 'FAQ', lineTwo: 'Questions' },
        items: [
          { question: 'What services do you offer?', answer: 'I offer UI design, frontend and backend web development, responsive apps, SEO optimization and database integrations. I can also help with redesigns or building projects from scratch.' },
          { question: 'What is your technical approach?', answer: 'I understand goals, analyze needs, prototype and then build maintainable, scalable solutions using modern tech like React and Laravel.' },
          { question: 'How do you manage project timelines?', answer: 'I set clear milestones, use iterative delivery and keep communication transparent to allow adjustments.' },
          { question: 'Can you collaborate with an existing team?', answer: 'Yes — I integrate with teams, use Git workflows, code reviews and Agile/Scrum methodologies.' },
          { question: 'What tools do you use?', answer: 'I use Figma, Git, Docker, Postman, VS Code and technologies like React, Laravel, Node.js and Tailwind CSS.' }
        ]
      },
      footer: {
        madeBy: 'interesting to know more email me or whatsapp me',
        name: 'NABIL HRIZ',
        buildWith: 'BUILT WITH'
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
        contact: 'Contact'
      }
      ,
      hero: {
        title: 'Esprit Créatif',
        verticalLabel: 'FORCE CRÉATIVE',
        full: 'FULL',
        stack: 'STACK',
        dev: 'DEV'
      },
      about: {
        status: 'DISPONIBLE',
        subtitle: 'Développeur Full Stack React & Laravel',
        description: "Maîtrisant le <0>Front et le Back</0>, je conçois des applications web modernes et performantes. Spécialisé en <1>PHP, Laravel et React</1>, j'optimise les structures de données pour des <2>résultats concrets</2>.",
        downloadCV: 'Télécharger CV',
        marquee1: 'LARAVEL • REACT • NODE.JS • REDUX • DOCKER • GITHUB •',
        marquee2: 'MYSQL • MONGODB • CI/CD • FIGMA • TAILWIND • JS •'
      },
      projects: {
        header: { lineOne: 'Projets Récents &', lineTwo: 'Réalisations' },
        showMore: 'Afficher plus',
        showLess: 'Afficher moins',
        codeAlt: 'Code source'
      ,
      list: [
        { id: 1, name: 'FANZONE - DIGITALISATION DES FAN ZONES (CAN 2025)', description: "Conception et réalisation d'une plateforme web avancée Full-Stack (React.js/Laravel) pour la gestion digitalisée (réservation, e-tickets QR Code, scan, intégration Stripe et webhooks, statistiques) des 10+ Fan Zones. Projet conteneurisé avec Docker et optimisé par des pipelines de CI/CD", tags: ['Laravel','React','Redux','Mysql','PDF Simple','Scan QR','Swagger','Stripe','Mailhog','AOS Animation'] },
        { id: 2, name: 'EVENTIFY - GESTION DES EVENEMENTS', description: "Développeur Full Stack - Réalisation d'une application web en Laravel (API REST, validation, cache, tests, intégration Stripe et webhook) et React.js (interface dynamique, gestion des états, formulaires validés). Conception, intégration et communication client–serveur complètes avec paiement en ligne sécurisé.", tags: ['Laravel','React','Redux','Bootstrap','Mysql','Stripe','Webhook','Mailhog','Gsap'] },
        { id: 3, name: 'SECUREBOARD – GESTION DES TACHES', description: "Développeur Full Stack (Laravel + React) – Création d'une application de gestion de projets avec authentification, rôles & permissions, notifications temps réel (Pusher), emails asynchrones et documentation API (Swagger).", tags: ['Laravel','React','SweetAlert','ReChartJs','Pusher','EchoJs','MailTrap'] },
        { id: 4, name: 'FOODIEAPP – COMMANDE EN LIGNE', description: "Développeur Front-End React – Développement d'une application web avec React et Redux pour la gestion d'état, consommation d'une API externe, mise à jour du panier en temps réel, gestion des erreurs et optimisation des performances. Interface réactive et responsive.", tags: ['React','Redux','Tailwind','EmailJs','React Bits','Gsap','AtroposJs','Aos','Rest Api'] },
        { id: 5, name: 'MOVIESCOPE', description: "Une application web moderne permettant de découvrir et explorer films et séries selon vos préférences, avec une interface épurée, des fonctionnalités interactives et une vidéo d'introduction immersive.", tags: ['React','SwiperJs','Uiverse','AOS (Animate On Scroll)','Rest Api'] },
        { id: 6, name: 'HITRADIO_WEATHER', description: "HitRadio, une station de radio dynamique et populaire, souhaite enrichir l'expérience de ses auditeurs en intégrant des fonctionnalités météorologiques avancées sur leur site web officiel", tags: ['React','Splite 3D','Gsap','Rest Api'] },
        { id: 7, name: 'Sky 365', description: "Un site web pour le booking en ligne des hotels moderne et responsive.", tags: ['Figma','React','Uiverse','Material UI'] },
        { id: 8, name: 'Educaty', description: "Plateforme d’apprentissage innovante qui révolutionne la manière dont les étudiants accèdent aux ressources éducatives en ligne.", tags: ['Figma','React','Bootstrap','WebLeb','Dribble Inspiration'] },
        { id: 9, name: 'SERVICE_JARDINAGE', description: "Notre site propose une gamme complète de services professionnels pour prendre soin de votre jardin et de votre espace extérieur, demander un devis en ligne", tags: ['React','Bootstrap','EmailJS','SwiperJs'] },
        { id: 10, name: 'HONEY WEB', description: "Notre site propose une sélection variée de miels artisanaux provenant de sources locales et durables. Que vous recherchiez du miel cru, du miel biologique ou des variétés spéciales comme le miel de lavande ou de trèfle", tags: ['React','Bootstrap','EmailJS'] },
        { id:11, name: 'DARIShop', description: "Plateforme eCommerce dédiée à l'univers de la maison. Parcourez notre sélection variée de produits soigneusement sélectionnés pour embellir et optimiser votre espace de vie", tags: ['Laravel','Blade','Mysql','HTML','CSS','JS','Tailwind'] },
        { id:12, name: 'Pizza Dyalna', description: "Plongez dans un monde de saveurs délicieuses où chaque bouchée est une explosion de goût.. Un site Web", tags: ['Laravel','Blade','Mysql','HTML','CSS','JS','Tailwind'] }
      ]
      },
      tools: {
        header: { lineOne: 'Technologies de', lineTwo: 'Pointe' }
      },
      diplomas: {
        header: { lineOne: 'Mon Parcours', lineTwo: 'Académique' }
      ,
      list: [
        { id: 1, etablissement: 'SIMPLON ACADEMY', periode: 'Juin 2025 – Présent', diplome: 'Formation : Full Stack React & Laravel', description: 'Formation intensive en développement web full stack avec les technologies modernes' },
        { id: 2, etablissement: "UNIVERSITÉ BEN M'SIK", periode: 'Juillet 2022', diplome: 'Licence fondamentale en sciences mathématiques et informatiques', description: 'Parcours académique approfondi en mathématiques et informatique fondamentale' },
        { id: 3, etablissement: 'LYCÉE MOULAY ISMAIL', periode: 'Juillet 2019', diplome: 'Baccalauréat en sciences physiques et chimiques', description: 'Diplôme de fin d\'études secondaires avec spécialisation scientifique' }
      ]
      },
      portfolio: {
        header: { lineOne: 'MON ACTIVITÉ', lineTwo: 'OPEN SOURCE' }
      },
      contact: {
        header: { lineOne: 'Créons Quelque Chose', lineTwo: "d'Extraordinaire" },
        placeholder: { name: 'Votre nom complet', email: 'Votre adresse email', message: 'Parlez-moi de votre projet...' },
        sending: 'Envoi en cours...',
        send: 'Envoyer le message',
        toast: { sentTitle: 'Message Envoyé!', sentText: 'Merci {{name}}, votre message a été envoyé avec succès.', errorTitle: 'Erreur!', errorText: 'Erreur lors de l\'envoi du message.' }
      },
      collaborate: {
        header: { lineOne: 'Travaillons', lineTwo: 'Ensemble' },
        subtitle: 'Collaborons pour transformer vos idées en projets numériques performants et innovants.',
        features: { innovation: 'Innovation', quality: 'Qualité', passion: 'Passion' }
      },
      faq: {
        header: { lineOne: 'Foire aux', lineTwo: 'Questions' },
        items: [
          { question: 'Quels services proposez-vous ?', answer: "Je propose plusieurs services, notamment la conception d'interfaces utilisateur (UI Design), le développement web (Frontend et Backend), la création d'applications web responsive, l'optimisation SEO, et l'intégration de bases de données. Je peux également vous accompagner dans la refonte de sites existants ou le développement de projets from scratch." },
          { question: 'Quelle est votre approche technique ?', answer: "Mon approche consiste à comprendre vos objectifs, analyser vos besoins, concevoir des maquettes et prototypes, puis développer des solutions efficaces en suivant des méthodologies agiles. J'utilise les technologies modernes comme React, Laravel, Node Js , et je m'assure que le code soit maintenable, scalable et bien documenté." },
          { question: 'Comment gérez-vous les délais de projet ?', answer: "J'établis un calendrier clair comprenant des jalons précis et j'utilise des outils comme Trello pour suivre l'avancement. Je pratique le développement itératif avec des livraisons régulières pour vous permettre de suivre l'évolution et d'apporter des ajustements si nécessaire. La communication transparente est au cœur de ma méthode de travail." },
          { question: 'Pouvez-vous collaborer avec une équipe existante ?', answer: "Absolument ! Je m'intègre facilement dans des équipes déjà en place pour renforcer les efforts de conception et de développement, tout en assurant une communication fluide. Je suis habitué à travailler avec Git en équipe, aux revues de code, et aux méthodologies Agile/Scrum." },
          { question: 'Quels outils utilisez-vous ?', answer: "J'utilise des outils tels que Figma, Git, Docker, Postman, VS Code, ainsi que des technologies comme React, Laravel, Node.js et Tailwind CSS pour assurer la qualité et la performance de mes projets. Je maîtrise également les outils de testing (Jest, PHPUnit) et les plateformes de déploiement (Vercel, AWS, DigitalOcean)." }
        ]
      },
      footer: {
        madeBy: 'Intéressé(e) pour en savoir plus ? Contactez-moi par e-mail ou via WhatsApp',
        name: 'NABIL HRIZ',
        buildWith: 'BUILD WITH'
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
