import React from 'react'

import './hero.css'

const Hero = ({ siteTitle, siteDescription }) => (
  <div className="hero-container">
    <div className="hero-wrapper">
      <span className="hero-title">{siteTitle}</span>
      <span className="hero-subtitle">{siteDescription}</span>
    </div>
  </div>
)

export default Hero
