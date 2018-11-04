import React from 'react'
import Social from './Social'

import style from '../styles/components/footer.module.scss'

const Footer = props => (
  <footer className={style.container}>
    <div className={style.wrapper}>
      <Social {...props} />
      <div>&copy; 2018 {props.title}</div>
    </div>
  </footer>
)

export default Footer
