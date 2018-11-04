import React from 'react'
import TwitterIcon from './Icons/twitter'
import GithubIcon from './Icons/github'
import CodepenIcon from './Icons/codepen'

import style from '../styles/components/social.module.scss'

const Social = ({ twitter, github, codepen }) => (
  <div>
    <a
      className={style.icon}
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterIcon />
    </a>
    <a
      className={style.icon}
      href={github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </a>
    <a
      className={style.icon}
      href={codepen}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CodepenIcon />
    </a>
  </div>
)

export default Social
