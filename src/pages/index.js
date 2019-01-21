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
        description="I'm a front end web developer and designer."
        isHomepage
      />
      <div className="container container-main">
        <h2>Hi people</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="page-2/">Go to page 2</Link>
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
