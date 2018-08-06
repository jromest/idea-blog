import React from 'react'

import './hero.css'

const Hero = ({ title, description }) => (
  <div className="hero-container">
    <div className="hero-wrapper">
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  </div>
)

export default Hero
