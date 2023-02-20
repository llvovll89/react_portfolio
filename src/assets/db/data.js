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
    gitLink: 'https://github.com/llvovll89/new_paintapp',
  },
  {
    id: 3,
    category: '<VanilaJs/> + <WebGame/>',
    totalLike: '520',
    title: 'Insect_Kill Game',
    subtitle: '< HTML5 / CSS3 / Javascript />',
    desc: 'button클릭하여 게임 실행 시 곤충 이미지에 랜덤 값 (+ setinterval)을 부여하여 화면에 곤충 표시 , vanilaJS를 이용해 게임 관심이 생겨 제작 YOUTUBE를 보며 영감받아 만든 TOY프로젝트 입니다.',
    image: './images/img_JS/JS_insect.png',
    codeLink: 'https://llvovll89.github.io/js-insect-catchgame/',
    gitLink: 'https://github.com/llvovll89/js-insect-catchgame',
  },
  {
    id: 4,
    category: '<VanilaJs/> ',
    totalLike: '350',
    title: 'Translate 번역기',
    subtitle: '< HTML5 / CSS3 / Javascript />',
    desc: `각 국가 언어를 countries.js에 오브젝트 형식으로 담고 반복문 , 조건문 , fetchAPI(translated api)이용
          좌측 <textarea> 영역에 영/각 국가 언어에 맞추어 타이핑 하고 오른쪽 <textarea> 영역에 지정한 언어로 변환되는 App`,
    image: './images/img_JS/js_translate.png',
    codeLink: 'https://llvovll89.github.io/translatorApp/',
    gitLink: 'https://github.com/llvovll89/translatorApp',
  },
  {
    id: 5,
    category: '<VanilaJs/> / <Muiscic />',
    totalLike: '380',
    title: 'musicapp',
    subtitle: '< HTML5 / CSS3 / Javascript />',
    desc: `
    자바스크립트 이벤트 핸들링 및 버블링 / dom 처리 방식 / 조건문 연습을 위해 제작, Youtube의 어느 유튜버의 작업을 보며 영감을 받아 코딩을 구조화 하고 만듬 / 만들면서 CSS의 소중함을 느낌`,
    image: './images/img_JS/js_musicapp.png',
    codeLink: 'https://llvovll89.github.io/musicApp/',
    gitLink: 'https://github.com/llvovll89/musicApp',
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
    text: 'NODE.JS ',
  },
  {
    id: 2,
    icons: <DiMongodb />,
    text: 'MONGO_DB',
  },
];
