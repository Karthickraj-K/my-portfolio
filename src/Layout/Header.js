import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation()

  return (
    <React.Fragment>
      <header>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <Link className='logo animate__bounceInDown animate__animated' to={'/'}>Karthickraj.</Link>
            <ul className='main-menus'>
              <li> <Link className={`${location.pathname === '/' ? 'active' : ""}`} to={'/'}> <i className='bx bx-home'></i> Home</Link> </li>
              <li> <Link className={`${location.pathname === '/about-me' ? 'active' : ""}`} to={'/about-me'}> <i className='bx bx-info-circle'></i> About Me</Link> </li>
              <li> <Link className={`${location.pathname === '/projects' ? 'active' : ""}`} to={'/projects'}> <i className='bx bx-task'></i> My Projects</Link> </li>
              <li> <Link className={`${location.pathname === '/experience' ? 'active' : ""}`} to={'/experience'}> <i className='bx bx-detail'></i> Experience</Link> </li>
              <li> <Link className={`${location.pathname === '/contact' ? 'active' : ""}`} to={'/contact'}> <i className='bx bx-phone'></i>  Contact Me</Link> </li>
            </ul>
            <a href='tel:+918428471708' className='hire-me-btn animate__bounceInDown animate__animated'>Hire Me</a>
            <button type="button" className="btn btn-primary d-lg-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className='bx  bx-menu'></i>
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header