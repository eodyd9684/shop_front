import React, { useState } from 'react'
import styles from './UserHeader.module.css'
import UserJoin from './UserJoin'
import { Link } from 'react-router-dom'

const UserHeader = () => {
  


  return (
    <div className={styles.headder_container}>
      <div className={styles.login_div}>
        <span><Link to={'/login'}>LOGIN</Link></span>
        <span><Link to={'/user'}>JOIN</Link></span>
      </div>
      <div className={styles.banner_div}>
        <img src="/book_banner.PNG" />
        <p>BOOK SHOP</p>
      </div>
      <div className={styles.menu_div}>
        <ul className={styles.menu_ul}>
          <li>전체</li>
          <li>IT/인터넷</li>
          <li>소설</li>
          <li>자기계발</li>
        </ul>
      </div>
    </div>
  )
}

export default UserHeader