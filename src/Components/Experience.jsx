import React from "react";
import work from "../images/work.png";
import ScrollAnimation from "react-animate-on-scroll";

const Experience = () => {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
      animateOnce={true}
      delay={100}
    >
      <section className="experience" id="experience">
        <div className="container">
          <h1 className="heading experience-heading">Work Experience</h1>
          <p className="experience-para">What I have done so far</p>

          <div className="experience-card grid">
            <div className="experience-text">
              <h3 className="job-title">React.js Developer</h3>
              <p className="job-location">Real Dream Infratech , India</p>

              <ul className="job-scope">
                <li className="scope-item">
                  Developing and maintaining web applications using React.js and
                  other related technologies.
                </li>
                <li className="scope-item">
                  Collaborating with cross-functional teams including designers,
                  product managers, and other developers to create high-quality
                  products.
                </li>
                <li className="scope-item">
                  Contributed in the development of the sell your property
                  module.Built the UI for it and integrated it with the firebase
                  APIs.
                </li>
                <li className="scope-item">
                  Implementing responsive design and ensuring cross-browser
                  compatibility.
                </li>
                <li className="scope-item">
                  Developed pixel-perfect responsive web applications achieving
                  daily traffic of 1000-2000 users.
                </li>
              </ul>
            </div>

            <div className="experience-img-wrap">
              <a
                href="https://realdreaminfratech.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={work} alt="Project pic here" />
                <p className="experience-img-description">Visit 🤚 </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Experience;
