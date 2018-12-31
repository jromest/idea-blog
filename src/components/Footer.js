import React from 'react'
import Social from './Social'

const Footer = props => (
  <footer className="footer">
    <div className="container container-main footer-wrapper flex-row">
      <Social color="#666" />
      <div>&copy; 2018 {props.title}</div>
    </div>
  </footer>
)

export default Footer
