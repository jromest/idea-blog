import React from 'react'
import { Link } from 'gatsby'
import Social from './Social'

const Header = props => (
  <header className="header">
    <div className="container container-main header-wrapper">
      <Link to="/" className="title">
        {props.title}
      </Link>
      <Social {...props} />
    </div>
  </header>
)

export default Header
