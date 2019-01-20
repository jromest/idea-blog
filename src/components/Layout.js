import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'

import 'typeface-lora'
import 'typeface-karla'

import '../styles/main.scss'
import '../styles/prism-okaidia.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            description
            twitter
            github
            codepen
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
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header name={siteMetadata.author} />
          <main>{children}</main>
          <Footer name={siteMetadata.author} />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
