import React from 'react'

import style from '../styles/components/footer.module.scss'

import Social from './Social/social'

const Footer = props => (
  <div className={style.container}>
    <div className={style.wrapper}>
      <Social {...props} />
      <div>&copy; 2018 {props.title}</div>
    </div>
  </div>
)

export default Footer
