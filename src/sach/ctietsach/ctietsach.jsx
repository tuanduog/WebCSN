import "./style.css";
import logo from "../../assets/logo-land.png";
import dropdownIcon from "../../assets/drop.png";
import { useState } from 'react';
import search from "../../assets/search.png"
import { Link } from "react-router-dom"


const ctietsach = () => {
    
        const [quantity, setQuantity] = useState(1);
      
        const increment = () => {
          setQuantity(prevQuantity => prevQuantity + 1);
        };
      
        const decrement = () => {
          setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
        };
      
    return(
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
        <div className="row ">
            
            <div className="col">
                <img src="https://d3484gt1o8rlzm.cloudfront.net/mclass/books/book_CBS41667989721.png" alt="COMBO 3 SACH" width="350px" height="250px"/>
    
            </div>
            <div className="col">
                <h2 style={{color:'red', fontWeight:"bold"}}>COMBO SÁCH 3 MÔN BẤT KỲ</h2>
                <span className="gia" style={{textDecoration:"underline"}} >Giá: 350,000đ</span>
                <p style={{fontWeight:"bold"}}>Tác giả: Dương Anh Tuấn</p>
                <p>Tình trạng: Còn hàng</p>
                
                  <div className="d-flex align-items-center">
      <button className="btn btn-primary" onClick={decrement}>
        -
      </button>
      <input
  type="number"
  className="form-control mx-2 center-text-input"
  value={quantity}
  readOnly
  style={{ width: '60px' }}
/>

      <button className="btn btn-primary" onClick={increment}>
        +
      </button>
    </div>
    
                <form action="">
                    <label htmlFor="soluong" style={{paddingTop:'20px'}}>
                   
                        <button type="submit" className="btn btn-danger">+Thêm vào giỏ hàng</button>
    
                    </label>
                </form>
            </div>
        </div>
        <div className="row flex flex-row justify-content-between mt-5">
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
    )

}
export default ctietsach