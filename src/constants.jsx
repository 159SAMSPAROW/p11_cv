import { IoLogoHtml5 } from 'react-icons/io'
import {
  SiCss3,
  SiReact,
  SiJavascript,
  SiPostman,
  SiRedux,
  SiLighthouse,
  SiTailwindcss,
  SiStyledcomponents,
} from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'
import { BsGithub } from 'react-icons/bs'

export const skill = [
  {
    id: '0',
    title: 'P2 Booki',
    skill0: 'Intégrer du contenu conformément à une maquette',
    skill1: 'Implémenter une interface responsive',
  },
  {
    id: '1',
    title: 'P3 Oh my Food',
    skill0: 'Mettre en place une structure de navigation pour un site web',
    skill1: "Assurer la cohérence graphique d'un site web",
    skill2:
      'Utiliser un système de gestion de versions pour le suivi du projet et son hébergement => GITHUB',
    skill3: 'Mettre en œuvre des effets CSS graphiques avancés',
    skill4: 'Utilisation de Sass',
  },
  {
    id: '2',
    title: 'P4 La Panthère ( SEO )',
    skill0: "Optimiser le référencement d'un site web",
  },
  {
    id: '3',
    title: 'P5 Kanap',
    skill0: 'Gérer des événements JavaScript',
    skill1: 'Interagir avec un web service avec JavaScript',
    skill2: 'Valider des données issues de sources externes',
  },
  {
    id: '4',
    title: 'P6 Piiquante ( BACK END )',
    skill0: 'Mettre en œuvre des opérations CRUD de manière sécurisée',
    skill1: 'Stocker des données de manière sécurisée',
    skill2:
      'Implémenter un modèle logique de données conformément à la réglementation',
  },
  {
    id: '5',
    title: 'P7 Groupomania ( FULL STACK )',
    skill0: 'Authentifier un utilisateur et maintenir sa session',
    skill1:
      'Implémenter un stockage de données sécurisé en utilisant une base de données',
    skill2:
      'Développer l’interface d’un site web grâce à un framework front-end',
  },
]

export const personalSkill = [
  {
    id: '0',
    title: 'P8 What is GPT3 ?',
    skill0: 'Intégrer du contenu conformément à une maquette Figma',
    skill1: 'Refactorer le CSS avec Sass',
    skill2: "Appronfondissement de l' utilisation des composants React",
  },
  {
    id: '1',
    title: 'P9 Gericht-restaurant',
    skill0: 'Intégrer du contenu conformément à une maquette Figma',
    skill1: 'Refactorer le CSS avec Sass',
    skill2: "Appronfondissement de l' utilisation des composants React",
  },
  {
    id: '2',
    title: 'P10 Hoobank',
    skill0: 'Utilisation de vite + React',
    skill1: 'Utilisation de Taiwind css',
  },
  {
    id: '3',
    title: 'P11 Ecommerce',
    skill0: "Appronfondissement de l'utilisation de Redux",
    skill1: "Utilisation de l' api stripe (Payments en ligne)",
    skill2: 'Utilisation de strapi pour communiquer avec BDD Mysql',
  },
]
export const stack = [
  { title: 'HTML5', icon: <IoLogoHtml5 /> },
  { title: 'CSS3', icon: <SiCss3 /> },
  { title: 'JavaScript', icon: <SiJavascript /> },
]
export const framework = [
  { title: 'REACT', icon: <SiReact /> },
  { title: 'Redux', icon: <SiRedux /> },
  { title: 'Taiwind css', icon: <SiTailwindcss /> },
  { title: 'Styled components', icon: <SiStyledcomponents /> },
]
export const devTools = [
  { title: 'Node.js', icon: <DiNodejs /> },
  { title: 'Github', icon: <BsGithub /> },
  { title: 'Postman', icon: <SiPostman /> },
  { title: 'Lighthouse', icon: <SiLighthouse /> },
]
