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
            Say hi on twitter{' '}
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
      <div className="container container-main section">
        <h2 className="section-title">Projects</h2>

        {[
          {
            name: 'Agroworks',
            description:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui velit assumenda tenetur, ut perferendis placeat architecto!',
            imageSrc: webDesignImage,
            livePreview: '#',
            source: 'https://github.com/jromest/agroworks',
          },
          {
            name: 'IdeaBox Creatives',
            description:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui velit assumenda tenetur, ut perferendis placeat architecto!',
            imageSrc: webDesignImage,
            livePreview: 'https://jromest.github.io/ideabox-creatives/',
            source: 'https://github.com/jromest/ideabox-creatives',
          },
        ].map((project, index) => (
          <div key={index} className="flex-row flex-row-half section-project">
            <div className="flex-col">
              <img
                className="section-about-container--image"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, totam
            laboriosam? Id, ipsam eaque! Provident voluptates quisquam ut!
            Doloremque veritatis consectetur repudiandae dolores, consequatur
            maiores mollitia nulla et nihil pariatur.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, totam
          laboriosam? Id, ipsam eaque! Provident voluptates quisquam ut!
          Doloremque veritatis consectetur repudiandae dolores, consequatur
          maiores mollitia nulla et nihil pariatur.
        </p>
        <a
          className="section-project-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Preview
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Pull Request
        </a>
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
