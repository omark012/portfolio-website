import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import bootstrap from "../images/bootstrap.png";
import github from "../images/github.png";
import tailwind from "../images/tailwind.png";
import mongo from "../images/mongo.png";
import redux from "../images/redux.png";
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      color: "#f97316",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      color: "#3b82f6",
    },
    {
      id: 3,
      src: javascript,
      title: "javaScript",
      color: "#eab308",
    },
    {
      id: 4,
      src: react,
      title: "React",
      color: "#2563eb",
    },
    {
      id: 5,
      src: bootstrap,
      title: "Bootstrap",
      color: "#a855f7",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      color: "#63B4D0",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      color: "#9333ea",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      color: "#6b7280",
    },
    {
      id: 8,
      src: mongo,
      title: "Mongo DB",
      color: "#69A34A",
    },
  ];

  return (
    <ScrollAnimation
      animateIn="zoomIn"
      animateOut="fadeOut"
      animateOnce={true}
      // delay={100}
      // duration={5}
    >
      <section className="skill" id="skill">
        <div className="container">
          <h1 className="skill-heading heading">Skills</h1>
          <p className="skill-para">
            These are the technologies I've worked with
          </p>

          <div className="skill-list">
            {techs.map((tech) => (
              <div
                key={tech.id}
                className="skill-item"
                style={{
                  boxShadow: `0 4px 6px -1px ${tech.color}, 0 2px 4px -2px ${tech.color}`,
                  color: `${tech.color}`,
                }}
              >
                <img src={tech.src} alt={tech.title} />
                <p>{tech.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Skills;
