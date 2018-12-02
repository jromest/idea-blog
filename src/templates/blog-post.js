import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter

  return (
    <Layout>
      <div className="container container-blog blog-post-wrapper">
        <Helmet title={title} />
        <h1 className="blog-title">{title}</h1>
        <div className="blog-date">{date}</div>
        <div className="blog-post" dangerouslySetInnerHTML={{ __html: html }} />
        <Link to="/">Go back home...</Link>
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
