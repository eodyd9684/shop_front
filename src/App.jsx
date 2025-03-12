import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/UserLayout";
import AdminLayout from "./components/AdminLayout";
import ItemForm from "./components/ItemForm";
import CateManage from "./components/CateManage";
import State변경함수흐름 from "./components/practice/State변경함수흐름";
import Axios흐름 from "./components/practice/Axios흐름";
import ShopButton from "./common_component/ShopButton";
import ShopInput from "./common_component/ShopInput";
import UserJoin from "./components/UserJoin";
import State변경함수2 from "./components/practice/State변경함수2";
import State변경함수흐름3 from "./components/practice/State변경함수흐름3";
import Login from "./components/Login";

function App() {
  

  return (
    <div className="container">
      <Routes>
        {/* 유저가 접속하는 페이지 */}
        <Route path="/" element={<UserLayout />}>
          {/* 상품 목록 페이지 */}
          <Route path="" element={<div>상품 목록 페이지</div>}/>
          {/* 상품 상세 페이지 */}
          <Route path="detail" element={<div>상품 상세 페이지</div>} />
          {/* 회원가입 */}
          <Route path="user" element={<UserJoin/>}/>     
          {/* 로그인 */}
          <Route path="login" element={<Login/>}></Route>
        </Route>
          {/* 관리자가 접속하는 페이지 */}
        <Route path="/admin" element={<AdminLayout />}>
        {/* 상품등록 */}
        <Route path="reg-item" element={<ItemForm />}/>
        {/* 회원관리 */}
        <Route path="cate-manage" element={<CateManage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
