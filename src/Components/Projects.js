import React, { useEffect } from 'react'
import BreadCrumbs from './BreadCrumbs'
import Aos from 'aos'

const Project = () => {

  const projects = [
    { name: "Madrasselfdrivecars", image: "madrasselfdrivecars.png", siteLink: "https://madrasselfdrivecars.com/" },
    { name: "Msd Cars", image: "msdcars.png", siteLink: "https://msdcars.in/" },
    { name: "Little Roses", image: "littleroses.png", siteLink: "https://littleroseselc.com.au/" },
    { name: "Universal Inspection", image: "uicom.png", siteLink: "https://ui.com.sa/" },
    { name: "Click and Carry Mobiles", image: "clickandcarry.png", siteLink: "https://clickandcarrymobiles.in/" },
    { name: "Varnajalam", image: "varnajalam.png", siteLink: "https://varnajalam.net/" },
    { name: "Qads Franchise", image: "qadsfranchise.png", siteLink: "https://qadsfranchise.com/" },
    { name: "WA Pro Reseller", image: "wa-reseller.png", siteLink: "https://wapro360reseller.in/" },
    { name: "Bharadhi Builders", image: "bharathi.png", siteLink: "https://bharathibuilders.com/" },
    { name: "Caddinfotech", image: "cadd.png", siteLink: "https://caddinfotech.in/" },
    { name: "Reseller Admin", image: "reseller-admin.png", siteLink: "https://admin.wapro360reseller.in/" },
    { name: "Franchise Admin", image: "adminfranchise.png", siteLink: "https://admin.qadsfranchise.com/" },
    { name: "Monter", image: "monter.png", siteLink: "https://monter.in/" },
    { name: "Get My Drive", image: "getmydrive.png", siteLink: "https://getmydrive.in/" },
  ]

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <React.Fragment>
      <BreadCrumbs name={"Projects"} path={"Home"} />
      <section className='projects pt-70'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            {projects && projects ? projects.map((item, index) => {
              return (
                <div className='col-xs-12 col-md-6 col-lg-4 mb-3' key={index}>
                  <div className='project-card' data-aos="fade-up">
                    <div className='site-img'>
                      <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item?.image} />
                    </div>
                    <div className='p-3'>
                      <h6 className='site-name mb-3'>{item.name} </h6>
                      <a className='hire-me-btn d-inline-flex' target='_blank' href={item.siteLink}>Visit Site</a>
                    </div>
                  </div>
                </div>
              )
            }) : ""}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Project