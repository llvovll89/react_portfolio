import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
  AiFillHtml5,
  AiOutlineInstagram,
  AiFillGithub,

} from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import {
  DiReact,
  DiCss3,
  DiJavascript1,
  DiMongodb,
  DiNodejsSmall,
} from 'react-icons/di';
import {SiBloglovin} from 'react-icons/si';
import {RxNotionLogo} from 'react-icons/rx';

export const asidenav = [
  {
    id: 1,
    chapnum: '01',
    navtext: 'HOME',
    navicon: <AiOutlineHome />,
    navurl: '/home',
  },
  {
    id: 2,
    chapnum: '02',
    navtext: 'ABOUT',
    navicon: <CiUser />,
    navurl: '/about',
  },
  {
    id: 3,
    chapnum: '03',
    navtext: 'Backend',
    navicon: <AiOutlineContacts />,
    navurl: '/backend',
  },
  {
    id: 4,
    chapnum: '04',
    navtext: 'JS_PRO',
    navicon: <AiOutlineSetting />,
    navurl: '/javascript',
  },
  {
    id: 5,
    chapnum: '05',
    navtext: 'REACT_PRO',
    navicon: <AiOutlineFundProjectionScreen />,
    navurl: '/react',
  },
  {
    id: 6,
    chapnum: '06',
    navtext: 'CONTACT',
    navicon: <AiOutlineContacts />,
    navurl: '/contact',
  },
];

export const mainhome = [
  {
    id: 1,
    name: 'HELLO, MY NAME IS KIM GEON HO..',
    post: "I'M FRONT_END DEVELOPER",
  },
];

export const social = [
  {
    id: 1,
    icon: <AiOutlineInstagram/>,
    text: "인스타",
    url: "https://www.instagram.com/ghgh9405",
  },
  {
    id: 2,
    icon: <AiFillGithub/>,
    text: "깃허브",
    url: "https://github.com/llvovll89",
  },
  {
    id: 3,
    icon: <SiBloglovin/>,
    text: "벨로그",
    url: "https://velog.io/@llvovll89"
  },

]

export const about = [
  {
    id: 1,
    text: '저는 프론트엔드 개발자 입니다.',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi error enim dolor. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi error enim dolor. Incidunt, beatae est! Cumque veritatis rem ad officiis voluptas magni quasi soluta ea, eos similique nulla iste.
      Incidunt, beatae est! Cumque veritatis rem ad officiis voluptas magni quasi soluta ea, eos similique nulla iste..`
  },
];

export const reactProject = [
  {
    id: 1,
    category: 'WEBSITE',
    totalLike: '600',
    title: 'React_MOVIE',
    subtitle:
      'OMDB API를 이용해 React로 만든 react_movieapp',
    desc: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur neque enim recusandae soluta magnam facilis sapiente accusamus maxime, sit magni quidem blanditiis maiores, cum ab dignissimos consequatur, architecto beatae.`,
    image: './images/project-1.png',
  },
  {
    id: 2,
    category: 'APPLICATION',
    totalLike: '433',
    title: 'REACT_RecipeApp',
    subtitle:
      'spoonacular Api 를 이용해 react로 만든 Recipe app',
    desc: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur neque enim recusandae soluta magnam facilis sapiente accusamus maxime, sit magni quidem blanditiis maiores, cum ab dignissimos consequatur, architecto beatae.`,
    image: './images/project-1.png',
  },
  {
    id: 3,
    category: 'APPLICATION',
    totalLike: '210',
    title: 'React_weatherApp',
    subtitle:
      'React fetch Api를 이용한 weather App',
    desc: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur neque enim recusandae soluta magnam facilis sapiente accusamus maxime, sit magni quidem blanditiis maiores, cum ab dignissimos consequatur, architecto beatae.`,
    image: './images/react_weather.jpg',
  },
  {
    id: 4,
    category: 'FIGMA',
    totalLike: '360',
    title: 'Mobile app landing design & Services',
    subtitle:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel accusantium quos blanditiis!',
    desc: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur neque enim recusandae soluta magnam facilis sapiente accusamus maxime, sit magni quidem blanditiis maiores, cum ab dignissimos consequatur, architecto beatae.`,
    image: './images/project-1.png',
  },
  {
    id: 5,
    category: 'WEB DESIGN',
    totalLike: '280',
    title: 'Design for tecnology & services',
    subtitle:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel accusantium quos blanditiis!',
    desc: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur neque enim recusandae soluta magnam facilis sapiente accusamus maxime, sit magni quidem blanditiis maiores, cum ab dignissimos consequatur, architecto beatae.`,
    image: './images/typing-game.png',
  },
  {
    id: 6,
    category: 'WEB DESIGN',
    totalLike: '690',
    title: 'App for tecnology & services',
    subtitle:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel accusantium quos blanditiis!',
    desc: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur neque enim recusandae soluta magnam facilis sapiente accusamus maxime, sit magni quidem blanditiis maiores, cum ab dignissimos consequatur, architecto beatae.`,
    image: './images/insect-game.png',
  },
];

export const backend = [
  {
    id: 1,
    title: 'REACT_CHATAPP',
      desc: 'MERN STACK ONLY FRONT + BACK',
    img: './images/project-1.png',
  },
  {
    id: 2,
    title: 'REACT_??APP',
      desc: 'MERN STACK ONLY FRONT + BACK',
    img: './images/project-1.png',
  },
  {
    id: 3,
    title: 'REACT_BOARD ',
      desc: 'MERN STACK ONLY FRONT + BACK',
    img: './images/insect-game.png',
  },
  {
    id: 4,
    title: 'REACT_BOARD ',
      desc: 'MERN STACK ONLY FRONT + BACK',
    img: './images/insect-game.png',
  },
  {
    id: 5,
    title: 'REACT_BOARD ',
      desc: 'MERN STACK ONLY FRONT + BACK',
    img: './images/insect-game.png',
  },
];

export const frontSkill = [
  {
    id: 1,
    icons: <AiFillHtml5 />,
    text: 'HTML',
  },
  {
    id: 2,
    icons: <DiCss3 />,
    text: 'CSS3',
  },
  {
    id: 3,
    icons: <DiJavascript1 />,
    text: 'JAVASCRIPT',
  },
  {
    id: 4,
    icons: <DiReact />,
    text: 'REACT_JS',
  },
];

export const backSkill = [
  {
    id: 1,
    icons: <DiNodejsSmall />,
    text: 'NODE.JS',
  },
  {
    id: 2,
    icons: <DiMongodb />,
    text: 'MONGO_DB',
  },
];
