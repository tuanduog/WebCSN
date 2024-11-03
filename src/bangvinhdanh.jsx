import "./vinhdanh.css";
import logo from "./assets/logo-land.png";
import search from "./assets/search.png"
import dropdownIcon from "./assets/drop.png";
import { Link } from "react-router-dom";

const bangvinhdanh = () => {
  return (
    <div>
      <div id="header">
            <Link to="/">
                <img src={logo} alt="Logo" style={{ width: "90px", height: "45px", cursor: "pointer"}} />
            </Link>
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
        <div className="button">
          <button className="login-button">Đăng nhập</button>
          <button className="register-button">Đăng ký</button>
        </div>
      </div>
      <div className="content">
        <h1>
          BẢNG VINH DANH HỌC SINH ĐẠT GIẢI THÀNH TÍCH CAO KỲ KHẢO SÁT CHẤT LƯỢNG
          THÁNG 8
        </h1>
      </div>
      <div className="btn-group d-flex justify-content-center">
          <a href="https://docs.google.com/spreadsheets/d/1yespWe86FNrYg6vUmIfkNhnUIDCv9OHVSd8IRcFMr9U/edit?fbclid=IwY2xjawEvy5tleHRuA2FlbQIxMAABHVQxb1Gl4Ex-BWU3fLeafgh0-gefr_ihuCs4xHmeAaRrr1gBsYN5V96t2w_aem_GKh_N5dY9ITv8BEpN8XRNw&gid=586414687#gid=586414687" className="btn btn-primary">Môn Toán</a>
          <a href="https://docs.google.com/spreadsheets/d/1GZRyjcMUXbeXQ2L3zanl6na3zoZjni9Kd63hAjwoB4w/edit?gid=860099868#gid=860099868" className="btn btn-primary">Môn Lịch Sử</a>
          <a href="https://docs.google.com/spreadsheets/d/1E_dlrympx8y2dGZZXaw5mKsK6nUvzCBkSuXC7gVmA4k/edit?fbclid=IwY2xjawGQHS5leHRuA2FlbQIxMAABHXOQXqkX1-oLiA8MwdRQ_-9f0y6YtgCTH7c7y8xwgRoQUsb-RN6JObtjxw_aem_3_qfh3I_K2mQ405QyKKLzA&gid=0#gid=0" className="btn btn-primary">Môn Địa Lý</a>
        </div>
    </div>
  );
};

export default bangvinhdanh;
