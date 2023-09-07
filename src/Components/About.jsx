import React from 'react';
import developer from '../images/developer.gif';
import ScrollAnimation from 'react-animate-on-scroll';


const About = () => {
    return (
        <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            animateOnce={true}
            delay={100}
        // duration={5}
        >
            <section className="about" id="about">
                <div className="container">
                    <h1 className="about-heading heading">About Me</h1>
                    <div className="about-container grid">
                        <div className="about-image">
                            <img src={developer} alt="" />
                        </div>
                        <div className="about-text">
                            <p> Hello! My name is Omar Khan, a frontend developer and an aspiring full-stack (MERN) developer.</p>
                            <br />
                            <p>I like to code things for web, and enjoy bringing ideas to life in the browser. I'm always open to adapt to work with team and work on new frontend skills and technology.</p>
                            <br />
                            <p>Learning new things always excite me, and I am constantly seeking new challenges to expand my knowledge and skills</p>
                        </div>
                    </div>
                </div>
            </section>

        </ScrollAnimation>
    )
}

export default About