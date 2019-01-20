import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Bio from '../components/Bio'

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter

  return (
    <Layout>
      <Helmet title={title} />
      <div className="blog-post-wrapper">
        <div className="container container-blog">
          <h1 className="blog-title">{title}</h1>
          <div className="blog-date">{date}</div>
        </div>
        <div className="image" />
        <div
          className="container container-blog blog-post"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="container container-blog">
          <Bio />
        </div>
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
      }
    }
  }
`
