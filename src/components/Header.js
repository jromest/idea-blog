import React from 'react'
import { Link } from 'gatsby'
import Social from './Social'

const navItems = [
  {
    name: 'Blog',
    path: 'blog',
  },
]

const Header = props => (
  <header className="header">
    <div className="container container-main header-wrapper flex-row">
      <Link to="/" className="title base-link">
        {props.name}
      </Link>
      <nav className="nav">
        {navItems.length !== 0
          ? navItems.map((nav, index) => (
              <li key={index}>
                <Link to={nav.path} className="nav-item">
                  {nav.name}
                </Link>
              </li>
            ))
          : null}
      </nav>
      <Social color="#fff" />
    </div>
  </header>
)

export default Header
