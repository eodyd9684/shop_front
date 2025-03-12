import React, { useEffect, useState } from 'react'

/**
 * sessionStorage, localStorage는 웹 상에 데이터를 저장 할 수 있는 공간이다.
 * 이 두 곳에 저장된 데이터는 개발자모드의 Aplication 탭에서 확인 가능
 * localStorage와 sessionStorage는 새로고침에도 데이터 살아있다.
 * localStorage는 탭 간에도 데이터를 공유한다.
 * sessionStorage는 탭 간에 데이터를 공유하지 않는다.
 * localStorage는 웹 브라우저가 종료되도 데이터가 살아있다. -> 영구보존
 * sessionStorage는 웹 브라우저가 종료되면 데이터가 지워진다.
 * 이 두 곳에는 객체 데이터 저장이 불가! 하지만 다른 방법으로 객체 사용 가능
 */
const StorageTest = () => {
  //localStorage에 데이터를 저장하는 법
  useEffect(() => {
    localStorage.setItem('name', 'hong')
    localStorage.setItem('age', '20')
    // localStorage.setItem('loginInfo', {id : 'hong', name : 'honggildong'})

    sessionStorage.setItem('addr', '울산시')
  }, [])

  return (
    <>
      <div>StorageTest</div>
      <button type='button' onClick={(e) => {
        localStorage.removeItem('name')
        sessionStorage.removeItem('addr')
      }}>데이터 삭제 버튼</button>
      <button type='button' onClick={(e) => {
       const age = localStorage.getItem('age')
       const addr = sessionStorage.getItem('addr')
       alert(`age = ${age}, addr = ${addr}`)
      }}>데이터 확인 버튼</button>
    </>
  )
}

export default StorageTest