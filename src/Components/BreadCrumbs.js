import React from 'react'
import { Link } from 'react-router'

const BreadCrumbs = ({ name, path }) => {
  return (
    <React.Fragment>
      <section className='breadcrumbs'>
        <div className='container'>
          <nav aria-label="breadcrumb" className='breadcrumb-container'>
            <h4 className='fw-bold mb-0'>{name}</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"> <Link to={'/'}>{path}</Link> </li>
              <li className="breadcrumb-item active" aria-current="page">{name}</li>
            </ol>
          </nav>
        </div>
      </section>
    </React.Fragment>
  )
}

export default BreadCrumbs