import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PiArrowUpRightBold } from "react-icons/pi";
import cloud from "../images/cloud.png";
import weather from "../images/weather.png";
import quizzical from "../images/quizzical.png";
import slide from "../images/slide.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      img: weather,
      title: "Weather App",
      description:
        "An API-based React weather application built with Vite and Tailwind CSS, providing real-time weather information and additional features.",
      link: "https://skyways.netlify.app/",
    },
    {
      id: 2,
      img: cloud,
      title: "Cloud Hosting Website UI",
      description:
        "A front-end interface for a cloud hosting platform using React.js and React Router for smooth navigation and animated interactions.",
      link: "https://omark012.github.io/cloudhosting-react-website/",
    },
    {
      id: 3,
      img: slide,
      title: "Slide - Presentation React Website",
      description:
        "A responsive presentation website developed using React.js, Vite, and Tailwind CSS, ensuring an engaging user experience across devices.",
      link: "https://react-presentations.netlify.app",
    },
    {
      id: 4,
      img: quizzical,
      title: "Quizzical - Quiz React App",
      description:
        "Developed a responsive quiz application using React.js , featuring interactive quizzes with dynamic content rendering and real-timefeedback to deliver an engaging user experience. ",
      link: "https://omark012.github.io/quiz-react-app/ ",
    },
  ];

  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
      animateOnce={true}
      delay={100}
    >
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h1 className="portfolio-heading heading">Portfolio</h1>
          <div className="portfolio-container">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {portfolios.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="portfolio-card grid">
                    <div className="portfolio-img-wrap">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={item.img} alt="there should be a pic" />
                        <p className="portfolio-img-description">Visit 🤚 </p>
                      </a>
                    </div>
                    <div className="portfolio-data">
                      <h3 className="portfolio-title">{item.title}</h3>
                      <p className="portfolio-description">
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn portfolio-btn flex"
                      >
                        <p>Live Demo</p>
                        <PiArrowUpRightBold />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Portfolio;
