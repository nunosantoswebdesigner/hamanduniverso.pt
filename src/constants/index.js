// Imagens
import { cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, logoSmall, chromecast, disc02, discord, discordBlack, facebook, figma, file02, framer, homeSmile, instagram, notification2, notification3, notification4, notion, photoshop, plusSquare, protopie, raindrop, recording01, recording03, roadmap1, roadmap2, roadmap3, roadmap4, serviceOne, serviceTwo, serviceThree, serviceFour, searchMd, slack, sliders04, telegram, twitter, tiktok, yourlogo, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from "../assets";

// Menu
export const navigation = [ { id: "0", title: "Serviços", url: "#servicos", }, { id: "1", title: "Sobre nós", url: "#sobrenos", }, { id: "2", title: "Testemunhos", url: "#testemunhos", }, { id: "3", title: "Contactos", url: "#contactos", }
];

// Serviços
export const roadmap = [
  {
    id: "0",
    title: "Metodologia Humanoterapeuta",
    text: "Bloco de tratamentos vibracionais que abrange espiritual, mental e emocional, utilizando técnicas como Humanometria e TRD, feitas done.",
    date: "sob consulta",
    status: "online",
    imageUrl: serviceOne,
    colorful: true,
  },
  {
    id: "1",
    title: "Registos Akashicos",
    text: "Memória da alma com lições e bloqueios de vidas passadas, revelando talentos e mensagens dos guias para a evolução espiritual.",
    date: "sob consulta",
    status: "online",
    imageUrl: serviceTwo
  },
  {
    id: "2",
    title: "Consulta Astrológica",
    text: "Estudo dos Astros que revela atributos pessoais, tendências anuais e orientações para evolução em áreas como carreira e relações.",
    date: "sob consulta",
    status: "online",
    imageUrl: serviceThree,
  },
  {
    id: "3",
    title: "Harmonizações",
    text: "Check-up energético que equilibra o bem-estar, essencial para manter o alinhamento energético e emocional do indivíduo.",
    date: "sob consulta",
    status: "",
    imageUrl: serviceFour,
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/notification/catarina-small.png',
    img: cliente1,
    review:'Working with Nuno was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    backgroundImage: './src/assets/notification/catarina-small.png',
    img: cliente2,
    review:
      'Nuno’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    backgroundImage: './src/assets/notification/catarina-small.png',
    img: cliente3,
    review:
      'I can’t say enough good things about Nuno. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    backgroundImage: './src/assets/notification/catarina-small.png',
    img: cliente4,
    review:
      'Nuno was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

//Ana Soares- Muito grata pelo tratamento, pois segui sempre apoiada, e venci os meus ataques de pânico. Desbloqueie emoções e lembranças que nem sabia que existiam mais... E o melhor de tudo, o aprendizado que pratico e me acompanha no dia a dia.
//Anzhelika Ishkova- Desde a harmonização às técnicas d metodologia... É toda uma descoberta de autoconhecimento e expansão. Só posso certamente recomendar… o reencontro comigo mesma!
//Wander Pardini- Iniciei o tratamento humano terapêutico com a Catarina, reticente, pois era muito cético, logo na 1@ sessão despertou me uma curiosidade de saber o que mais iria me abrir a mente. Então entendi o sentido de querer estar iluminado.
//António Graça- Fiz os registos Akashicos com a Soraia, muito na curiosidade… e a curiosidade levou-me a muitas informações e entendimentos verdadeiramente surpreendentes. Foi um virar de chave para a vida! Ainda bem que sou curioso!

export const benefits = [
  {
    id: "0",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: logoSmall,
    name: 'Ana Soares',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente1,
    review:'Muito grata pelo tratamento, pois segui sempre apoiada, e venci os meus ataques de pânico. Desbloqueie emoções e lembranças que nem sabia que existiam mais. E o melhor de tudo, o aprendizado que pratico e me acompanha no dia a dia.',
  },
  {
    id: "1",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: logoSmall,
    light: true,
    name: 'Anzhelika Ishkova',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente2,
    review:'Desde a harmonização às técnicas de metodologia. É toda uma descoberta de autoconhecimento, expansão e reencontro comigo mesma. Recomendo a quem busca um novo olhar sobre a vida pois este processo transformou a minha forma de ver o mundo!',
  },
  {
    id: "2",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: logoSmall,
    name: 'Wander Pardini',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente3,
    review:'Iniciei o tratamento humano terapêutico com a Catarina, reticente, pois era muito cético, logo na 1ª sessão despertou me uma curiosidade de saber o que mais iria me abrir a mente. Então entendi o sentido de querer estar iluminado.',
  },
  {
    id: "3",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: logoSmall,
    light: true,
    name: 'António Graça',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente4,
    review:'Fiz os registos Akashicos com a Soraia, muito na curiosidade… e a curiosidade levou-me a muitas informações e entendimentos verdadeiramente surpreendentes. Foi um virar de chave para a vida! Ainda bem que sou curioso!',
  },
  {
    id: "4",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: logoSmall,
    name: 'Nuno Santos',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente5,
    review:'Quando iniciei as sessões de terapia, estava à procura de algo que fosse mais profundo. Logo nas primeiras consultas, percebi uma leveza inesperada. É como se, aos poucos, camadas fossem saindo e eu pudesse ver com clareza quem realmente sou.',
  },
  {
    id: "5",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: logoSmall,
    name: 'Lourenço Caetano',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente6,
    review:'Sempre fui prático e focado em resultados. Esta experiência de autodescoberta foi surpreendente, abrindo-me portas que nem sabia existirem. Libertei-me de velhos padrões e, acima de tudo, aprendi a confiar em mim mesmo.',
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];


export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const servicesIconsCatarina = [
  facebook,
  instagram,
  disc02,
  chromecast,
  sliders04,
];



export const collabText = "Fruto de duas jornadas transformadoras de autoconhecimento, estes projetos unem-se pelo divino, amor e luz, apoiando a humanidade na autocura e expansão de consciência. Todos os nosso serviços são, baseados no amor, na luz e no sagrado, visam proporcionar uma experiência transformadora para aqueles que buscam compreender-se mais profundamente, superar bloqueios e viver com maior conexão espiritual.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  { id: "0", title: "Icon1", icon: Icon1, width: 40, height: 40 },
  { id: "1", title: "Icon2", icon: Icon2, width: 40, height: 40 },
  { id: "2", title: "Icon3", icon: Icon3, width: 40, height: 40 },
  { id: "3", title: "Icon4", icon: Icon4, width: 40, height: 40 },
  { id: "4", title: "Icon5", icon: Icon5, width: 40, height: 40 },
  { id: "5", title: "Icon6", icon: Icon6, width: 40, height: 40 },
  { id: "6", title: "Icon7", icon: Icon7, width: 40, height: 40 },
  { id: "7", title: "Icon8", icon: Icon8, width: 40, height: 40 },
  
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  // {
  //   id: "1",
  //   title: "Premium",
  //   description: "Advanced AI chatbot, priority support, analytics dashboard",
  //   price: "9.99",
  //   features: [
  //     "An advanced AI chatbot that can understand complex queries",
  //     "An analytics dashboard to track your conversations",
  //     "Priority support to solve issues quickly",
  //   ],
  // },
  // {
  //   id: "2",
  //   title: "Enterprise",
  //   description: "Custom AI chatbot, advanced analytics, dedicated account",
  //   price: null,
  //   features: [
  //     "An AI chatbot that can understand your queries",
  //     "Personalized recommendations based on your preferences",
  //     "Ability to explore the app and its features without any cost",
  //   ],
  // },
];


export const socials = [
  {
    id: "0",
    title: "Intagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/hamanduniverso_catanouk66/",
  },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/catanouk66/",
  },
  {
    id: "2",
    title: "Tiktok",
    iconUrl: tiktok,
    url: "http://tiktok.com/@hamanduniverso/",
  },
  {
    id: "3",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "4",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
];
