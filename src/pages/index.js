import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Bio from '../components/Bio'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { siteMetadata } = data.site

  return (
    <Layout>
      <Hero {...siteMetadata} />
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
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
