import React, { useState } from 'react'
import ImageSlider from './ImageSlider'
import BreadCrumbs from './BreadCrumbs'

const Contact = () => {
  const [detail, setDetail] = useState();

  const handleChange = (e) => {
    setDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <React.Fragment>
      <BreadCrumbs name={'Contact'} path={'Home'} />
      <section className='contact pt-70'>
        <div className='container'>
          <div className="row align-items-stretch">
            <div className="col-lg-4">
              <div className="contact-card">
                <div>
                  <i className="fa-solid fa-location-dot contact-icons"></i>
                  <div className="question">Place:</div>
                  <div className="answer">Chennai</div>
                </div>
                <div className="my-5">
                  <i className="fa-solid fa-phone contact-icons"></i>
                  <div className="question">Conatct Number:</div>
                  <div className="answer">+91 88258 70356</div>
                </div>
                <div>
                  <i className="fa-solid fa-envelope contact-icons"></i>
                  <div className="question">Email:</div>
                  <div className="answer">reenagunasekar5@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-card">
                <div className="d-flex flex-lg-row gap-4">
                  <input type="text" value={detail?.name || ""} onChange={handleChange} name="name" autoComplete="off" className="form-control input-form" placeholder="Name" />
                  <input type="email" value={detail?.email || ""} onChange={handleChange} name="email" autoComplete="off" className="form-control input-form" placeholder="name@gmail.com" />
                </div>
                <input type="text" value={detail?.subject || ""} onChange={handleChange} name="subject" autoComplete="off" className="form-control input-form my-4" placeholder="Your Subject" />
                <textarea autoComplete="off" value={detail?.message || ""} onChange={handleChange} name="message" style={{ height: '108px' }} className="form-control input-form" placeholder="Your Message" />
                <button className="btn btn-theme download-btn mt-4">Send Me Message<i className="fa-solid fa-envelope ms-1"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact