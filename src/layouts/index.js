import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

require('typeface-lora')
require('typeface-karla')

import '../styles/prism-okaidia.css'

import Header from '../components/Header/header'
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

const Layout = ({ children, data }) => {
  const { siteMetadata } = data.site
  return (
    <div>
      <Helmet
        title={siteMetadata.title}
        meta={[
          { name: 'description', content: siteMetadata.description },
          { name: 'keywords', content: metaKeywords.join(', ') },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="app-wrapper">{children()}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
