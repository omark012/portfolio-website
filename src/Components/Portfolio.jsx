import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PiArrowUpRightBold } from 'react-icons/pi';
import cloud from '../images/cloud.jpg';
import weather from '../images/weather.png';
import travel from '../images/travel.png';
import edtech from '../images/edtech.png';


const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      img: cloud,
      title: 'cloud hosting website design',
      description: 'Website is adaptable to all devices, with UI components and animated interactions.',
      link: 'https://omark012.github.io/cloudhosting-react-website/'
    },
    {
      id: 2,
      img: edtech,
      title: 'Edtech website design',
      description: ' A platform to discover the latest and useful EdTech & Education focused courses, trends & insights, research, reports, product reviews.When referred to with its abbreviation, edtech, it often refers to the industry of companies that create educational technology.',
      link: 'https://omark012.github.io/edtech-react-website/',
    },
    {
      id: 3,
      img: weather,
      title: 'Weather app',
      description: 'It is a React based Weather App which provide weather forecast for cities. Weather App is a useful application for everyone, designed simple, easy to use.',
      link: 'https://cloudpoint.netlify.app/',
    },
    {
      id: 4,
      img: travel,
      title: 'Travel website landing page',
      description: 'It is a landing page of travel website.',
      link: 'https://omark012.github.io/Travel-page/'
    },
  ]


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
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img src={item.img} alt="there should be a pic" />
                        <p className="portfolio-img-description">Visit 🤚 </p>
                      </a>
                    </div>
                    <div className="portfolio-data">
                      <h3 className="portfolio-title">{item.title}</h3>
                      <p className="portfolio-description">{item.description}</p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn portfolio-btn flex">
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
  )
}

export default Portfolio


