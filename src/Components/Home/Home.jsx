import React from 'react'
import './Home.css'
import kev from '../../assets/kevs.png'

const About = () => {
  return (
    <>
      <div className="home"> 
      <h1 className='title'>
        <span>H</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </h1>
        <div className="image">
          <img src={kev} alt="Keivin's photo" />
        </div>
        <div className="info">
          <h1> <span className='hi'>Hi,</span> I'm <span className='name'>Keivin Luñoza</span></h1>
          <h3>1st Year College Student</h3>
          <p>A student who dreams of becoming a full-stack developer.</p>
          <div className="social">
            <a href=""><i class='bx bxl-facebook-circle icon s'></i></a>
            <a href=""><i class='bx bxl-github icon s'></i></a>
            <a href=""><i class='bx bxl-discord icon'></i></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
