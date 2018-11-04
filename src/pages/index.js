import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

import style from '../styles/components/blog.module.scss'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { siteMetadata } = data.site

  return (
    <Layout>
      <Hero {...siteMetadata} />
      <div className={style.wrapper}>
        {posts.map(({ node: post }) => {
          const { frontmatter } = post
          return (
            <div className={style.listing} key={post.id}>
              <h2 className={style.title}>
                <Link className={style.link} to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
              </h2>
              <hr className={style.separator} />
              <div className={style.date}>{frontmatter.date}</div>
              <p className={style.excerpt}>{post.excerpt}</p>
              <div className={style.readMoreContainer}>
                <Link className={style.readMore} to={frontmatter.path}>
                  Read more &#8594;
                </Link>
              </div>
            </div>
          )
        })}

        <h2>Hi people</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="page-2/">Go to page 2</Link>
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
