import React from 'react'
import Social from './Social'

const Footer = props => (
  <footer className="footer">
    <div className="container container-main footer-wrapper flex-row">
      <Social color="#666" />
      <small className="footer-copyright">&copy; 2019 {props.name}</small>
    </div>
  </footer>
)

export default Footer
