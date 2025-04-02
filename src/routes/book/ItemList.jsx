import React, { useEffect, useState } from 'react'
import styles from './ItemList.module.css'
import { IMG_PATH } from '../../constant/uploadConstant'
import Item from '../../components/book/Item'
import { getBookList } from '../../apis/BookApi'

const ItemList = () => {
  //도서 목록 데이터를 저장할 변수
  const [bookList, setBookList] = useState([])

  //마운트 시 도서 목록 조회
  useEffect(() => {
    getBookList()
    .then(res => setBookList(res.data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className={styles.itemContainer}>
      {
        bookList.map((book, i) => {
          return(
            <Item key={i} book={book}/>
          )
        })
      }
    </div>
  )
}

export default ItemList