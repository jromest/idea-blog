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
        <li>
          <Link to="blog" className="nav-item">
            Blog
          </Link>
        </li>
      </nav>
      <Social color="#fff" />
    </div>
  </header>
)

export default Header
