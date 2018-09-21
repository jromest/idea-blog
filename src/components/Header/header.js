import React from 'react'
import { Link } from 'gatsby'

import Social from '../Social/social'

import './header.css'

const Header = props => (
  <div className="header-container">
    <div className="header-wrapper">
      <Link to="/" className="header-title">
        {props.title}
      </Link>
      <Social {...props} />
    </div>
  </div>
)

export default Header
