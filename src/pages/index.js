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
