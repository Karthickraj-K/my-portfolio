import React, { useEffect, useState } from 'react'
import Html from '../Assets/images/html.svg'
import Css from '../Assets/images/css.svg'
import Bootstrap from '../Assets/images/bootstrap.svg'
import Js from '../Assets/images/js.svg'
import ReactJs from '../Assets/images/react.svg'
import Redux from '../Assets/images/redux.svg'
import GatsBy from '../Assets/images/gatsby.png'
import About from '../Assets/images/about-1.png'
import Msdcars from '../Assets/images/msdcars.png'
import LittleRoses from '../Assets/images/littleroses.png'
import QadsFranchise from '../Assets/images/qadsfranchise.png'
import { Link, useNavigate } from 'react-router'
import Aos from 'aos'
import FloatingBackground from './Animation/FloatingBackground'


const Home = () => {

  const navigate = useNavigate()

  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [className, setClassName] = useState('');

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    setPos({ x, y });
    setClassName(e.target.parentElement.className)
  };

  const experience = [
    {
      company: "Qads Digital Marketing Pvt. Ltd",
      role: "Software Developer",
      period: "2025 - Currently Working Here",
      icon: "<i className='bx  bx-caret-right'></i> ",
      desc: [
        "Worked with backend teams for smooth integration.",
        "Improved UI performance and loading speed.",
        "Created reusable UI components and design systems.",
        "Integrated REST APIs with optimized workflows.",
        "Participated in sprint planning and deployments."
      ]
    },
    {
      company: "Monter Smart Drive Pvt. Ltd",
      role: "Software Developer",
      period: "2024 - 2025",
      icon: "<i className='bx  bx-caret-right'></i> ",
      desc: [
        "Developed scalable applications using React & Gatsby JS.",
        "Built responsive UI for mobile & desktop.",
        "Developed in React.js and modern JS frameworks.",
        "Reduced load time with optimization techniques.",
        "Contributed to documentation & reviews."
      ]
    },
    {
      company: "Monter Smart Drive Pvt. Ltd",
      role: "Junior Developer",
      period: "2022 - 2024",
      icon: "<i className='bx  bx-caret-right'></i>",
      desc: [
        "Created core UI modules using React & Bootstrap.",
        "Improved website performance & SEO.",
        "Fixed UI bugs and improved consistency.",
        "Enhanced load speed using caching.",
        "Gained hands-on experience with Git & debugging."
      ]
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <React.Fragment>
      <section className='banner'>
        <FloatingBackground />
        <div className='container'>
          <div className='text-center banner-text'>
            <h1 className='animate__zoomInDown animate__animated'>Hello... &#128075; I'm Karthickraj.</h1>
            <h2 className='animate__zoomInUp animate__animated'>Frontend Developer. &#128515;</h2>
          </div>
          <ul className='tech-logos animate__fadeInUp animate__animated ps-0'>
            <li className='html' onMouseMove={handleMouseMove} onMouseOut={() => { setPos({ x: 0, y: 0 }); setClassName('') }} style={className === 'html' ? { transform: `translateX(${pos.x * .5}px) translateY(${pos.y * .5}px)` } : {}}>
              <img src={Html} alt='html' />
            </li>
            <li className='css' onMouseMove={handleMouseMove} onMouseOut={() => { setPos({ x: 0, y: 0 }); setClassName('') }} style={className === 'css' ? { transform: `translateX(${pos.x * .5}px) translateY(${pos.y * .5}px)` } : {}}>
              <img src={Css} alt='css' />
            </li>
            <li className='bootstrap' onMouseMove={handleMouseMove} onMouseOut={() => { setPos({ x: 0, y: 0 }); setClassName('') }} style={className === 'bootstrap' ? { transform: `translateX(${pos.x * .5}px) translateY(${pos.y * .5}px)` } : {}}>
              <img src={Bootstrap} alt='bootstrap' />
            </li>
            <li className='js' onMouseMove={handleMouseMove} onMouseOut={() => { setPos({ x: 0, y: 0 }); setClassName('') }} style={className === 'js' ? { transform: `translateX(${pos.x * .5}px) translateY(${pos.y * .5}px)` } : {}}>
              <img src={Js} alt='javascript' />
            </li>
            <li className='react' onMouseMove={handleMouseMove} onMouseOut={() => { setPos({ x: 0, y: 0 }); setClassName('') }} style={className === 'react' ? { transform: `translateX(${pos.x * .5}px) translateY(${pos.y * .5}px)` } : {}}>
              <img src={ReactJs} alt='react js' />
            </li>
            <li className='redux' onMouseMove={handleMouseMove} onMouseOut={() => { setPos({ x: 0, y: 0 }); setClassName('') }} style={className === 'redux' ? { transform: `translateX(${pos.x * .5}px) translateY(${pos.y * .5}px)` } : {}}>
              <img src={Redux} alt='redux js' />
            </li>
            <li className='gatsby' onMouseMove={handleMouseMove} onMouseOut={() => { setPos({ x: 0, y: 0 }); setClassName('') }} style={className === 'gatsby' ? { transform: `translateX(${pos.x * .5}px) translateY(${pos.y * .5}px)` } : {}}>
              <img src={GatsBy} alt='gatsby js' />
            </li>
          </ul>
          <div className='d-flex justify-content-center gap-4 align-items-center flex-wrap'>
            <a href='tel:8428471708' className='contact-me-btn slider-btn animate__backInLeft animate__animated text-center'>Contact Me</a>
            <a href={process.env.PUBLIC_URL + "/karthickraj_resume.pdf"} download="karthickraj_resume.pdf" className="download-cv-btn slider-btn  animate__backInRight animate__animated text-center"> Download CV</a>
          </div>
        </div>
      </section>
      <section className='about pt-70'>
        <div className='container'>
          <div className='row align-items-center'>
            <h3 className='section-title mb-4'>About Me</h3>
            <div className='col-xs-12 col-md-7'>
              <p data-aos="fade-up"> I'm a passionate <b>Frontend Developer</b> who loves turning ideas into clean, responsive, and user-friendly interfaces. I specialize in building modern websites, dashboards, and admin panels with a strong focus on design, performance, and smooth user experience. </p>
              <p data-aos="fade-up"> I have solid experience working with <b>HTML, CSS,</b> and advanced layout techniques including <b>Flexbox, Grid, and even classic float-based layouts</b>. I enjoy converting any UI into pixel-perfect <b>responsive designs</b>, and I frequently use Bootstrap to deliver consistent and professional results. </p>
              <p data-aos="fade-up"> On the JavaScript ecosystem, I work confidently with modern frameworks like <b>React JS</b>, manage application state with <b>Redux</b>, and build fast, <b>SEO-friendly static and semi dynamic sites using Gatsby JS</b>. I focus on creating smooth interactions, <b>reusable components</b>, and clean architecture across all my projects. </p>
              <p data-aos="fade-up">  Whether it's a sleek landing page or a complex admin panel, I always aim for quality, maintainability, and performance. I'm constantly learning and improving, and I enjoy solving creative UI challenges. </p>
              <p data-aos="fade-up"> If you’re looking for someone who can build fast, responsive, and modern web interfaces — I’d be excited to collaborate. </p>
              <p data-aos="fade-up"> Currently, I’m also expanding into <b>backend development</b> by learning the <b>MERN stack </b> — Node.js, Express.js, and MongoDB — to become a complete <b>Full Stack Developer</b>. </p>
            </div>
            <div className='col-xs-12 col-md-5'>
              <img className='about-img' src={About} alt='about-coder' />
            </div>
          </div>
        </div>
      </section>
      <section className='projects pt-70'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='d-flex justify-content-between align-items-center  mb-4'>
              <h3 className='section-title'>Projects</h3>
              <Link to={'/projects'} className='view-all-btn'>View All Projects</Link>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-4 mb-3 mb-lg-0'>
              <div className='project-card' data-aos="fade-right">
                <div className='site-img'>
                  <img src={Msdcars} alt='madrasselfdrivecars-site' />
                </div>
                <div className='p-3'>
                  <h6 className='site-name mb-3'>Msdcars</h6>
                  <a className='hire-me-btn d-inline-flex' target='_blank' href='https://madrasselfdrivecars.com'>Visit Site</a>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-4 mb-3 mb-lg-0'>
              <div className='project-card' data-aos="fade-up">
                <div className='site-img'>
                  <img src={LittleRoses} alt='Littleroses-site' />
                </div>
                <div className='p-3'>
                  <h6 className='site-name mb-3'>LittleRoses</h6>
                  <a className='hire-me-btn d-inline-flex' target='_blank' href='https://littleroseselc.com.au'>Visit Site</a>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-4 mb-3 mb-lg-0'>
              <div className='project-card' data-aos="fade-left">
                <div className='site-img'>
                  <img src={QadsFranchise} alt='qadsfranchise-site' />
                </div>
                <div className='p-3'>
                  <h6 className='site-name mb-3'>Q Ads Franchise</h6>
                  <a className='hire-me-btn d-inline-flex' target='_blank' href='https://qadsfranchise.com'>Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='experience pt-70'>
        <div className='container'>
          <div className='row align-items-center'>
            <h3 className='section-title mb-4'>Experience</h3>
            {experience && experience.map((job, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="exp-card" data-aos="fade-up">
                  <h4 className="exp-role">{job.role}</h4>
                  <h6 className="exp-company">{job.company}</h6>
                  <p className="exp-period">{job.period}</p>
                  <ul className="exp-list">
                    {job?.desc?.map((d, i) => (<li key={i}>{d}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment >
  )
}

export default Home