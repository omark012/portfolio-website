import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profile from '../images/profile.png';
import testFile from '../data/baleno.pdf';


const Showcase = () => {

  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Traveler'],
    loop: 0,
  })


  return (
    <section className="showcase container">
      <div className="showcase-container grid">

        <div className="showcase-text">
          <p className="intro">Hello, I am <span className="name">Omar Khan</span></p>
          <div className="post">{text}<Cursor cursorColor='red' /></div>
          <div className="description">I'm a front-end developer located in India. I am a skilled and passionate web designer with experience in creating visually appealing and user friendly website.</div>
          {/* <p>I love to create beautiful and smooth websites with great user experience.</p> */}
          <a href={testFile} download="Resume">
            <button className="btn btn-resume"><span>Resume</span></button>
          </a>

        </div>
        <div className="showcase-image">
          <img src={profile} alt="there is supposed to be a pic" />
        </div>
      </div>
    </section>
  )
}

export default Showcase