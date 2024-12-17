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
import { useState, useEffect, useRef } from "react";
import data from "./data/data.jsx";
import data_sach from "./data/data_sach.jsx";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navitoYourCourse = () =>{
    navigate('/YourCourse');
  }
  const handleChangeAcc = () => {
    navigate('/change_acc/changeacc');
  }
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
    navigate('/blank')
  }
  // handle find
  const [query, setQuery] = useState('');

  const { sach_data = [] } = data_sach || {};
  const { product_data = [] } = data || {};

  const fitBooks = sach_data
    .filter((book) => book.tensach.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3); 

  const fitProducts = product_data
    .filter((product) => product.tensp.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3); 

  const handleClickBook = (bookid) => {
    navigate('/ctietsach', { state: { sachid: bookid } });
    setShowResults(false);
  }
  const handleClickProduct = (productid) => {
    navigate('/khoahoc/khoahoc', { state: {productid} });
    setShowResults(false);
  }
  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate('/find_result/find_result', { state: { query } });
      setShowResults(false);
    } else {
      alert('Vui lòng nhập thông tin mà bạn muốn tìm!');
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const fetchAvatar = async () => {
    try {
      const response = await axios.get('http://localhost:8081/user/avatar', {
        responseType: 'blob',  
        withCredentials: true, 
      });

      if(response.data.size == 0){
        setImagePreview(null);
      } else {
        const imageUrl = URL.createObjectURL(response.data);
        setImagePreview(imageUrl); 
      }
    } catch (error) {
      console.error("Error fetching avatar:", error.response?.data || error.message);
    }
  };
  
  useEffect(() => {
    fetchAvatar();
  }, []);
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
            <a className="dropdown-item" href="" onClick={() => handleBlank()}>LIVE C - Luyện Thi Chuyên Đề</a>
          </li>
          <li>
            <a className="dropdown-item" href="" onClick={() => handleBlank()}>LIVE T - Luyện Đề</a>
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

      
<div className="search-container" style={{ width: '450px', border: 'none', backgroundColor: 'none'}} ref={searchRef}>
  <input 
    type="text" 
    placeholder="Tìm kiếm khóa học" 
    style={{ 
      marginTop: '-5px',
      fontSize: '16px',  
      width: '102%', 
      marginBottom: '10px',
      border: '1px solid black',
      borderRadius: '20px',
      padding: '24px',
      position: 'relative',
      marginLeft: '-3px'
    }} 
    value={query} 
    onChange={(e) => {setQuery(e.target.value); setShowResults(true);}} 
    onKeyDown={(e) => {
      if(e.key == 'Enter'){
        handleSearch();
      }
    }}
  />
  <button type="submit" onClick={() => {handleSearch()}} style={{border: 'none', background: 'transparent', position: 'absolute', marginLeft: '400px', marginTop: '3px'}}>
    <img src={search} alt="Search" className="srch" style={{ width: '24px', height: '24px' }} />
  </button>

  {query && (
    <div style={{ width: '100%', backgroundColor: 'white' ,borderRadius: '3px' }}>
      {showResults && fitBooks.length > 0 && (
        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
          {fitBooks.map((book) => (
            <li 
              key={book.id}
              className="hovere"
              style={{
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '5px',
                cursor: 'pointer',
                borderBottom: '1px solid #ddd',
                paddingBottom: '10px',
  
              }}
              onClick={() => handleClickBook(book.id)}
            >
              <img
                src={book.anhsach}
                alt={book.tensach}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <div>
                <h4 style={{ margin: 0, fontSize: '15px' }}>{book.tensach}</h4>
                <p style={{ margin: 0, color: 'gray', fontSize: '10px' }}>{book.tacgia}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {showResults && fitProducts.length > 0 && (
        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
          {fitProducts.map((product) => (
            <li
              key={product.id}
              className="hovere"
              style={{
                display: 'flex',
                padding: '5px',
                alignItems: 'center',
                marginBottom: '5px',
                cursor: 'pointer',
                borderBottom: '1px solid #ddd',
                paddingBottom: '10px',
              }}
              onClick={() => handleClickProduct(product.id)}
            >
              <img
                src={product.anh}
                alt={product.tensp}
                style={{ width: '50px',height: '50px',marginRight: '10px'}}
              />
              <div>
                <h4 style={{ margin: 0, fontSize: '15px' }}>{product.tensp}</h4>
                <p style={{ margin: 0,color: 'gray',fontSize: '10px'}}>{product.tengv}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )}

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
            style={{backgroundColor: '#f8f9ff', position: 'relative', background: 'none'}}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="User Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', marginBottom: '5px' }} />
            ): (
              <FontAwesomeIcon icon={faUserLarge} style={{ fontSize: '1.5rem', color: 'black' }} />
            )}
          </button>
          {imagePreview ? (
            <div className="dropdown-menu" style={{marginLeft: '-35px', position: 'absolute', top: '100%', left: '0', marginTop: '-7px'}}>
            <a className="dropdown-item" href="" style={{textAlign: 'center'}}>
              {name}
            </a>
            <a className="dropdown-item" onClick={handleChangeAcc} href="" style={{textAlign: 'center'}}>
              Thông tin tài khoản
            </a>
            <a className="dropdown-item" onClick={navitoYourCourse} href="" style={{textAlign: 'center'}}>
              Khóa học của tôi
            </a>
            <a className="dropdown-item" href="" onClick={logout} style={{textAlign: 'center'}}>
              <FontAwesomeIcon icon={faRightFromBracket} /> Đăng xuất
            </a>
          </div>
          ): (
            <div className="dropdown-menu" style={{marginLeft: '-42px', position: 'absolute', top: '100%', left: '0'}}>
            <a className="dropdown-item" href="" style={{textAlign: 'center'}}>
              {name}
            </a>
            <a className="dropdown-item" onClick={handleChangeAcc} href="" style={{textAlign: 'center'}}>
              Thông tin tài khoản
            </a>
            <a className="dropdown-item" onClick={navitoYourCourse} href="" style={{textAlign: 'center'}}>
              Khóa học của tôi
            </a>
            <a className="dropdown-item" href="" onClick={logout} style={{textAlign: 'center'}}>
              <FontAwesomeIcon icon={faRightFromBracket} /> Đăng xuất
            </a>
          </div>
          )}
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