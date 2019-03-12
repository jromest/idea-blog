import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  query getSiteMetadata {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        twitterHandle
      }
    }
  }
`

const Seo = ({ meta, image, title, description, slug }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { siteMetadata } = data.site
      const metaDescription = description || siteMetadata.description
      const url = `${siteMetadata.siteUrl}${slug}`

      let imageUrl

      if (image && image[0] !== '/') {
        imageUrl = `/${image}`
      } else {
        imageUrl = `${image}`
      }

      const metaImage = image ? `${siteMetadata.siteUrl}${imageUrl}` : null

      let metaTitle

      if (title !== '') {
        metaTitle = slug !== '' ? `${title} - ${siteMetadata.title}` : title
      } else {
        metaTitle = `${siteMetadata.title} - ${siteMetadata.author}`
      }

      return (
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={metaTitle}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              name: 'author',
              content: siteMetadata.author,
            },
            // Twitter Card data
            {
              name: 'twitter:card',
              content: metaImage ? 'summary_large_image' : 'summary',
            },
            {
              name: 'twitter:title',
              content: metaTitle,
            },
            {
              name: 'twitter:site',
              content: siteMetadata.twitterHandle,
            },
            {
              name: 'twitter:creator',
              content: siteMetadata.twitterHandle,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
            // Open Graph data
            {
              property: 'og:title',
              content: metaTitle,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:url',
              content: url,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
          ]
            .concat(
              metaImage
                ? [
                    {
                      name: 'twitter:image',
                      content: metaImage,
                    },
                    {
                      property: 'og:image',
                      content: metaImage,
                    },
                  ]
                : []
            )
            .concat(meta)}
        />
      )
    }}
  />
)

Seo.defaultProps = {
  meta: [],
  title: '',
  slug: '',
}

Seo.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Seo
