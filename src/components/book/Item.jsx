import React from 'react'
import { IMG_PATH } from '../../constant/uploadConstant'
import styles from './Item.module.css'

const Item = ({book}) => {
  return (
    <>
      <div className={styles.item}>
        <img src={`${IMG_PATH}/${book.imgList[0].attachedFileName}`}/>
        <p>{book.bookName}</p>
        <p>{'￦' + book.bookPrice.toLocaleString()}</p>
      </div>
    </>
  )
}

export default Item