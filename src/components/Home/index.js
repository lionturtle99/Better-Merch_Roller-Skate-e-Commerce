import React from 'react'
import Header from '../Header'
const Landing = () => {
  return (
    <>
      <Header/>
      <h1 className="text-center position-absolute" style={{top: "40%", right: "50%",transform: "translate(50%, 50%)"}}>Incredable 3D interactive display using React-Three-Fiber and ThreeJS.</h1>
    </>
  )
}

export default Landing