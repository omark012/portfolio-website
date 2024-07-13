import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from "../images/profile.png";
import resume from "../data/resume.pdf";

const Showcase = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Traveler"],
    loop: 0,
  });

  return (
    <section className="showcase container">
      <div className="showcase-container grid">
        <div className="showcase-text">
          <p className="intro">
            Hello, I am <span className="name">Omar Khan</span>
          </p>
          <div className="post">
            {text}
            <Cursor cursorColor="red" />
          </div>
          <div className="description">
            I am a dedicated front-end developer based in India, specializing in
            crafting visually captivating and user-friendly websites.
          </div>

          <a href={resume} download="Resume">
            <button className="btn btn-resume">
              <span>Resume</span>
            </button>
          </a>
        </div>
        <div className="showcase-image">
          <img src={profile} alt="there is supposed to be a pic" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
