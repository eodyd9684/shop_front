import axios from "axios"

/**
 * 회원가입
 * userList 
 * {
    userId : '',
    userPw : '',
    userName : '',
    userEmail : '', //완성된 이메일
    email1 : '',
    email2 : '@gmail.com',
    userTel : '', //완성된 연락처 010-1111-2222
    tel1 : '',
    tel2 : '',
    tel3 : ''
  }
 */
export const regUser = (userList) => {
  const responcs = axios.post('/api/users', userList);
  return responcs;
}

/**
 * 로그인
 * loginData {
 *            userId : 'aa',
 *            userPw : '11'
 * }
 */
export const loginUser = (loginData) => {
  const response = axios.get('/api/users/login', {params:loginData});
  return response;
}