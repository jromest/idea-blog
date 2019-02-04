import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Tech from '../components/Tech'

import webDesignImage from '../assets/responsive-design.svg'
import checkIcon from '../assets/checkmark-outline.svg'

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site
  const { author } = siteMetadata

  return (
    <Layout>
      <Hero
        title={author}
        description="front end web developer and designer"
        isHomepage
      />
      <div className="container container-main section">
        <div className="flex-row section-about">
          <div className="flex-col section-about-container">
            <img
              className="section-about-container--image"
              src={webDesignImage}
              alt="responsive web design"
            />
          </div>
          <div className="flex-col section-about-container">
            <ul className="about-list">
              {[
                'Web Developer',
                'Web Designer',
                'Community Leader',
                'Life-long Learner',
              ].map((item, index) => (
                <li key={index} className="about-list-item">
                  <img
                    className="about-list-image"
                    src={checkIcon}
                    alt="check"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p>
          I'm a front end web developer based in Manila, Philippines. I design
          and develop experiences that make people's lives simple. I specialize
          in <strong>JavaScript</strong> and <strong>React</strong> 'n' friends
          that I learned mostly self-taught and growing my skills and learning
          new things every day.
        </p>
        <p>
          Outside of work, I am probably running, trekking or hiking. Otherwise,
          probably watch movies or reading books.
        </p>
      </div>
      <div className="container container-main section">
        <h2 className="section-title">Writings</h2>
        <h4>Coming soon...</h4>
      </div>
      <div className="container container-main section">
        <h2 className="section-title">Projects and Works</h2>
        <ul>
          <li>Agroworks</li>
          <li>filipino-bad-words-lists</li>
          <li>The old creative website</li>
        </ul>
        <p>View more on my Github...</p>
      </div>
      <div className="container section section-tech">
        <Tech imgClassName="tech-icon" />
      </div>
      <div className="container container-main section">
        <h2 className="section-title">Stay Connected</h2>
        <ul>
          <li>Email</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="bio-section">
        <Bio />
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        twitter
        github
        codepen
      }
    }
  }
`
