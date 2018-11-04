import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'

// import 'typeface-lora'
// import 'typeface-karla'

import '../styles/prism-okaidia.css'
import '../styles/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            twitter
            github
            codepen
            metaKeywords
          }
        }
      }
    `}
    render={data => {
      const { siteMetadata } = data.site
      return (
        <>
          <Helmet
            title={siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: siteMetadata.description,
              },
              {
                name: 'keywords',
                content: siteMetadata.metaKeywords.join(', '),
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header {...siteMetadata} title={siteMetadata.title} />
          <div>{children}</div>
          <Footer {...siteMetadata} title={siteMetadata.title} />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
