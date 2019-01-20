import React from 'react'
import { Link } from 'gatsby'
import Social from './Social'

const Header = props => (
  <header className="header">
    <div className="container container-main header-wrapper flex-row">
      <Link to="/" className="title base-link">
        {props.name}
      </Link>
      <nav className="nav">
        <li className="nav-item">Portfolio</li>
        <li className="nav-item">Blog</li>
        <li className="nav-item">Contact</li>
      </nav>
    </div>
  </header>
)

export default Header
