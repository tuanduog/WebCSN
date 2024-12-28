import "./Full.css";
import { Link} from "react-router-dom";
// import logo from "./assets/logo-land.png";
// import search from "./assets/search.png"
// import dropdownIcon from "./assets/drop.png";
// import { useEffect, useState } from "react";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
// // import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import data from './data/data';

const Full = () => {
  const navigate = useNavigate();

  const handlePick = (productid) => {
    navigate('/khoahoc/khoahoc', {state: {productid}});
  }
  const handleBlank = () => {
    navigate('/blank');
  }
  return (
    <div id="main">
      
      <div className="containt">
        <ul className="menu-side" style={{zIndex: '1000'}}>
          <p className="danhmuc">DANH MỤC</p>

          <li>
            <a href="">KHÓA 2K7 - LUYỆN THI THPT QG 2025</a>
            <ul className="sub-menu-side">
              <li>
                <strong>KHÓA 2K7 - LUYỆN THI THPT QG 2025</strong>
              </li>
              <li>
                <a href="" onClick={() => handleBlank()}>LIVE C - Luyện Thi Chuyên Đề</a>
              </li>
              <li>
                <a href="" onClick={() => handleBlank()}>LIVE T - Luyện Đề</a>
              </li>
              <li>
                <a href="" onClick={() => handleBlank()}>LIVE G - Tổng Ôn</a>
              </li>
            </ul>
          </li>
            
          <li>
            <a href="">KHÓA ĐÁNH GIÁ NĂNG LỰC 2K7</a>
            <ul className="sub-menu-side">
              <li>
                <strong>KHOA ĐÁNH GIÁ NĂNG LỰC 2K7</strong>
              </li>
              <li>
                <a href="" onClick={() => handlePick(21)}>Đánh giá năng lực ĐHQGHN</a>
              </li>
              <li>
                <a href="" onClick={() => handlePick(22)}>Đánh giá năng lực ĐHQG TP Hồ Chí Minh</a>
              </li>

            </ul>
          </li>

          <li>
            <a href="">Chinh Phục Lớp 11</a>
            <ul className="sub-menu-side">
              <li>
                <strong>Chinh Phục Lớp 11</strong>
              </li>
              
              <li>
                <a href="" onClick={() => handlePick(23)}>Toán - Thầy Hồ Thức Thuận</a>
              </li>
              <li>
                <a href="" onClick={() => handlePick(24)}>Vật Lý - Thầy Vũ Tuấn Anh</a>
              </li>
              <li>
                <a href="" onClick={() => handlePick(25)}>Hóa - Thầy Phạm Văn Thuận</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="">Chinh Phục Lớp 10</a>
            <ul className="sub-menu-side">
              <li>
                <strong>Chinh Phục Lớp 10</strong>
              </li>
              <li>
                <a href="" onClick={() => handlePick(19)}>Vật lý - Thầy Vũ Tuấn Anh</a>
              </li>
              
            </ul>
          </li>

          <li>
            <a href="">BẬC ĐẠI HỌC</a>
            <ul className="sub-menu-side">
              <li>
                <strong>BẬC ĐẠI HỌC</strong>
              </li>
              <li>
                <a href="" onClick={() => handleBlank()}>PRE TOEIC</a>
              </li>
              <li>
                <a href="" onClick={() => handleBlank()}>VẬT LÝ ĐẠI CƯƠNG</a>
              </li>
              <li>
                <a href="" onClick={() => handlePick(20)}>TOÁN CAO CẤP</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="">IELTS</a>
            <ul className="sub-menu-side">
              <li>
                <strong>IELTS</strong>
              </li>
              <li>
                <a href="" onClick={() => handleBlank()}>Khóa LIVE</a>
              </li>
              <li>
                <a href="" onClick={() => handleBlank()}>Khóa IELTS CLC</a>
              </li>
            </ul>
          </li>
        </ul>
        
        <div className="main-poster">
  <div className="poster">
    <a href="">
      <img 
        src="https://cdn.mclass.vn/blog/uploads/2024/08/13181118/2k7.jpg" 
        style={{width: "720px"}}
        alt="Khai giảng Khóa Luyện thi TN THPT 2025" 
      />
    </a>
    <div className="running-text">
      Ưu đãi đăng ký sớm lên đến 50%
    </div>
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
      <div className="section">
      <div className="container">
        <h2 className="title">| Trung Học Phổ Thông</h2>

        <div className="courses">
          {data.product_data.filter((product) => product.id >= 1 && product.id <= 8)
          .map((product) => (
            
          <div
            className="box"
            key={product.id}
            onClick={() => handlePick(product.id)}
          >
          <img src={product.anh} alt={product.tensp} />
          <div className="bottom">
            <p className="name">{product.tensp}</p>
            <p className="teacher">
              Giảng viên: <span>{product.tengv}</span>
            </p>
            <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
          </div>
        </div>
        ))}
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <h2 className="title">| Lớp 11</h2>

        <div className="courses">
          {data.product_data.filter((product) => product.id >= 9 && product.id <= 16)
          .map((product) => (
            <div
            className="box"
            key={product.id}
            onClick={() => handlePick(product.id)}
          >
          <img src={product.anh} alt={product.tensp} />
          <div className="bottom">
            <p className="name">{product.tensp}</p>
            <p className="teacher">
              Giảng viên: <span>{product.tengv}</span>
            </p>
            <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
          </div>
        </div>
          ))}
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <h2 className="title">| Lớp 10</h2>

        <div className="courses" style={{display: 'flex', justifyContent:'center'}}>
            {data.product_data.filter((product) => product.id >= 17 && product.id <= 19)
            .map((product) => (
              <div
            className="box"
            key={product.id}
            onClick={() => handlePick(product.id)}
            style={{marginLeft: '15px'}}
          >
          <img src={product.anh} alt={product.tensp} />
          <div className="bottom">
            <p className="name">{product.tensp}</p>
            <p className="teacher">
              Giảng viên: <span>{product.tengv}</span>
            </p>
            <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
          </div>
        </div>
            ))}
        </div>
      </div>
      </div>
      <div className="section">
      <div className="container">
        <h2 className="title">| Đại học</h2>

        <div className="courses" style={{display: 'flex', justifyContent: 'center'}}>
          {data.product_data.filter((product) => product.id == 20)
          .map((product) => (
            <div
            className="box"
            key={product.id}
            onClick={() => handlePick(product.id)}
          >
          <img src={product.anh} alt={product.tensp} />
          <div className="bottom">
            <p className="name">{product.tensp}</p>
            <p className="teacher">
              Giảng viên: <span>{product.tengv}</span>
            </p>
            <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
          </div>
        </div>
          ))}
        </div>
      </div>
      </div>
      <br/><br/>
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
