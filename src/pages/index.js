import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Tech from '../components/Tech'

import webDesignImage from '../assets/responsive-design.svg'
import checkIcon from '../assets/checkmark-outline.svg'
import agroworksImage from '../assets/agroworks-screenshot.jpg'
import ideaboxImage from '../assets/ideabox-creative-screenshot.jpg'

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site
  const { author } = siteMetadata

  return (
    <Layout>
      <Seo
        title={`${author} - Front End Web Developer and Designer`}
        description="Jerome Estiller is a front end web developer and designer who loves to learn and code."
      />
      <Hero
        title={author}
        description="front end web developer and designer"
        isHomepage
      />
      <div className="container container-main section">
        <div className="flex-row flex-row-half section-about">
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
      <div className="container section section-blog">
        <div className="container container-main section-blog--container">
          <h2 className="section-title">Blog</h2>
          <h4>Coming soon...</h4>
          <p>
            I'm working on a blog to share my ideas, document my learning
            journey, and write articles about what I've learned. Mainly about
            learning to code, web development, and javascript.
          </p>
          <p>
            Follow me on twitter{' '}
            <a
              href="https://mobile.twitter.com/jrom_est"
              target="_blank"
              rel="noopener noreferrer"
            >
              @jrom_est
            </a>{' '}
            for future updates.
          </p>
        </div>
      </div>
      <div id="projectSection" className="container container-main section">
        <h2 className="section-title">Projects</h2>

        {[
          {
            name: 'Agroworks',
            description:
              'UI dashboard for an exchange platform for agricultural commodities trading. It was build during a hackathon using React and SASS and contributed to the UX/UI.',
            imageSrc: agroworksImage,
            livePreview: 'https://jromest.github.io/agroworks/#/dashboard',
            source: 'https://github.com/jromest/agroworks',
          },
          {
            name: 'IdeaBox Creatives',
            description:
              'It is a fictional creative landing page template. It is a personal project built with responsive flexbox, CSS, and jQuery. Feel free to use it as a starter for your website.',
            imageSrc: ideaboxImage,
            livePreview: 'https://jromest.github.io/ideabox-creatives/',
            source: 'https://github.com/jromest/ideabox-creatives',
          },
        ].map((project, index) => (
          <div key={index} className="flex-row flex-row-half section-project">
            <div className="flex-col">
              <img
                className="section-project-image"
                src={project.imageSrc}
                alt={`screenshot of ${project.name}`}
              />
            </div>
            <div className="flex-col section-project-details">
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <a
                className="section-project-link"
                href={project.livePreview}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        ))}

        <h3 className="section-title">Open Source</h3>
        <div className="section-project">
          <h4>filipino-badwords-lists</h4>
          <p>
            My first npm package a highly consumable list of bad (profanity)
            Filipino words. Inspired by badwords-list. If you know a Filipino
            bad word(s) that is not on the list, please contribute to the list
            and make the web a better place.
          </p>
          <p>
            <a
              className="section-project-link"
              href="https://www.npmjs.com/package/filipino-badwords-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              NPM Package
            </a>
            <a
              href="https://github.com/jromest/filipino-badwords-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </p>
        </div>
        <h4>freeCodeCamp 404 Page</h4>
        <p>
          My first contribution to freeCodeCamp, I made a freeCodeCamp themed
          404 image, and the page displays a random quote. It was implemented
          under <code>learn.freecodecamp.org</code> sub-domain.
        </p>
        <a
          className="section-project-link"
          href="https://learn.freecodecamp.org/404"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Preview
        </a>
        <a
          href="https://github.com/freeCodeCamp/learn/pull/194/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Pull Request
        </a>
      </div>
      <div className="container section section-tech">
        <Tech imgClassName="tech-icon" />
      </div>
      <div
        id="contactSection"
        className="container container-main section section-contact"
      >
        <h2 className="section-title">Stay Connected</h2>
        <p>
          Send me an email or say hi on twitter if you would like to chat. I'd
          love to hear from you.
        </p>
        <div className="section-contact--cta">
          <a href="mailto:jromestiller@gmail.com" className="base-link">
            <button className="btn btn-primary">Send me an email</button>
          </a>
          <a
            className="base-link"
            href="https://mobile.twitter.com/jrom_est"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-secondary">
              Say hi on twitter &#8594;
            </button>
          </a>
        </div>
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
