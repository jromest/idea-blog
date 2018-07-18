import React from 'react'

import './hero.css'

const Hero = ({ siteTitle, siteDescription }) => (
  <div className="hero-container">
    <div className="hero-wrapper">
      <h1>{siteTitle}</h1>
      <span>{siteDescription}</span>
    </div>
  </div>
)

export default Hero
