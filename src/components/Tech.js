import React from 'react'

import html from '../assets/html5.svg'
import css from '../assets/css3.svg'
import js from '../assets/js.svg'
import reactjs from '../assets/react.svg'
import gatsbyjs from '../assets/gatsby.svg'
import sass from '../assets/sass.svg'
import git from '../assets/git.svg'

const techSkills = [
  { name: 'HTML', imgSrc: html },
  { name: 'CSS', imgSrc: css },
  { name: 'Javascript', imgSrc: js },
  { name: 'React', imgSrc: reactjs },
  { name: 'Gatsby', imgSrc: gatsbyjs },
  { name: 'SASS', imgSrc: sass },
  { name: 'Git', imgSrc: git },
]

const Tech = ({ imgClassName }) => (
  <React.Fragment>
    {techSkills.map((skill, index) => (
      <img
        key={index}
        className={imgClassName}
        src={skill.imgSrc}
        alt={skill.name}
      />
    ))}
  </React.Fragment>
)

export default Tech
