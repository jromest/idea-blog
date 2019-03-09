import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Bio from '../components/Bio'

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html, timeToRead } = post
  const { title, date, path, excerpt, featuredImage } = frontmatter

  return (
    <Layout>
      <Seo
        title={title}
        description={excerpt}
        slug={path}
        image={featuredImage && featuredImage.publicURL}
      />
      <main role="main">
        <article className="blog-post-wrapper">
          <header className="container container-blog">
            <h1 className="blog-title">{title}</h1>
            <div className="blog-date">
              {date} &bull; {timeToRead} min read
            </div>
          </header>
          {featuredImage && <Img fluid={featuredImage.childImageSharp.fluid} />}
          <div
            className="container container-blog blog-post"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <aside className="container container-blog">
            <Bio />
          </aside>
        </article>
      </main>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        excerpt
        featuredImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
