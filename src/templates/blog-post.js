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
      <div className="blog">
        <Helmet title={title} />
        <div className="blog-post">
          <h1 className="blog-title">{title}</h1>
          <div className="blog-date">{date}</div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
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
