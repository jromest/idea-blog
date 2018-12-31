import React from 'react'
import TwitterIcon from './Icons/twitter'
import GithubIcon from './Icons/github'
import CodepenIcon from './Icons/codepen'

const Social = ({ twitter, github, codepen }) => (
  <div>
    <a
      className="social-icon"
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterIcon color="#fff" />
    </a>
    <a
      className="social-icon"
      href={github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon color="#fff" />
    </a>
    <a
      className="social-icon"
      href={codepen}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CodepenIcon color="#fff" />
    </a>
  </div>
)

export default Social
