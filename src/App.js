import React from 'react'
import Routers from './Routers/Routers'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer position="top-right" />
      <Routers/>
    </React.Fragment>
  )
}

export default App