import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineProject,
} from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { SiBloglovin } from 'react-icons/si';

export const navItem = [
  {
    id: 1,
    chapnum: '01',
    navtext: 'HOME',
    navicon: <AiOutlineHome />,
    navurl: '/',
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
    navtext: 'PROJECT',
    navicon: <AiOutlineProject />,
    navurl: '/project',
  },
  {
    id: 4,
    chapnum: '04',
    navtext: 'CONTACT',
    navicon: <AiOutlineContacts />,
    navurl: '/contact',
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
