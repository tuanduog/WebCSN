import '../sach/sach.css';
import logo from "../assets/logo-land.png";
import search from "../assets/search.png"
import dropdownIcon from "../assets/drop.png";
import { Link } from "react-router-dom";
const sach = () => {
  return (
    <div>
        <div id="main">
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
          <Link to="/login/login">
          <button className="login-button">Đăng nhập</button>
          </Link>
          <Link to="/register/register">
          <button className="register-button">Đăng ký</button>
          </Link>
        </div>
      </div>
  <div className="con">
    <ul className="dm" style={{ padding: "10px 60px", backgroundColor: "#fffbfb" }}>
      <li>
        <a href="#">CÁC ĐẦU SÁCH HOT</a>
      </li>
      <li>
        <a href="#">SÁCH CHUYÊN ĐỀ LUYỆN THI THPT QG</a>
      </li>
    </ul>
    <h1>TẤT CẢ SÁCH</h1>
    <br></br>
    <div className="dms">
      <ul className="dmsach">
        <h4>Danh mục Sách</h4>
        <li>
          <a href="#">CÁC ĐẦU SÁCH HOT</a>
        </li>
        <li>
          <a href="#">SÁCH CHUYÊN ĐỀ LUYỆN THI THPT QG</a>
        </li>
      </ul>
      <div className="s">
        <ul className="sach">
          <li>
            <div className="card" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="https://d3484gt1o8rlzm.cloudfront.net/mclass/books/book_CBS41667989721.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">COMBO SÁCH 3 MÔN BẤT KỲ</h5>
                <p className="card-text" style={{ marginBottom: "0.1rem" }}>
                  <span>
                    Tác giả: <strong>MCLASS</strong>
                  </span>
                </p>
                <p style={{ marginBottom: "0.1rem" }}>
                  <strike>400,000đ</strike>
                </p>
                <Link to='/ctietsach'>
                <a href="#" className="btn btn-primary">
                  Tham khảo thêm
                </a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="card" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="https://d3484gt1o8rlzm.cloudfront.net/mclass/books/book_CBS41667989721.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">COMBO SÁCH 3 MÔN BẤT KỲ</h5>
                <p className="card-text" style={{ marginBottom: "0.1rem" }}>
                  <span>
                    Tác giả: <strong>MCLASS</strong>
                  </span>
                </p>
                <p style={{ marginBottom: "0.1rem" }}>
                  <strike>400,000đ</strike>
                </p>
                <Link to='/ctietsach'>
                <a href="#" className="btn btn-primary">
                  Tham khảo thêm
                </a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="card" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="https://d3484gt1o8rlzm.cloudfront.net/mclass/books/book_CBS41667989721.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">COMBO SÁCH 3 MÔN BẤT KỲ</h5>
                <p className="card-text" style={{ marginBottom: "0.1rem" }}>
                  <span>
                    Tác giả: <strong>MCLASS</strong>
                  </span>
                </p>
                <p style={{ marginBottom: "0.1rem" }}>
                  <strike>400,000đ</strike>
                </p>
                <Link to='/ctietsach'>
                <a href="#" className="btn btn-primary">
                  Tham khảo thêm
                </a>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <ul className='sach'>
        <li>
            <div className="card" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="https://d3484gt1o8rlzm.cloudfront.net/mclass/books/book_CBS41667989721.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">COMBO SÁCH 3 MÔN BẤT KỲ</h5>
                <p className="card-text" style={{ marginBottom: "0.1rem" }}>
                  <span>
                    Tác giả: <strong>MCLASS</strong>
                  </span>
                </p>
                <p style={{ marginBottom: "0.1rem" }}>
                  <strike>400,000đ</strike>
                </p>
                <Link to='/ctietsach'>
                <a href="#" className="btn btn-primary">
                  Tham khảo thêm
                </a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="card" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="https://d3484gt1o8rlzm.cloudfront.net/mclass/books/book_CBS41667989721.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">COMBO SÁCH 3 MÔN BẤT KỲ</h5>
                <p className="card-text" style={{ marginBottom: "0.1rem" }}>
                  <span>
                    Tác giả: <strong>MCLASS</strong>
                  </span>
                </p>
                <p style={{ marginBottom: "0.1rem" }}>
                  <strike>400,000đ</strike>
                </p>
                <Link to='/ctietsach'>
                <a href="#" className="btn btn-primary">
                  Tham khảo thêm
                </a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="card" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="https://d3484gt1o8rlzm.cloudfront.net/mclass/books/book_CBS41667989721.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">COMBO SÁCH 3 MÔN BẤT KỲ</h5>
                <p className="card-text" style={{ marginBottom: "0.1rem" }}>
                  <span>
                    Tác giả: <strong>MCLASS</strong>
                  </span>
                </p>
                <p style={{ marginBottom: "0.1rem" }}>
                  <strike>400,000đ</strike>
                </p>
                <Link to='/ctietsach'>
                <a href="#" className="btn btn-primary">
                  Tham khảo thêm
                </a>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <ul className='sach'>
        <li>
            <div className="card" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="https://d3484gt1o8rlzm.cloudfront.net/mclass/books/book_CBS41667989721.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">COMBO SÁCH 3 MÔN BẤT KỲ</h5>
                <p className="card-text" style={{ marginBottom: "0.1rem" }}>
                  <span>
                    Tác giả: <strong>MCLASS</strong>
                  </span>
                </p>
                <p style={{ marginBottom: "0.1rem" }}>
                  <strike>400,000đ</strike>
                </p>
                <Link to='/ctietsach'>
                <a href="#" className="btn btn-primary">
                  Tham khảo thêm
                </a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="card" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="https://d3484gt1o8rlzm.cloudfront.net/mclass/books/book_CBS41667989721.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">COMBO SÁCH 3 MÔN BẤT KỲ</h5>
                <p className="card-text" style={{ marginBottom: "0.1rem" }}>
                  <span>
                    Tác giả: <strong>MCLASS</strong>
                  </span>
                </p>
                <p style={{ marginBottom: "0.1rem" }}>
                  <strike>400,000đ</strike>
                </p>
                <Link to='/ctietsach'>
                <a href="#" className="btn btn-primary">
                  Tham khảo thêm
                </a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="card" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="https://d3484gt1o8rlzm.cloudfront.net/mclass/books/book_CBS41667989721.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">COMBO SÁCH 3 MÔN BẤT KỲ</h5>
                <p className="card-text" style={{ marginBottom: "0.1rem" }}>
                  <span>
                    Tác giả: <strong>MCLASS</strong>
                  </span>
                </p>
                <p style={{ marginBottom: "0.1rem" }}>
                  <strike>400,000đ</strike>
                </p>
                <Link to='/ctietsach'>
                <a href="#" className="btn btn-primary">
                  Tham khảo thêm
                </a>
                </Link>
              </div>
            </div>
          </li>
        </ul>
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
  )
}

export default sach
