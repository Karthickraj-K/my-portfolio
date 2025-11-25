import React from 'react'
import { Link, useLocation } from 'react-router'

const Footer = () => {

  const location = useLocation()

  return (
    <React.Fragment>
      <footer>
        <div className='container'>
          <div className='d-flex flex-wrap justify-content-between'>
            <ul className='footer-menus ps-0 mb-4 mb-lg-0'>
              <li> <Link className={`${location.pathname === '/' ? 'active' : ""}`} to={'/'}> <i className='bx bx-home'></i> Home</Link> </li>
              <li> <Link className={`${location.pathname === '/about' ? 'active' : ""}`} to={'/about'}> <i className='bx bx-info-circle'></i> About Me</Link> </li>
              <li> <Link className={`${location.pathname === '/projects' ? 'active' : ""}`} to={'/projects'}> <i className='bx bx-task'></i> My Projects</Link> </li>
              <li> <Link className={`${location.pathname === '/education' ? 'active' : ""}`} to={'/education'}> <i className='bx bx-detail'></i> Education</Link> </li>
              <li> <Link className={`${location.pathname === '/contact' ? 'active' : ""}`} to={'/contact'}> <i className='bx bx-phone'></i>  Contact Me</Link> </li>
            </ul>
            <ul className='footer-menus ps-0'>
              <li> <a href='tel:8428471708'>+91 84284 71708</a> </li>
              <li> <a href='mailto:developerkarthickraj@gmail.com'>developerkarthickraj@gmail.com</a> </li>
            </ul>
          </div>
          <div className='copyrights'>
            <div>Copyright &copy; {new Date()?.getFullYear()}, All Rights Reserved.</div>
            <div>Created By <span style={{ color: 'var(--primary)' }}>Karthickraj K</span></div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer