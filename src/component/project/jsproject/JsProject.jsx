import React from 'react';
import { ProjectCard } from './ProjectCard';
import {
  AiFillApple,
  AiFillAliwangwang,
  AiFillCodepenCircle,
  AiFillBug,
} from 'react-icons/ai';
import './Project.css';

// imt url
import insectJS from '../../../assets/images/jsproject/insect-game.png';
import hojjelJs from '../../../assets/images/jsproject/hozzle-01.png';
import loginTodo from '../../../assets/images/jsproject/login-todo.png';
import bookmarkJS from '../../../assets/images/jsproject/bookmark.png';
import aramJS from '../../../assets/images/jsproject/aram.png';
import project10 from '../../../assets/images/jsproject/10project.png';

export const JsProject = () => {
  return (
    <>
      <section className="project section hidden">
        <div className="project-container container">
          <div className="row">
            <div
              className="section-title pad15"
              data-aos="flip-left"
              data-aos-duration="800"
            >
              <h2>JS-PROJECT</h2>
            </div>
          </div>
          <div className="row pro_row">
            <ProjectCard
              title="TYPING_GAME"
              imgurl={insectJS}
              icons={<AiFillApple />}
              demo="https://llvovll89.github.io/typing-Game/"
              git="https://github.com/llvovll89/typing-Game"
              subtitle="< Toy_Project >"
              desc="ForEach, for , 반복문 공부를 위해 Vanilajs로 만든 앱"
            />
            <ProjectCard
              title="Login_todo"
              imgurl={loginTodo}
              icons={<AiFillAliwangwang />}
              demo="https://llvovll89.github.io/login-TodoApp/"
              git="https://github.com/llvovll89/login-TodoApp"
              subtitle="< Toy_Project >"
              desc="ForEach, for , 반복문 공부를 위해 Vanilajs로 만든 앱"
            />
            <ProjectCard
              title="Hozzle_GAME"
              subtitle="< Toy_Project >"
              desc="ForEach, for , 반복문 공부를 위해 Vanilajs로 만든 앱"
              imgurl={hojjelJs}
              icons={<AiFillCodepenCircle />}
              demo="https://llvovll89.github.io/hozzleGame/"
              git="https://github.com/llvovll89/hozzleGame"
            />
            <ProjectCard
              title="local_BOOKMARK"
              subtitle="< Toy_Project >"
              desc="ForEach, for , 반복문 공부를 위해 Vanilajs로 만든 앱"
              imgurl={bookmarkJS}
              icons={<AiFillBug />}
              demo="https://llvovll89.github.io/js-bookmark/#"
              git="https://github.com/llvovll89/js-bookmark"
            />
            <ProjectCard
              title="ARAM_JS"
              subtitle="< Toy_Project >"
              desc="ForEach, for , 반복문 공부를 위해 Vanilajs로 만든 앱"
              imgurl={aramJS}
              icons={<AiFillBug />}
              demo="https://llvovll89.github.io/js-alram/"
              git="https://github.com/llvovll89/js-alram"
            />
            <ProjectCard
              title="10project_js"
              subtitle="< Toy_Project >"
              desc="ForEach, for , 반복문 공부를 위해 Vanilajs로 만든 앱"
              imgurl={project10}
              icons={<AiFillBug />}
              git="https://github.com/llvovll89/js-10project"
            />
          </div>
        </div>
      </section>
    </>
  );
};
