import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'typeface-lora'
import 'typeface-karla'

import '../styles/prism-okaidia.css'

import Header from './Header/header'
import Footer from './Footer/footer'

import '../styles/global.css'
import '../styles/layout.css'

// import '../styles/main.scss'

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
          <div className="app-wrapper">{children}</div>
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
