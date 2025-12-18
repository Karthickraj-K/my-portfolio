import React, { useState } from 'react'
import BreadCrumbs from './BreadCrumbs'
import { toast } from 'react-toastify';

const Contact = () => {
  const [detail, setDetail] = useState({});

  const handleChange = (e) => {
    setDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const submit = async () => {
    if (!detail?.name) {
      toast.error("Please Check the Name");
    } else if (!detail?.email) {
      toast.error("Please Check the Email");
    } else if (!/\S+@\S+\.\S+/.test(detail.email)) {
      toast.error("Please Enter Valid Email");
    } else if (!detail?.subject) {
      toast.error("Please Check the Subject");
    } else if (!detail?.message) {
      toast.error("Please enter a message");
    } else {
      const formData = new FormData()
      formData.append("access_key", "7c666fc5-c352-4556-8b44-6849e2bee8f9");
      formData.append("name", detail.name);
      formData.append("email", detail.email);
      formData.append("subject", detail.subject);
      formData.append("message", detail.message);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", body: formData,
      });
      const data = await res.json();
      if (data?.success) {
        toast.success('Mail Sent Successfully')
        setDetail({})
      } else {
        toast.error('Failed to send message. Try again!')
      }
    }
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
                  <div className="question">Contact Number:</div>
                  <div className="answer">+91 84284 71708</div>
                </div>
                <div>
                  <i className="fa-solid fa-envelope contact-icons"></i>
                  <div className="question">Email:</div>
                  <div className="answer">developerkarthickraj@gmail.com</div>
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
                <button onClick={submit} className="btn btn-theme download-btn mt-4">Send Me Message<i className="fa-solid fa-envelope ms-1"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact