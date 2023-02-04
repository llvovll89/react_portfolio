import {
  AiOutlineHome,
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
import { SiBloglovin } from 'react-icons/si';

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
    name: '저의 포트폴리오를 방문해 주셔서',
    post: '진심으로 감사드립니다.',
  },
];

export const social = [
  {
    id: 1,
    icon: <AiOutlineInstagram />,
    text: '인스타',
    url: 'https://www.instagram.com/ghgh9405',
  },
  {
    id: 2,
    icon: <AiFillGithub />,
    text: '깃허브',
    url: 'https://github.com/llvovll89',
  },
  {
    id: 3,
    icon: <SiBloglovin />,
    text: '벨로그',
    url: 'https://velog.io/@llvovll89',
  },
];

export const about = [
  {
    id: 1,
    text: '저는 프론트엔드 개발자 입니다.',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi error enim dolor. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi error enim dolor. Incidunt, beatae est! Cumque veritatis rem ad officiis voluptas magni quasi soluta ea, eos similique nulla iste.
      Incidunt, beatae est! Cumque veritatis rem ad officiis voluptas magni quasi soluta ea, eos similique nulla iste..`,
  },
];

export const vanilaProject = [
  {
    id: 1,
    category: '<VanilaJs/>',
    totalLike: '120',
    title: 'Js_portfolio',
    subtitle: '< HTML5 / CSS3 / Javascript />',
    desc: ` 리액트 포트폴리오 제작전에 만들어 사용하던 < HTML , CSS3 , JS > 만으로 만든 포트폴리오 사이트입니다.
  `,
    codeLink: 'https://llvovll89.github.io/Kim-geon-ho/',
    gitLink: 'https://github.com/llvovll89/Kim-geon-ho',
    image: './images/img_JS/js_portfolio.png',
  },
  {
    id: 2,
    category: '<VanilaJs/>',
    totalLike: '192',
    title: 'PaintApp',
    subtitle: '< HTML5 / CSS3 / Javascript />',
    desc: `
    HTML canvas 와 JS로 canvas 동작을 연습하기 위해 제작, 복잡한 코드 구조와 분배를 공부하기 위해 Mozlia , mdn 등 사이트를 뒤져가며 만들어 보았습니다.
  `,
    image: './images/img_JS/js_drawingapp.png',
    codeLink: 'https://llvovll89.github.io/new_paintapp/',
    gitLink: "https://github.com/llvovll89/new_paintapp",
  },
  {
    id: 3,
    category: '<VanilaJs/> + <WebGame/>',
    totalLike: '520',
    title: 'Insect_Kill Game',
    subtitle: '< HTML5 / CSS3 / Javascript />',
    desc: '곤충 이미지에 랜덤 값(+ 랜덤시간)을 부여하여 화면에 곤충 표시, vanilaJS를 이용해 게임 관심이 생겨 제작 YOUTUBE를 보며 영감받아 만든 TOY프로젝트 입니다.',
    image: './images/img_JS/JS_insect.png',
    codeLink: 'https://llvovll89.github.io/js-insect-catchgame/',
    gitLink: 'https://github.com/llvovll89/js-insect-catchgame',
  },
  {
    id: 4,
    category: '<VanilaJs/>',
    totalLike: '280',
    title: 'VanilaJS - 10Project',
    subtitle: '< HTML5 / CSS3 / Javascript />',
    desc: `
    Vanila 자바스크립트를 공부하기 위해 10가지 작은 프로젝트를 진행하여 한 폴더에 담아둔 파일입니다.`,
    image: './images/img_JS/10project.png',
    codeLink: '',
    gitLink: 'https://github.com/llvovll89/js-10project',
  },
  {
    id: 5,
    category: '<VanilaJs/> + <WebGame/>',
    totalLike: '620',
    title: 'HozzleGame',
    subtitle: '< HTML5 / CSS3 / Javascript />',
    desc: `
          카드 맞추기 게임, 게임시작시 화면에 사진을 띄우고 3초의 시간 후 랜덤으로 뒤죽박죽 섞어서 원본 사진과 같게 만들어야 돼는 게임입니다.`,
    image: './images/img_JS/hozzle-01.png',
    codeLink: "https://llvovll89.github.io/hozzleGame/",
    gitLink: "https://github.com/llvovll89/hozzleGame",
  },
  // {
  //   id: 2,
  //   category: '<VanilaJs/>',
  //   totalLike: '333',
  //   title: 'BookMark',
  //   subtitle: '< HTML5 / CSS3 / Javascript />',
  //   desc: `
  //   javascipt로 CRUD 연습을 위해 만들어 본 BookMARK 입니다. 생성 / 삭제 기능이 되고 localstorage를 이용하여 저장 기능을 구현하였습니다. 
  // `,
  //   image: './images/img_JS/bookmark.png',
  //   codeLink: 'https://llvovll89.github.io/js-bookmark/',
  //   gitLink: "https://github.com/llvovll89/js-bookmark",
  // },
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
    text: 'NODE.JS / express',
  },
  {
    id: 2,
    icons: <DiMongodb />,
    text: 'MONGO_DB',
  },
];
