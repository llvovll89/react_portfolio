import {
  AiOutlineHome,
  AiOutlineContacts,
  AiFillHtml5,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineAntDesign,

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
    navtext: 'React',
    navicon: <DiReact />,
    navurl: '/react',
  },
  {
    id: 4,
    chapnum: '04',
    navtext: 'vanila_js',
    navicon: <DiJavascript1 />,
    navurl: '/vanilajs',
  },
  {
    id: 5,
    chapnum: '05',
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
    category: '<VanilaJs/>',
    totalLike: '120',
    title: 'Js_portfolio',
    subtitle:
      '전 포트폴리오',
    desc: `
    앞전에 HTML , CSS3 , JS 만으로 만든 포트폴리오 사이트입니다.
  `,
    image: './images/img_JS/js_portfolio.png',
  },
  {
    id: 2,
    category: '<VanilaJs/>',
    totalLike: '333',
    title: 'BookMark',
    subtitle:
      'CRUD 연습을 위해 만들어본 Bookmark',
    desc: `
    javascipt로 CRUD 연습을 위해 만들어 본 BookMARK 입니다. 생성 / 삭제 기능이 되고 localstorage에 get 되기 때문에 저장도 가능합니다. 
  `,
    image: './images/img_JS/bookmark.png',
  },
  {
    id: 3,
    category: '<VanilaJs/> + <WebGame/>',
    totalLike: '520',
    title: 'Insect_Kill Game',
    subtitle:
      '자바스크립트 콜백함수 / 반복문 공부를 위해 제작',
    desc: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur neque enim recusandae soluta magnam facilis sapiente accusamus maxime, sit magni quidem blanditiis maiores, cum ab dignissimos consequatur, architecto beatae.`,
    image: './images/img_JS/JS_insect.png',
  },
  {
    id: 4,
    category: '<VanilaJs/>',
    totalLike: '360',
    title: '타자검정연습',
    subtitle:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel accusantium quos blanditiis!',
    desc: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur neque enim recusandae soluta magnam facilis sapiente accusamus maxime, sit magni quidem blanditiis maiores, cum ab dignissimos consequatur, architecto beatae.`,
    image: './images/img_JS/typing-game.png',
  },
  {
    id: 5,
    category: '<VanilaJs/>',
    totalLike: '280',
    title: 'VanilaJS - 10Project',
    subtitle:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel accusantium quos blanditiis!',
    desc: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur neque enim recusandae soluta magnam facilis sapiente accusamus maxime, sit magni quidem blanditiis maiores, cum ab dignissimos consequatur, architecto beatae.`,
    image: './images/img_JS/10project.png',
  },
  {
    id: 6,
    category: '<VanilaJs/> + <WebGame/>',
    totalLike: '620',
    title: 'HozzleGame',
    subtitle:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel accusantium quos blanditiis!',
    desc: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur neque enim recusandae soluta magnam facilis sapiente accusamus maxime, sit magni quidem blanditiis maiores, cum ab dignissimos consequatur, architecto beatae.`,
    image: './images/img_JS/hozzle-01.png',
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
