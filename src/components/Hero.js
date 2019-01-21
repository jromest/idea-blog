import React from 'react'

const Hero = ({ title, description, isHomepage }) => (
  <div className={isHomepage ? 'hero-home' : 'hero'}>
    <div className="container container-main hero-wrapper">
      {isHomepage ? (
        <React.Fragment>
          <h1 className="home-title">Hi, I'm {title}</h1>
          <h3 className="home-description">{description}</h3>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 className="title">{title}</h1>
          <span>{description}</span>
        </React.Fragment>
      )}
    </div>
  </div>
)

export default Hero
