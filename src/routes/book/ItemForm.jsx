import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCategoryList, insertBook } from "../../apis/BookApi";
import ShopInput from "../../common_component/ShopInput";
import ShopButton from "../../common_component/ShopButton";

// 상품 등록 컴포넌트
const ItemForm = () => {
  //카테고리 목록을 저장할 변수
  const [cateList, setCateList] = useState([]);

  //첨부파일 input 태그에서 선택한 파일을 저장할 변수
  const [firstFile, setFirstFile] = useState(null);

  //input 태그들에 입력한 데이터를 저장하는 변수
  const [bookList, setBookList] = useState({
    bookName: "",
    bookPrice: 0,
    publisher: "",
    bookInfo: "",
    cateCode: 1,
  });

  //선택한 메인 이미지를 저장할 변수
  const [mainImg, setMainImg] = useState(null);
  //선택한 상세 이미지를 저장할 변수
  const [subImg, setSubImg] = useState(null);

  //카테고리 목록 조회
  useEffect(() => {
    getCategoryList()
      .then((res) => {
        console.log(res.data);
        setCateList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //값 입력시 반복 실행되는 함수
  const changeData = (e) => {
    setBookList({
      ...bookList,
      [e.target.name]: e.target.value,
    });
  };

  //등록 버튼 클릭 시 도서 등록 실행
  const regBook = () => {
    const regForm = new FormData();
    //도서 등록 시(DB에 insert) 필요한 데이터 적재
    regForm.append("cateCode", bookList.cateCode);
    regForm.append("bookName", bookList.bookName);
    regForm.append("bookPrice", bookList.bookPrice);
    regForm.append("publisher", bookList.publisher);
    regForm.append("bookInfo", bookList.bookInfo);

    //첨부파일 데이터 적재
    regForm.append("mainImg", mainImg);
    regForm.append("subImg", subImg);

    //regForm안에 bookList 변수가 들어있어서 regForm 매개변수를 넣어준다
    insertBook(regForm)
      .then((res) => {
        alert("등록완료");

        //데이터 초기화
        setBookList({
          cateCode: 1,
          bookName: "",
          bookPrice: 0,
          publisher: "",
          bookInfo: ""
        })

        setMainImg(null)
        setSubImg(null)
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="item-form-container">
        <div>도서 등록</div>
        <div>
          <div>
            <p>카테고리</p>
            <select
              name="cateCode"
              value={bookList.cateCode}
              onChange={(e) => {
                changeData(e);
              }}
            >
              {cateList.map((list, i) => {
                return (
                  <option key={i} value={list.cateCode}>
                    {list.cateName}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <p>도서명</p>
            <ShopInput
              name="bookName"
              value={bookList.bookName}
              onChange={(e) => {
                changeData(e);
              }}
            />
          </div>
          <div>
            <p>출판사</p>
            <ShopInput
              name="publisher"
              value={bookList.publisher}
              onChange={(e) => {
                changeData(e);
              }}
            />
          </div>
          <div>
            <p>도서 가격</p>
            <ShopInput
              name="bookPrice"
              value={bookList.bookPrice}
              onChange={(e) => {
                changeData(e);
              }}
            />
          </div>
          <div>
            <p>책소개</p>
            <textarea
              type="text"
              name="bookInfo"
              value={bookList.bookInfo}
              onChange={(e) => {
                changeData(e);
              }}
            ></textarea>
          </div>
          <div>
            <p>도서 메인 이미지</p>
            <input
              type="file"
              onChange={(e) => setMainImg(e.target.files[0])}
            />
          </div>
          <div>
            <p>도서 상세 이미지</p>
            <input type="file" onChange={(e) => setSubImg(e.target.files[0])} />
          </div>
        </div>
        <div>
          <ShopButton
            title="등록"
            size="small"
            click={(e) => {
              regBook();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ItemForm;
