import React from 'react'

import './social.css'

import TwitterIcon from '../Icons/twitter'
import GithubIcon from '../Icons/github'
import CodepenIcon from '../Icons/codepen'

const Social = ({ twitter, github, codepen }) => (
  <div>
    <a
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <TwitterIcon />
    </a>
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <GithubIcon />
    </a>
    <a
      href={codepen}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <CodepenIcon />
    </a>
  </div>
)

export default Social
