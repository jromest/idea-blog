import React from 'react'
import Link from 'gatsby-link'

import './header.css'

const Header = ({ siteTitle }) => (
  <div className='header-container'>
    <div className='header-wrapper'>
      <Link to='/' className='header-name'>
        {siteTitle}
      </Link>
    </div>
  </div>
)

export default Header
