import React from 'react'

import './social.css'

import TwitterIcon from './Icons/twitterIcon'
import GithubIcon from './Icons/githubIcon'
import CodepenIcon from './Icons/codepenIcon'

const Social = ({ twitter, github, codepen }) => (
  <div>
    <a href={twitter} target="_blank" className="social-icon">
      <TwitterIcon />
    </a>
    <a href={github} target="_blank" className="social-icon">
      <GithubIcon />
    </a>
    <a href={codepen} target="_blank" className="social-icon">
      <CodepenIcon />
    </a>
  </div>
)

export default Social
