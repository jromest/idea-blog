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

const metaKeywords = [
  'javascript',
  'js',
  'python',
  'py',
  'website',
  'web',
  'development',
  'html',
  'css',
  'react',
  'api',
  'front',
  'back',
  'end',
  'learn',
  'tutorial',
  'programming',
]

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
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: metaKeywords.join(', ') },
          ]}
        />
        <Header
          {...data.site.siteMetadata}
          title={data.site.siteMetadata.title}
        />
        <div className="app-wrapper">{children}</div>
        <Footer
          {...data.site.siteMetadata}
          title={data.site.siteMetadata.title}
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
