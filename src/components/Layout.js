import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Seo from './Seo'
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
            author
          }
        }
      }
    `}
    render={data => {
      const { siteMetadata } = data.site
      return (
        <>
          <Seo />
          <Header name={siteMetadata.author} />
          {children}
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
