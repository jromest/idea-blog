import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Bio from '../components/Bio'

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { siteMetadata } = data.site

  return (
    <Layout>
      <Hero {...siteMetadata} />
      <div className="container container-main blog">
        {posts.map(({ node: post }) => {
          const { frontmatter } = post
          return (
            <div className="blog-listing" key={post.id}>
              <h2 className="blog-title">
                <Link className="base-link" to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
              </h2>
              <hr className="blog-separator" />
              <div className="blog-date">{frontmatter.date}</div>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-readMore">
                <Link to={frontmatter.path}>Read more</Link> &#8594;
              </div>
            </div>
          )
        })}
      </div>
      <div className="bio-section">
        <Bio />
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogQuery {
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
