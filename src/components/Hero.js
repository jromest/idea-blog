import React from 'react'

const Hero = ({ title, description }) => (
  <div className="hero">
    <div className="container container-main hero-wrapper">
      <h1 className="title">{title}</h1>
      <span>{description}</span>
    </div>
  </div>
)

export default Hero
