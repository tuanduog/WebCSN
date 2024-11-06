import React from "react";
import "./khoahoc.css"
import logo from "../assets/logo-land.png";
import avatar from "../assets/avatar.jpg";
import dropdownIcon from "../assets/drop.png";
import { useState } from 'react';
import search from "../assets/search.png"
import { Link } from "react-router-dom"

const khoahoc = () =>{
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
   
     <div className="row ">
         
         <div className="col">
             <img  src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg" alt="COMBO 3 SACH" width="450px" height="320px" />
       
         </div>
         <div className="col">
             <h2 className="fw-bold" style={{color:'black'} }>LIVE G -Tổng ôn - Toán học 2K6 - HTT</h2>
            
             <p style={{fontWeight:"bold"}}>Giảng viên: Hồ Đức Thuận</p>
             <p>Tình trạng: Còn hàng</p>
             <div className="p-3 mt-3 mb-3 col-12 bg-light d-flex align-items-center justify-content-start pricing">
                <span className="p-2 old-price fw-bold">
                    <del>2,700,000 đ</del>
                </span>
                <span className="p-2 final-price fw-bold">
                    1,350,000 đ
                    
                    <span className="badge badge-danger ms-4 pb-1 mb-2" style={{backgroundColor:'red'}}> - 50%</span>
                </span>
                </div>

              <div className="row justify-content-between p-2">
          
                 <span className="col">
                 Môn: Toán học
                  
                 </span>
                 <span className="col">
                 
                 Cấp độ: Lớp 11
                 </span>
                 <span className="col">
                 
                 Video: 0 video
                 </span>
                 <span className="col">
                 Thời lượng: 0 phút
                 </span>
              </div>
              <p className="fw-bold">Hotline: 0934.556.247 </p>
              <a href="" className="btn btn-primary p-2 m-10  ">Hướng dẫn đăng ký</a>
              
         </div>

         <div className="row " style={{border:"none"}}>
          <div className="col-8 ">

  <div className="card text-center "  >
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="true" href="#">Comment - Đánh giá</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Thông tin khoá học</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div className="card-body" style={{backgroundColor:"#edf1f4"}}>
      <div className="card " >
        <div className="row" >
          <div className="col-2" >
            <img src={avatar} alt="" />
          </div>
          <div className="col" >
          <div class="card-body" style={{backgroundColor:"white",border:"none"} } >
        
        <p class="card-text" >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
          </div>
        </div>
      </div>
      <div className="card " >
        <div className="row">
          <div className="col-2" >
            <img src={avatar} alt="" />
          </div>
          <div className="col" >
          
          <div class="card-body " style={{backgroundColor:"white"}}>
        
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
          </div>
        </div>
      </div>
      <div className="card ">
        <div className="row">
          <div className="col-2">
            <img src={avatar} alt="" />
          </div>
          <div className="col">
          <div class="card-body" style={{backgroundColor:"white"}}>
        
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
          </div>
        </div>
      </div>
      <div class="form-floating" style={{backgroundColor:"white"}}>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
  <label for="floatingTextarea2">Comments</label>
  <a href="" className="btn btn-primary float-end p-2 m-2">Gửi bình luận </a>
</div>
          
  </div>
</div>
         </div>
         <div className="col">
          
         </div>
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
export default khoahoc;