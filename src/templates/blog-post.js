import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter

  return (
    <div>
      <Helmet title={title} />
      <div className='blog-post'>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <Link to='/'>Go back home...</Link>
    </div>
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
