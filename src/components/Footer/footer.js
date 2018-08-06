import React from 'react'

import './footer.css'

import Social from '../Social/social'

const Footer = props => (
  <div className="footer-container">
    <div className="footer-wrapper">
      <Social {...props} />
      <div className="copyright">&copy; 2018 {props.title}</div>
    </div>
  </div>
)

export default Footer
