import css from "../../assets/icons/css.svg";
import html from "../../assets/icons/html.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import next from "../../assets/icons/nextjs.svg";
import ts from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/node-js.svg";
import mongoDB from "../../assets/icons/mongodb.svg";

// import { css } from "../../assets/icons/css.svg";

import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <h2>
        <div className="square">
          <div className="square-intern"></div>
        </div>
        Skills
      </h2>
      <div id="type-skills">
        <div className="skill">
          <span className="name">HTML 5</span>
          <img src={html} alt="html 5 icon" />
        </div>
        <div className="skill">
          <span className="name">CSS 3</span>
          <img src={css} alt="css 3 icon" />
        </div>
        <div className="skill">
          <span className="name">Javascript</span>
          <img src={js} alt="javascript icon" />
        </div>
        <div className="skill">
          <span className="name">React</span>
          <img src={react} alt="react icon" />
        </div>
        <div className="skill">
          <span className="name">NextJS</span>
          <img src={next} alt="quasar framework icon" />
        </div>
        <div className="skill">
          <span className="name">TypeScript</span>
          <img src={ts} alt="lua lang icon" />
        </div>
        <div className="skill">
          <span className="name">NodeJS</span>
          <img src={node} alt="Postgresql icon" />
        </div>
        <div className="skill">
          <span className="name">MongoDB</span>
          <img src={mongoDB} alt="icon mongodb" />
        </div>
      </div>
    </section>
  );
}
