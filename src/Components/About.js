import React from 'react'
import AboutImg from '../Assets/images/about-1.png'
import BreadCrumbs from './BreadCrumbs'

const About = () => {

  const education = [
    {
      icon: "🎓",
      title: "B.Sc Information Technology ",
      college: "Bharadhidasan University, Trichy",
      year: "Pursuing in Correspondence",
    },
    {
      icon: "🎓",
      title: "Diploma in Mechanical Engg",
      college: "Venkateswara Politecnic College , Pudukottai",
      year: "2019 - 2021",
      score: "Score: 89%",
    },
    {
      icon: "🏫",
      title: "Higher Secondary (HSC)",
      college: "Valampuri Vaduganathan Higher Sec School - Ponnamaravathi",
      year: "2017 – 2019",
      score: "Score: 54%",
    },
    {
      icon: "📘",
      title: "SSLC",
      college: "Valampuri Vaduganathan Higher Sec School - Ponnamaravathi",
      year: "2016 – 2017",
      score: "Score: 86%",
    },
  ];

  return (
    <React.Fragment>
      <BreadCrumbs name={"About Me"} path={"Home"} />
      <section className='about pt-70'>
        <div className='container'>
          <div className='row align-items-center'>
            <h3 className='section-title mb-4'>About Me</h3>
            <div className='col-xs-12 col-md-7'>
              <p>
                I'm a passionate <b>Frontend Developer</b> who loves turning ideas into clean, responsive, and user-friendly interfaces. I specialize in building modern websites, dashboards, and admin panels with a strong focus on design, performance, and smooth user experience.
              </p>
              <p>
                I have solid experience working with <b>HTML, CSS,</b> and advanced layout techniques including <b>Flexbox, Grid, and even classic float-based layouts</b>. I enjoy converting any UI into pixel-perfect <b>responsive designs</b>, and I frequently use Bootstrap to deliver consistent and professional results.
              </p>
              <p>
                On the JavaScript ecosystem, I work confidently with modern frameworks like <b>React JS</b>, manage application state with <b>Redux</b>, and build fast, <b>SEO-friendly static and semi dynamic sites using Gatsby JS</b>. I focus on creating smooth interactions, <b>reusable components</b>, and clean architecture across all my projects.
              </p>
              <p>
                Whether it's a sleek landing page or a complex admin panel, I always aim for quality, maintainability, and performance. I'm constantly learning and improving, and I enjoy solving creative UI challenges.
              </p>
              <p>
                If you’re looking for someone who can build fast, responsive, and modern web interfaces — I’d be excited to collaborate.
              </p>
              <p>
                Currently, I’m also expanding into <b>backend development</b> by learning the <b>MERN stack </b> — Node.js, Express.js, and MongoDB — to become a complete <b>Full Stack Developer</b>.
              </p>
            </div>
            <div className='col-xs-12 col-md-5'>
              <img className='about-img' src={AboutImg} alt='about-coder' />
            </div>
          </div>
        </div>
      </section>
      <section className='education pt-70'>
        <div className='container'>
          <div className='row'>
            <h3 className='section-title mb-4'>Education Details</h3>
            {education && education.map((item, index) => (
              <div className='col-xs-12 col-lg-6 mb-3' key={index}>
                <div className="edu-card">
                  <div className="edu-icon">{item.icon}</div>
                  <div>
                    <h3 className="edu-degree">{item.title}</h3>
                    <p className="edu-college">{item.college}</p>
                    <p className="edu-year">{item.year}</p>
                    <p className="edu-score">{item.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default About