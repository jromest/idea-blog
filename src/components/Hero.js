import React from 'react'
import { Link as ScrollTo } from 'react-scroll'

const Hero = ({ title, description, isHomepage }) => (
  <div className={isHomepage ? 'hero-home' : 'hero'}>
    <div className="container container-main hero-wrapper">
      {isHomepage ? (
        <React.Fragment>
          <h1 className="home-title">
            Hi, I'm <span className="home-title-name">{title}</span>
          </h1>
          <h3 className="home-description">{description}</h3>
          <div className="home-cta">
            <ScrollTo
              to="contactSection"
              smooth
              offset={-50}
              duration={500}
              className="base-link"
            >
              <button className="btn btn-primary">Let's work together</button>
            </ScrollTo>
            <ScrollTo
              to="projectSection"
              smooth
              offset={-50}
              duration={500}
              className="base-link"
            >
              <button className="btn btn-secondary">
                Check out my projects &#8594;
              </button>
            </ScrollTo>
          </div>
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
