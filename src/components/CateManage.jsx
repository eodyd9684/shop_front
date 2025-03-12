
// ./ -> 현재 위치
// ../ -> 상위 폴더에서

import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from './CateManage.module.css'
import * as bookApi from '../apis/BookApi'

const CateManage = () => {
  //카테고리 목록 데이터를 저장할 변수
  const [cateList, setCateList] = useState([]);

  //입력한 카테고리명 저장할 변수 
  const [cateData, setCateData] = useState('');

  //카테고리 목록 재조회 실행을 위한 변수
  const [categoryTrigger, setCategoryTrigger] = useState({})

  //오류 메세지를 저장할 변수
  const [errorMsg, setErrorMsg] = useState('')

  //카테고리 목록 조회
  useEffect(() => {
    bookApi.getCategoryList()
      .then((res) => {
       console.log(res.data);
        setCateList(res.data);
      })
      .catch((error) => console.log(error));
  }, [categoryTrigger]);

  //카테고리 등록 버튼 클릭 시 실행하는 함수
  const insertCategory = () => {
    //카테고리명 입력안했으면 중지
    if(cateData === ''){
      setErrorMsg('카테고리명은 최소 한 글자 이상입니다.')
      return;
    }

    bookApi.insertCategory(cateData)
    .then(res => {
      if(res.data === 1){
        alert('등록 성공')
        //카테고리 목록을 다시 조회
        setCategoryTrigger({})
        //input 태그의 값을 초기화
        setCateData('')
        
        setErrorMsg('')
      }
      else{
        setErrorMsg('이미 등록된 카테고리명 입니다.')
      }
    })
    .catch(error => console.log(error))
  }

  //카테고리 삭제 버튼 클릭 시 실행 함수
  const deleteCategory = (cateCode) => {
    axios.delete(`/api/categories/${cateCode}`)
    .then(res => {

    })
    .catch(error => console.log(error))
  }

  const changeCategory = (e) => {
    setCateList({
      ...cateList,
      [e.target.name] : e.target.value
    })
  }
  
  
  //카테고리 수정 버튼 클릭 시 실행 함수
  const updateCategory = () => {
    axios.put(`/api/categories/${cateList.cateCode}`, cateList)
    .then(res => {})
    .catch(error => console.log(error))
  }
  
  return (
    <>
      <div>
        <p>카테고리</p>
        <div>
          <input type="text" value={cateData} onChange={e => {
            setCateData(e.target.value)
          }} onKeyDown={(e) => {
            //키보드 엔터를 누르면...
            if(e.key === 'Enter'){
              insertCategory()
            }
          }}/>
          <button type="button" onClick={e => {insertCategory()}}>카테고리 등록</button>
          {
            errorMsg && <p className={styles.error_p}>{errorMsg}</p>
          }
        </div>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <td>No</td>
            <td>카테고리 코드</td>
            <td>카테고리명</td>
            <td>수정</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {
          cateList.map((list, i) => {
            return (
              <tr key={i}>
                <td>{cateList.length - i}</td>
                <td>{list.cateCode}</td>
                <td><input name="cateName" type="text" value={list.cateName} onChange={(e) => {
                  changeCategory(e)}}/></td>
                <td>
                  <button type="button" onClick={e => {updateCategory()}}>수정</button>
                </td>
                <td>
                  <button type="button" onClick={e => {deleteCategory(list.cateCode)}}>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CateManage;
