import "./Full.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo-land.png";
import search from "./assets/search.png"
import dropdownIcon from "./assets/drop.png";
import anh from "./assets/anh.jpg";
import pnm from "./assets/pmn.jpg";
import hoa from "./assets/hoa.jpg"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Full = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [auth, setAuth] = useState(false);
  axios.defaults.withCredentials = true;
  useEffect(()=> {
    axios.get("http://localhost:8081")
    .then(res => {
      if(res.data.Status === "Success"){
        setAuth(true);
        setName(res.data.name);
        navigate('/');
      } else {
        setAuth(false);
       
      }
    })
  })
  const handleLogout = () => {
    axios.get("http://localhost:8081/logout")
    .then (res => {
      if(res.data.Status === "Success"){
      location.reload(true);
      }
    })
  }

  return (
    <div id="main">
      <div id="header">
        <img src={logo} alt="Logo" style={{ width: "90px", height: "45px" }} />
        <div className="header-menu">
          <div id="course-books">
            <a href="#" className="dm">Khóa học & sách</a>
            <img className="dropdown" src={dropdownIcon} alt="Dropdown Icon" />
          </div>
          <ul className="sub-header-menu">
            <li>
              <a href="#">KHÓA 2K6 - LUYỆN THI THPT QG 2024</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">LIVE C - Luyện Thi Chuyên Đề</a>
                  <a href="#">LIVE T - Luyện Đề</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">LIVE G - Tổng Ôn</a>
            </li>
            <li>
              <a href="#">KHÓA ĐÁNH GIÁ NĂNG LỰC 2K6</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">Đánh giá năng lực ĐHQGHN</a>
                  <a href="#">Đánh giá năng lực ĐHQG TP Hồ Chí Minh</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Chinh Phục lớp 11</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">Toán - Thầy Trần Lâm</a>
                  <a href="#">Vật Lý - Thầy Kiêu</a>
                  <a href="#">Hóa - Thầy Ngọc</a>
                  <a href="#">Ngữ Văn - Cô Bình</a>
                  <a href="#">Toán - Thầy Hồ Đức Thuận</a>
                  <a href="#">Vật Lý - Thầy Vũ Tuấn Anh</a>
                  <a href="#">Hóa - Thầy Phạm Văn Thuận</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Chinh Phục lớp 10</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">Toán</a>
                  <a href="#">Ngữ Văn - Cô Bình</a>
                  <a href="#">Hóa Học - Cô Hằng</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Bậc Đại Học</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">PRE TOEIC</a>
                  <a href="#">VẬT LÝ ĐẠI CƯƠNG</a>
                  <a href="#">TOÁN CAO CẤP</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">IELTS</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">Khóa LIVE</a>
                  <a href="#">Khóa IELTS CLC</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm khóa học" />
          <button type="submit">
            <img src={search} alt="Search" className="srch" />
          </button>
        </div>
        {auth ? (
        <div className="user-info">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown bg-white dropdown-button"
            type="button"
            id="dropdownMenuButton"
            aria-haspopup="true"
          >
            <FontAwesomeIcon icon={faUserLarge} style={{ fontSize: '1.5em' }} color="black" /> 
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              {name}
            </a>
            <a className="dropdown-item" href="#" onClick={handleLogout}>
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
      <div className="containt">
        <ul className="menu-side">
          <p className="danhmuc">DANH MỤC</p>

          <li>
            <a href="#">KHÓA 2K6 - LUYỆN THI THPT QG 2024</a>
            <ul className="sub-menu-side">
              <li>
                <strong>KHÓA 2K6 - LUYỆN THI THPT QG 2024</strong>
              </li>
              <li>
                <a href="#">LIVE C - Luyện Thi Chuyên Đề</a>
              </li>
              <li>
                <a href="#">LIVE T - Luyện Đề</a>
              </li>
              <li>
                <a href="#">LIVE G - Tổng Ôn</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">KHÓA ĐÁNH GIÁ NĂNG LỰC 2K7</a>
            <ul className="sub-menu-side">
              <li>
                <strong>KHOA ĐÁNH GIÁ NĂNG LỰC 2K7</strong>
              </li>
              <li>
                <a href="#">Đánh giá năng lực ĐHQGHN</a>
              </li>
              <li>
                <a href="#">Đánh giá năng lực ĐHQG TP Hồ Chí Minh</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Chinh Phục Lớp 11</a>
            <ul className="sub-menu-side">
              <li>
                <strong>Chinh Phục Lớp 11</strong>
              </li>
              <li>
                <a href="#">Toán - Thầy Trần Lâm</a>
              </li>
              <li>
                <a href="#">Vật Lý - Thầy Kiêu</a>
              </li>
              <li>
                <a href="#">Hóa - Thầy Ngọc</a>
              </li>
              <li>
                <a href="#">Ngữ Văn - Cô Bình</a>
              </li>
              <li>
                <a href="#">Toán - Thầy Hồ Đức Thuận</a>
              </li>
              <li>
                <a href="#">Vật Lý - Thầy Vũ Tuấn Anh</a>
              </li>
              <li>
                <a href="#">Hóa - Thầy Phạm Văn Thuận</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Chinh Phục Lớp 10</a>
            <ul className="sub-menu-side">
              <li>
                <strong>Chinh Phục Lớp 10</strong>
              </li>
              <li>
                <a href="#">Toán</a>
              </li>
              <li>
                <a href="#">Ngữ Văn - Cô Bình</a>
              </li>
              <li>
                <a href="#">Hóa Học - Cô Hằng</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">BẬC ĐẠI HỌC</a>
            <ul className="sub-menu-side">
              <li>
                <strong>BẬC ĐẠI HỌC</strong>
              </li>
              <li>
                <a href="#">PRE TOEIC</a>
              </li>
              <li>
                <a href="#">VẬT LÝ ĐẠI CƯƠNG</a>
              </li>
              <li>
                <a href="#">TOÁN CAO CẤP</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">IELTS</a>
            <ul className="sub-menu-side">
              <li>
                <strong>IELTS</strong>
              </li>
              <li>
                <a href="#">Khóa LIVE</a>
              </li>
              <li>
                <a href="#">Khóa IELTS CLC</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="main-poster">
  <div className="poster">
    <a href="#">
      <img 
        src="https://cdn.mclass.vn/blog/uploads/2024/08/13181118/2k7.jpg" 
        style={{width: "720px"}}
        alt="Khai giảng Khóa Luyện thi TN THPT 2025" 
      />
    </a>
    <div className="poster1">
      <img 
        src="https://cdn.mclass.vn/blog/uploads/2023/11/17112153/Banner-website-doc.jpg" 
        alt="Banner website" 
      />
      <span className="p1">
        <strong>Bảng vinh danh</strong>
      </span>
      <br />
      <span 
        style={{ fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif", marginLeft: "15px" }}
      >
        Khảo sát chất lượng tháng 9
      </span>
      <br /><br />
      <Link to="/bangvinhdanh">Chi tiết</Link>
    </div>
  </div>
  
  <ul className="select">
    <li>
      <Link to="/luyende/luyende">
      <img 
      src="https://cdn.mclass.vn/blog/uploads/2022/04/21021448/big-btn-luyen-de-min.png" 
      alt="Luyện đề" 
    />
      </Link>
    </li>

    <li>
      <Link to="/tailieu/tailieu">
        <img 
          src="https://cdn.mclass.vn/blog/uploads/2022/04/21021448/big-btn-tai-lieu-min.png" 
          alt="Tài liệu" 
        />
      </Link>
    </li>
    <li>
      <Link to="/sach/sach">
        <img 
          src="https://cdn.mclass.vn/blog/uploads/2022/04/21021447/big-btn-sach-min.png" 
          alt="Sach" 
        />
      </Link>
    </li>
  </ul>
</div>
        
      </div>
      <div className="main-khoi">
            <div className="khoi">
                <h3 className="head"><a href="">Trung Học Phổ Thông</a></h3>
                <div className="maint-containt-1">
                    <div className="containt-1">
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src={anh}
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src={pnm}
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src={hoa}
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br/>
                    <div className="containt-1">
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="khoi">
                    <h3 className="head"><a href="">Lớp 11</a></h3>
                    <div className="maint-containt-1">
                        <div className="containt-1">
                            <div className="body">
                            <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                            <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                            <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                            <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                        <div className="containt-1">
                            <div className="body">
                            <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                            <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                              <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                            <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="khoi">
                        <h3 className="head"><a href="">Lớp 10</a></h3>
                        <div className="maint-containt-1">
                            <div className="containt-1">
                                <div className="body">
                                <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                 <Link to='/khoahoc/khoahoc'>
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                        </Link>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><br/>
                            <div className="containt-1">
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/><br/>
                </div>
                </div>
                </div>
        </div>
        <div className="row flex flex-row justify-content-between">
    <div className="col col-lg-5 pb-1 pt-3 ps-5 ms-5">
      <h5>
        <strong>CÔNG TY CỔ PHẦN GIÁO DỤC MCLASS VIỆT NAM</strong>
      </h5>
      <br />
      Địa chỉ: Hà Nội: Toà nhà số 15 Lô 02-C4, Trung Hoà, Cầu Giấy, Hà Nội, Vietnam
      <br />
      Mã số thuế: 0317485610
      <br />
      <span className="mr-3">
        <i className="fa fa-phone" aria-hidden="true"></i> HOTLINE: 0934.556.247
      </span>
      <br />
    </div>
    <div className="col col-md-6 col-lg-3 pb-1 pt-3">
      <h5>
        <strong>Hướng dẫn</strong>
      </h5>
      <br />
      <a href="#">Hướng dẫn Học sinh</a>
      <br />
      <a href="#">Hướng dẫn Giáo viên</a>
      <br />
      <a href="#">Liên hệ</a>
      <br />
    </div>
  </div>
    
    </div>
    
  );
};

export default Full;
