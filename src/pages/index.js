import React from 'react'
import Link from 'gatsby-link'

require('typeface-lora')
require('typeface-karla')

import Hero from '../components/Hero/hero'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { siteMetadata } = data.site

  return (
    <div>
      <Hero
        siteTitle={siteMetadata.title}
        siteDescription={siteMetadata.description}
      />
      <div className="blog">
        {posts.map(({ node: post }) => {
          const { frontmatter } = post
          return (
            <div className="blog-listing" key={post.id}>
              <h2 className="blog-title">
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </h2>
              <div className="blog-date">{frontmatter.date}</div>
              <p>{post.excerpt}</p>
              <div className="read-more">
                <Link to={frontmatter.path}>Read more &#8594;</Link>
              </div>
            </div>
          )
        })}

        <h2>Hi people</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="page-2/">Go to page 2</Link>
      </div>
    </div>
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
