import logo from "../assets/logo-land.png";
import search from "../assets/search.png"
import dropdownIcon from "../assets/drop.png";
import './luyende.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../assets/background.svg';
import { Link } from "react-router-dom";

const luyende = () => {
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
      <div
    className="header text-center"
    style={{
        backgroundImage: `url(${background})`,
        height: '250px',
    }}
>
        <h1>Luyện Đề</h1>
        <p>Giải đề là cách tổng hợp kiến thức nhanh và dễ dàng nhất!</p>
        </div>
        <div className="container filter-section">
  <div className="row">
    <div className="col-md-3">
      <button className="btn btn-light equal-height">
        Đề kiểm tra 1 tiết chương 4,5 - Lớp 12
      </button>
    </div>
    <div className="col-md-3">
      <button className="btn btn-light equal-height">
        Chương 5. Sóng ánh sáng - Lớp 12
      </button>
    </div>
    <div className="col-md-3">
      <button className="btn btn-light equal-height">
        Chương 4. Dao động và sóng điện từ - Lớp 12
      </button>
    </div>
    <div className="col-md-3">
      <button className="btn btn-light equal-height">
        Chương 3. Điện xoay chiều - Lớp 12
      </button>
    </div>
  </div>

  <form className="row mt-4">
    <div className="col-md-2">
      <label htmlFor="name">Tên</label>
      <input
        type="text"
        className="form-control"
        placeholder="Nhập tên"
        id="name"
      />
    </div>
    <div className="col-md-2">
      <label htmlFor="maDe">Mã đề</label>
      <input
        type="text"
        className="form-control"
        placeholder="Nhập mã đề"
        id="maDe"
      />
    </div>
    <div className="col-md-2">
      <label htmlFor="mucDoSelect">Giảng viên</label>
      <select className="form-select" id="mucDoSelect">
        <option selected>Tất cả</option>
        <option value="1">Hồ Thức Thuận</option>
        <option value="2">Phạm Văn Thuận</option>
      </select>
    </div>
    <div className="col-md-2">
      <label htmlFor="monHocSelect">Môn học</label>
      <select className="form-select" id="monHocSelect">
        <option selected>Chọn...</option>
        <option value="1">Vật lý</option>
        <option value="2">Hóa học</option>
      </select>
    </div>
    <div className="col-md-2">
      <label htmlFor="mucDoSelect">Danh mục</label>
      <select className="form-select" id="mucDoSelect">
        <option selected>Chọn...</option>
        <option value="1">Kiếm tra học kì 1 lớp 12</option>
        <option value="2">Kiếm tra học kì 2 lớp 12</option>
      </select>
    </div>
    <div className="col-md-2">
      <label htmlFor="capDoSelect">Cấp độ</label>
      <select className="form-select" id="capDoSelect">
        <option selected>Chọn...</option>
        <option value="1">Lớp 10</option>
        <option value="2">Lớp 11</option>
        <option value="3">Lớp 12</option>
      </select>
    </div>
    <div className="col-md-2">
      <label htmlFor="mucDoSelect">Mức độ</label>
      <select className="form-select" id="mucDoSelect">
        <option selected>Chọn...</option>
        <option value="1">Tổ hợp</option>
        <option value="2">Cơ bản</option>
      </select>
    </div>
  </form>

    <button className="btn btn-primary mt-3">
    <i className="fa fa-filter" aria-hidden="true"></i> Lọc
    </button>
    <button className="btn btn-secondary mt-3">Bỏ lọc</button>
    </div>
    <div className="container table-section">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>No</th>
        <th>Mã đề</th>
        <th>Tiêu đề</th>
        <th>Môn</th>
        <th>Giảng Viên</th>
        <th>Ngày mở đề</th>
        <th>Cấp độ</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>010</td>
        <td>Thi thử 01</td>
        <td>Vật lý</td>
        <td>Thầy A</td>
        <td>10/11/2023</td>
        <td>Lớp 12</td>
        <td>
          <button className="btn btn-success">Làm Đề</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>011</td>
        <td>Thi thử 02</td>
        <td>Hóa học</td>
        <td>Cô B</td>
        <td>10/11/2023</td>
        <td>Lớp 12</td>
        <td>
          <button className="btn btn-success">Làm Đề</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>011</td>
        <td>Thi thử 02</td>
        <td>Hóa học</td>
        <td>Cô B</td>
        <td>10/11/2023</td>
        <td>Lớp 12</td>
        <td>
          <button className="btn btn-success">Làm Đề</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>011</td>
        <td>Thi thử 02</td>
        <td>Hóa học</td>
        <td>Cô B</td>
        <td>10/11/2023</td>
        <td>Lớp 12</td>
        <td>
          <button className="btn btn-success">Làm Đề</button>
        </td>
      </tr>
      </tbody>
    </table>
    </div>
    <div className="container footer-content mt-5">
      <div className="row flex flex-row justify-content-between">
        <div className="col col-lg-5 pb-1 pt-3">
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

    </div>
  )
}

export default luyende
