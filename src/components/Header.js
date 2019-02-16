import React from 'react'
import { Link } from 'gatsby'
import { Link as ScrollTo } from 'react-scroll'
import Social from './Social'

const navItems = [
  {
    name: 'Projects',
    path: 'projectSection',
  },
  {
    name: 'Contact',
    path: 'contactSection',
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
                <ScrollTo
                  to={nav.path}
                  smooth
                  offset={-50}
                  duration={500}
                  className="nav-item"
                >
                  {nav.name}
                </ScrollTo>
              </li>
            ))
          : null}
      </nav>
      <Social color="#fff" />
    </div>
  </header>
)

export default Header
