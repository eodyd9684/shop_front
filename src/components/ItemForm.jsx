import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getCategoryList, insertBook } from '../apis/BookApi';
import ShopInput from '../common_component/ShopInput';
import ShopButton from '../common_component/ShopButton';

// 상품 등록 컴포넌트
const ItemForm = () => {

  //카테고리 목록을 저장할 변수
  const [cateList, setCateList] = useState([])

  //input 태그들에 입력한 데이터를 저장하는 변수
  const [bookList, setBookList] = useState({
    bookName : '',
    bookPrice : 0,
    publisher : '',
    bookInfo : '',
    cateCode : 1
  });

  //카테고리 목록 조회
  useEffect(() => {
    getCategoryList()
    .then(res => {
      console.log(res.data)
      setCateList(res.data)
    })
    .catch(error => console.log(error))
  }, []);

  //값 입력시 반복 실행되는 함수
  const changeData = (e) => {
    setBookList({
      ...bookList,
      [e.target.name] : e.target.value
    })
  }

  //등록 버튼 클릭 시 도서 등록 실행
  const regBook = () => {
    insertBook(bookList)
    .then(res => {
      alert('등록완료');
    })
    .catch(error => console.log(error))
  }
  

  return (
    <>
     <div className='item-form-container'>
      <div>
        도서 등록
      </div>
      <div>
        <div>
          <p>카테고리</p>
          <select name='cateCode' value={bookList.cateCode} onChange={(e) => {changeData(e)}}>
            {
              cateList.map((list, i) => {
                return(
                <option key={i} value={list.cateCode}>{list.cateName}</option>
              )
              })
            }
          </select>
        </div>
        <div>
          <p>도서명</p>
          <ShopInput name='bookName' value={bookList.bookName} onChange={(e) => {changeData(e)}}/>
        </div>
        <div>
          <p>출판사</p>
          <ShopInput name='publisher' value={bookList.publisher} onChange={(e) => {changeData(e)}}/>
        </div>
        <div>
          <p>도서 가격</p>
          <ShopInput name='bookPrice' value={bookList.bookPrice} onChange={(e) => {changeData(e)}}/>
        </div>
        <div>
          <p>책소개</p>
          <textarea type="text" name='bookInfo' value={bookList.bookInfo} onChange={(e) => {changeData(e)}}></textarea>
        </div>
      </div>
      <div>
        <ShopButton title='등록' size='small' click={(e) => {regBook()}}/>
      </div>
     </div>
    </>
  )
}

export default ItemForm