import React from 'react'

import style from '../styles/components/hero.module.scss'

const Hero = ({ title, description }) => (
  <div className={style.container}>
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      <span>{description}</span>
    </div>
  </div>
)

export default Hero
