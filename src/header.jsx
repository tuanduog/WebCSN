import logo from "./assets/logo-land.png";
import search from "./assets/search.png";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./authContext";
import "./Full.css";    
import "../node_modules/mdb-ui-kit/css/mdb.min.css"
import "../node_modules/mdb-ui-kit/js/mdb.es.min.js"
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate('cart/cart');
  }
   const handleBeforeLogin = () => {
    navigate('login/login');
  }
  const {auth, name, logout} = useAuth();
  const handlePick = (productid) => {
    navigate('/khoahoc/khoahoc', {state: {productid}});
  }
  const handleBlank = () => {
    alert('Hiện tại không co khóa học nào');
    navigate('/blank')
  }
  // const handleFind = () => {

  // }
  return (
    <div id="header">
      <Link to="/"><img src={logo} alt="Logo" style={{ width: "90px", height: "45px" }} /></Link>
      
      <div className=" d-flex justify-content-center">
  <div className="dropdown dropdown-hover">
    <button data-mdb-button-init data-mdb-ripple-init data-mdb-dropdown-init
      className="btn btn-primary dropdown-toggle fw-bold fs-6 rounded" type="button" id="dropdownMenuButton"
      data-mdb-toggle="dropdown" aria-expanded="false">
      KHOÁ HỌC & SÁCH
    </button>
    <ul className="dropdown-menu dropdown-menu-hover " aria-labelledby="dropdownMenuButton" style={{marginTop: '-0.2px'}}>
      <li>
       <div id="sub1"className="dropdown dropdown-hover" >
        <a className="dropdown-item fw-bold pb-3 pt-3"  data-mdb-button-init data-mdb-ripple-init data-mdb-dropdown-init id="sub1"  href="#"  type="button"
      data-mdb-toggle="dropdown" aria-expanded="false" > KHÓA 2K7 - LUYỆN THI THPT QG 2024 &raquo; </a>
        <ul className=" dropdown-submenu rounded"  aria-labelledby="sub1">
          <li>
            <a className="dropdown-item" href="">LIVE C - Luyện Thi Chuyên Đề</a>
          </li>
          <li>
            <a className="dropdown-item" href="">SLIVE T - Luyện Đề</a>
          </li>
        </ul>
        </div>
      </li>
      
      <li>
        <div id="sub1"className="dropdown dropdown-hover" >
        <a className="dropdown-item fw-bold pb-3 pt-3"  data-mdb-button-init data-mdb-ripple-init data-mdb-dropdown-init id="sub1"  href="#"  type="button"
      data-mdb-toggle="dropdown" aria-expanded="false" > KHÓA ĐÁNH GIÁ NĂNG LỰC 2K7&raquo; </a>
        <ul className=" dropdown-submenu rounded"  aria-labelledby="sub1">
          <li>
            <a className="dropdown-item" href="" onClick={() => handlePick(21)}>Đánh giá năng lực ĐHQGHN</a>
          </li>
          <li>
            <a className="dropdown-item" href="" onClick={() => handlePick(22)}>Đánh giá năng lực ĐHQG TP Hồ Chí Minh</a>
          </li>

        </ul>
        </div>
      </li>
      <li  >
        <div id="sub1"className="dropdown dropdown-hover" >
        <a className="dropdown-item fw-bold pb-3 pt-3"  data-mdb-button-init data-mdb-ripple-init data-mdb-dropdown-init id="sub1"  href="#"  type="button"
      data-mdb-toggle="dropdown" aria-expanded="false" > Chinh Phục lớp 11&raquo; </a>
        <ul className=" dropdown-submenu rounded"  aria-labelledby="sub1">
  
          <li>
            <a className="dropdown-item" href="" onClick={() => handlePick(23)}>Toán - Thầy Hồ Thức Thuận</a>
          </li>
          <li>
            <a className="dropdown-item" href="" onClick={() => handlePick(24)}>Vật Lý - Thầy Vũ Tuấn Anh</a>
          </li>
          <li>
            <a className="dropdown-item" href="" onClick={() => handlePick(25)}>Hóa - Thầy Phạm Văn Thuận</a>
          </li>

        </ul>
        </div>
      </li>
      <li  >
        <div id="sub1"className="dropdown dropdown-hover" >
        <a className="dropdown-item fw-bold pb-3 pt-3"  data-mdb-button-init data-mdb-ripple-init data-mdb-dropdown-init id="sub1"  href="#"  type="button"
      data-mdb-toggle="dropdown" aria-expanded="false" > Chinh Phục lớp 10&raquo; </a>
        <ul className=" dropdown-submenu rounded"  aria-labelledby="sub1">
          <li>
            <a className="dropdown-item" href="" onClick={() => handlePick(19)}>Vật lý - Thầy Vũ Tuấn Anh</a>
          </li>
        </ul>
        </div>
      </li>
      <li  >
        <div id="sub1"className="dropdown dropdown-hover" >
        <a className="dropdown-item fw-bold pb-3 pt-3"  data-mdb-button-init data-mdb-ripple-init data-mdb-dropdown-init id="sub1"  href="#"  type="button"
      data-mdb-toggle="dropdown" aria-expanded="false" >Bậc Đại Học&raquo; </a>
        <ul className=" dropdown-submenu rounded"  aria-labelledby="sub1">
          <li>
            <a className="dropdown-item" href=""  onClick={() => handleBlank()}>PRE TOEIC</a>
          </li>
          <li>
            <a className="dropdown-item" href="" onClick={() => handleBlank()}>VẬT LÝ ĐẠI CƯƠNG</a>
          </li>
          <li>
            <a className="dropdown-item" href="" onClick={() => handlePick(20)}>TOÁN CAO CẤP</a>
          </li>
        </ul>
        </div>
      </li>
      <li  >
        <div id="sub1"className="dropdown dropdown-hover" >
        <a className="dropdown-item fw-bold pb-3 pt-3"  data-mdb-button-init data-mdb-ripple-init data-mdb-dropdown-init id="sub1"  href="#"  type="button"
      data-mdb-toggle="dropdown" aria-expanded="false" > IELTS&raquo; </a>
        <ul className=" dropdown-submenu rounded"  aria-labelledby="sub1">
          <li>
            <a className="dropdown-item" href="" onClick={() => handleBlank()}>Khóa LIVE</a>
          </li>
          <li>
            <a className="dropdown-item" href="" onClick={() => handleBlank()}>Khóa IELTS CLC</a>
          </li>

        </ul>
        </div>
      </li>
    </ul>
  </div>
</div>

      
      <div className="search-container">
        <input type="text" placeholder="Tìm kiếm khóa học" style={{fontSize: '16px'}}/>
        <button type="submit">
          <img src={search} alt="Search" className="srch" />
        </button>
      </div>
      
      {auth ? (
       <FontAwesomeIcon className="carrt" icon={faCartShopping} onClick={handleCart} style={{cursor: 'pointer'}}></FontAwesomeIcon>)
      : (
        <FontAwesomeIcon className="carrt1" icon={faCartShopping} onClick={handleBeforeLogin} style={{cursor: 'pointer'}}></FontAwesomeIcon>
      )}

      {auth ? (
        <div className="user-info">
          
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-button"
            type="button"
            id="dropdownMenuButton"
            aria-haspopup="true"
            aria-expanded="false"
            style={{backgroundColor: '#f8f9ff'}}
          >
            <FontAwesomeIcon icon={faUserLarge} style={{ fontSize: "1.5rem" }} color="black" />
          </button>
          <div className="dropdown-menu" style={{marginLeft: '-40px'}}>
            <a className="dropdown-item" href="#" style={{textAlign: 'center'}}>
              {name} {/* Displays the user's name */}
            </a>
            <a className="dropdown-item" href="#" onClick={logout} style={{textAlign: 'center'}}>
              <FontAwesomeIcon icon={faRightFromBracket} /> Đăng xuất
            </a>
          </div>
        </div>
      </div>      
      ) : (
        <div className="button">
          <Link to="/login/login">
            <button className="login-button">Đăng nhập</button>
          </Link>
          <Link to="/register/register">
            <button className="register-button">Đăng ký</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;