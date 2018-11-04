import React from 'react'
import { Link } from 'gatsby'
import Social from './Social'

import style from '../styles/components/header.module.scss'

const Header = props => (
  <div className={style.container}>
    <div className={style.wrapper}>
      <Link to="/" className={style.title}>
        {props.title}
      </Link>
      <Social {...props} />
    </div>
  </div>
)

export default Header
