import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Bio from '../components/Bio'

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
        <h2 className="section-title">About</h2>
        <p>
          I'm a front end web developer based in Manila, Philippines. I design
          and develop experiences that make people's lives simple. I specialize
          in JavaScript and ReactJS 'n' friends that I learned mostly
          self-taught and growing my skills and learning new things every day.
        </p>
        <p>
          Outside of work, I am probably running, trekking or hiking. Otherwise,
          probably watch movies or reading books.
        </p>
        <ul>
          <li>Develops</li>
          <li>Designs</li>
          <li>Community Builder</li>
          <li>UI Design</li>
          <li>Responsive Design</li>
        </ul>
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
      <div className="container container-main section">
        <h2 className="section-title">Technologies I've Work With</h2>
        <ul>
          <li>Javascript</li>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>SASS</li>
          <li>CSS 3</li>
          <li>HTML 5</li>
        </ul>
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
