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
// import axios from "axios";
import anh1 from './assets/1.jpg';
import anh2 from './assets/2.jpg';
import anh3 from './assets/3.jpg';
import anh4 from './assets/4.jpg';
import anh5 from './assets/5.jpg';
import anh6 from './assets/6.jpg';
import anh7 from './assets/7.png';
import anh8 from './assets/8.png';
import anh111 from './assets/111.jpg';
import anh112 from './assets/112.jpg';
import anh113 from './assets/113.jpg';
import anh114 from './assets/114.jpg';
import anh115 from './assets/115.jpg';
import anh116 from './assets/116.jpg';
import anh117 from './assets/117.jpg';
import anh118 from './assets/118.jpg';
import anh101 from './assets/101.png';
import anh102 from './assets/102.png';
import anh103 from './assets/103.png';
import dh from './assets/dh.jpg';

const Full = () => {
  const navigate = useNavigate();
  // const [name, setName] = useState('');
  // const [auth, setAuth] = useState(false);

  // axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   // call api once
  //   axios.get("http://localhost:8081")
  //     .then(res => {
  //       if (res.data.Status === "Success") {
  //         setAuth(true);
  //         setName(res.data.name);
  //         navigate('/' , {state: {auth}}); 
  //       } else {
  //         setAuth(false);
  //       }
  //     })
  //     .catch(err => {
  //       console.error("Error fetching data:", err);
  //       setAuth(false);
  //     });
  // }, []); // it's key problem for call api just 1

  const handlePick = () => {
    navigate('/khoahoc/khoahoc')
  }
  
  return (
    <div id="main">
      
      <div className="containt">
        <ul className="menu-side">
          <p className="danhmuc">DANH MỤC</p>

          <li>
            <a href="#">KHÓA 2K7 - LUYỆN THI THPT QG 2025</a>
            <ul className="sub-menu-side">
              <li>
                <strong>KHÓA 2K7 - LUYỆN THI THPT QG 2025</strong>
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
      <div className="section">
      <div className="container">
        <h2 className="title">| Trung Học Phổ Thông</h2>

        <div className="courses">
     
          <div className="box" onClick={handlePick}>
            
            <img src={anh1} alt="" />
      
          <div className="bottom">
            <p className="name">COMBO CTG SINH 2K7 - HTT</p>
            <p className="teacher">Giảng viên: <span>Hồ Thức Thuận</span></p>
            <div className="content">
              <p><span>0</span> Chuyên đề</p>
              <p><span>0</span> Bài học</p>
            </div>
          </div>
        </div>

          <div className="box">
       
              <img src={anh2} alt=""/>
    
            <div className="bottom">
              <p className="name">COMBO CTG VẬT LÝ 2K7 - VTA</p>
              <p className="teacher">Giảng viên: <span>Vũ Tuấn Anh</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
      
              <img src={anh3} alt="" />
    
            <div className="bottom">
              <p className="name">COMBO CTG HÓA HỌC 2K7 - PVT</p>
              <p className="teacher">Giảng viên: <span>Phạm Văn Thuận</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
    
              <img src={anh4} alt="" />
        
            <div className="bottom">
              <p className="name">COMBO CTG VĂN 2K7 - PMN</p>
              <p className="teacher">Giảng viên: <span>Phạm Minh Ngọc</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
      
              <img src={anh5} alt="" />
   
            <div className="bottom">
              <p className="name">COMBO CTG SỬ 2K7 - NHS</p>
              <p className="teacher">Giảng viên: <span>Nguyễn Hương Sen</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
      
              <img src={anh6} alt="" />
   
            <div className="bottom">
              <p className="name">COMBO CTG ĐỊA LÝ 2K7 - VTNP</p>
              <p className="teacher">Giảng viên: <span>Vũ Thị Ngọc Phước</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">

              <img src={anh7} alt="" />

            <div className="bottom">
              <p className="name">COMBO CTG SINH 2K7 - NTHT</p>
              <p className="teacher">Giảng viên: <span>Nguyễn Thị Huyền Trang</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
       
              <img src={anh8} alt="" />
 
            <div className="bottom">
              <p className="name">COMBO 4 KHÓA SUPER 1,2,3,4 - THPT</p>
              <p className="teacher">Giảng viên: <span>Trương Thị Phương Thảo</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <h2 className="title">| Lớp 11</h2>

        <div className="courses">
          <div className="box">

              <img src={anh111} alt="" />
 
            <div className="bottom">
              <p className="name">LỚP VIP TOÁN LỚP 11 HỌC KỲ 1 2K8 HỒ THỨC THUẬN</p>
              <p className="teacher">Giảng viên: <span>Hồ Thức Thuận</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
    
              <img src={anh112} alt="" />
 
            <div className="bottom">
              <p className="name">COMBO LIVE VIP LỚP 11 - KHÓA 2K8 THẦY HỒ THỨC THUẬN</p>
              <p className="teacher">Giảng viên: <span>Hồ Thức Thuận</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
    
              <img src={anh113} alt="" />
       
            <div className="bottom">
              <p className="name">LIVE VIP VẬT LÝ 11 HỌC KỲ 2 2K8 THẦY VŨ TUẤN ANH</p>
              <p className="teacher">Giảng viên: <span>Vũ Tuấn Anh</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
   
              <img src={anh114} alt="" />
    
            <div className="bottom">
              <p className="name">LIVE VIP HÓA HỌC 11 HỌC KỲ 1 2K8 THẦY PHẠM VĂN THUẬN</p>
              <p className="teacher">Giảng viên: <span>Phạm Văn Thuận</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
      
              <img src={anh115} alt="" />
    
            <div className="bottom">
              <p className="name">LIVE VIP TOÁN LỚP 11 HỌC KỲ 2 2K8 THẦY HỒ THỨC THUẬN</p>
              <p className="teacher">Giảng viên: <span>Hồ Thức Thuận</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
         
              <img src={anh116} alt="" />
        
            <div className="bottom">
              <p className="name">LIVE VIP VẬT LÝ 11 HỌC KỲ 1 2K8 THẦY VŨ TUẤN ANH</p>
              <p className="teacher">Giảng viên: <span>Vũ Tuấn Anh</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
       
              <img src={anh117} alt="" />
     
            <div className="bottom">
              <p className="name">COMBO LIVE VIP VẬT LÝ 11 - Khoá 2K8 THẦY VŨ TUẤN ANH</p>
              <p className="teacher">Giảng viên: <span>Vũ Tuấn Anh</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box">
          
              <img src={anh118} alt="" />
       
            <div className="bottom">
              <p className="name">LIVE VIP HÓA HỌC 11 HỌC KỲ 2 2K8 THẦY PHẠM VĂN THUẬN</p>
              <p className="teacher">Giảng viên: <span>Phạm Văn Thuận</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <h2 className="title">| Lớp 10</h2>

        <div className="courses" style={{display: 'flex', justifyContent:'center'}}>
          <div className="box">
   
              <img src={anh101} alt="" />

            <div className="bottom">
              <p className="name">LIVE VIP VẬT LÝ 10 HỌC KỲ 1 2K9 THẦY VŨ TUẤN ANH</p>
              <p className="teacher">Giảng viên: <span>Vũ Tuấn Anh</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box" style={{marginLeft: '15px'}}>
            <a className="top" href="./page-course-1.html">
              <img src={anh102} alt="" />
            </a>
            <div className="bottom">
              <p className="name">LIVE VIP VẬT LÝ 10 HỌC KỲ 2 2K9 THẦY VŨ TUẤN ANH</p>
              <p className="teacher">Giảng viên: <span>Vũ Tuấn Anh</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

          <div className="box" style={{marginLeft: '15px'}}>
       
              <img src={anh103} alt="" />
       
            <div className="bottom">
              <p className="name">COMBO LIVE VIP VẬT LÝ 10 - Khoá 2K9 THẦY VŨ TUẤN ANH</p>
              <p className="teacher">Giảng viên: <span>Vũ Tuấn Anh</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
      <div className="section">
      <div className="container">
        <h2 className="title">| Đại học</h2>

        <div className="courses" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="box">
            <a className="top" href="./page-course-1.html">
              <img src={dh} alt="" />
            </a>
            <div className="bottom">
              <p className="name">TTOÁN CAO CẤP</p>
              <p className="teacher">Giảng viên: <span>Đào Tuấn Anh</span></p>
              <div className="content">
                <p><span>0</span> Chuyên đề</p>
                <p><span>0</span> Bài học</p>
              </div>
            </div>
          </div>
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
