import React from 'react'
import styles from './ShopSelect.module.css'

const ShopSelect = ({children, ...props}) => {
  return (
    <select {...props} className={styles.select}>
      {children}
    </select>
  )
}

export default ShopSelect