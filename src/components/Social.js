import React from 'react'
import TwitterIcon from './Icons/twitter'
import GithubIcon from './Icons/github'
import CodepenIcon from './Icons/codepen'

const Social = ({ twitter, github, codepen, color }) => (
  <div>
    <a
      className="social-icon"
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterIcon color={color} />
    </a>
    <a
      className="social-icon"
      href={github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon color={color} />
    </a>
    <a
      className="social-icon"
      href={codepen}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CodepenIcon color={color} />
    </a>
  </div>
)

export default Social
