import React from 'react'
import html from '../assets/html5.svg'
import css from '../assets/css3.svg'
import js from '../assets/js.svg'
import reactjs from '../assets/react.svg'
import gatsbyjs from '../assets/gatsby.svg'
import sass from '../assets/sass.svg'
import git from '../assets/git.svg'

const Tech = ({ imgClassName }) => (
  <React.Fragment>
    <img className={imgClassName} src={html} alt="HTML" />
    <img className={imgClassName} src={css} alt="CSS" />
    <img className={imgClassName} src={js} alt="Javascript" />
    <img className={imgClassName} src={reactjs} alt="React" />
    <img className={imgClassName} src={gatsbyjs} alt="Gatsby" />
    <img className={imgClassName} src={sass} alt="SASS" />
    <img className={imgClassName} src={git} alt="Git" />
  </React.Fragment>
)

export default Tech
