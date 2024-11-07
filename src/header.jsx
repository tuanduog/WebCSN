import logo from "./assets/logo-land.png";
import search from "./assets/search.png";
import dropdownIcon from "./assets/drop.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./authContext";
import "./Full.css";

const Header = () => {
  const {auth, name, logout} = useAuth();

  return (
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
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faUserLarge} style={{ fontSize: "1.5rem" }} color="black" />
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                {name} {/* Corrected to display the user's name */}
              </a>
              <a className="dropdown-item" href="#" onClick={logout}>
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
