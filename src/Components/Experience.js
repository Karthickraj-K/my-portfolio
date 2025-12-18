import React, { useEffect } from 'react'
import BreadCrumbs from './BreadCrumbs'
import Aos from 'aos';
import ImageSlider from './ImageSlider';

const Experience = () => {
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
      <BreadCrumbs name={"Experience"} path={"Home"} />
      <section className='image-slider pt-70'>
         <ImageSlider />
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
    </React.Fragment>
  )
}

export default Experience