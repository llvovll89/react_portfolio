// icons
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact, DiFirebase } from 'react-icons/di';
import {BsFillBootstrapFill } from 'react-icons/bs'


export const dataNew = [
  {
    id: 1,
    text: '< 01 />',
    title: 'React_Portflio',
    icons: [<AiFillHtml5 /> , <DiCss3 /> , <DiJavascript1 /> , <DiReact />],
    desc: `앞전 포트폴리오를 리뉴얼 & React 공부를 위해 React로 제작한 포트폴리오 사이트 입니다.`,
    imgUrl: './images/react_img/react_pofol.png',
    link: 'https://llvovll89.github.io/react_portfolio/',
    github: 'https://github.com/llvovll89/react_portfolio',
  },
  {
    id: 2,
    text: '< 02 />',
    title: 'DiaryApp',
    icons: [<AiFillHtml5 /> , <DiCss3 /> , <DiJavascript1 /> , <DiReact />] ,
    desc: `추가하기 버튼을 클릭하면 Main(왼쪽 section)에 빈 노트 활성화 오른쪽 sidebar에서 수정하기 버튼 클릭하면 다이어리를 적을 수 있는 textarea / input 화면이 나옵니다.`,
    imgUrl: './images/react_img/react_diaryapp.png',
    link: 'https://llvovll89.github.io/diaryapp/',
    github: 'https://github.com/llvovll89/diaryapp',
  },
  {
    id: 3,
    text: '< 03 />',
    title: 'BMI 측정 사이트',
    icons: [<AiFillHtml5 /> , <DiCss3 /> , <DiJavascript1 /> , <DiReact />],
    desc: `최근에 다이어트 관심을 가지게 되다 , 우연히 구글링을 통해 BMI를 알게되어 직접 제작 해보았습니다. `,
    imgUrl: './images/react_img/react_bmi.png',
    link: 'https://llvovll89.github.io/reactapp-bmi/',
    github: 'https://github.com/llvovll89/reactapp-bmi',
  },
  {
    id: 4,
    text: '< 04 />',
    title: 'Auth_Login',
    icons: [<AiFillHtml5 /> , <DiCss3 /> , <DiJavascript1 /> , <DiReact /> , <DiFirebase /> , <BsFillBootstrapFill /> ],
    desc: `Firebase 와 React를 이용하여 제작한 로그인 Page / firebase에서 google 계정 + 사용자 email / password 를 이용하여 로그인가능`,
    imgUrl: './images/react_img/react_login.png',
    link: 'https://llvovll89.github.io/auth_login/',
    github: 'https://github.com/llvovll89/auth_login',
  },
  {
    id: 5,
    text: '< 05 />',
    title: 'Movie_App',
    icons: [<AiFillHtml5 /> , <DiCss3 /> , <DiJavascript1 /> , <DiReact />],
    desc: `API 를 받아와 프로젝트 구축을 위한 연습 중 평소 영화보는 것을 좋아하여 TMDB MoiveAPI를 fetchAPI로 Get하여 만들어 본 영화 사이트 입니다.
    시간이 지나며 계속 업데이트 할 에정입니다.`,
    imgUrl: './images/react_img/react_movie.png',
    link: 'https://llvovll89.github.io/react-movie/',
    github: 'https://github.com/llvovll89/react-movie',
  },
];
