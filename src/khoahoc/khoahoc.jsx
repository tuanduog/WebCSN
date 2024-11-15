import "./khoahoc.css";
import 'bootstrap/dist/css/bootstrap.css';
import avatar from "../assets/avatar.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartLine, faCirclePlay, faClock } from "@fortawesome/free-solid-svg-icons";
import data from "../data/data";
import axios from 'axios';

const Khoahoc = () => {
  // Access the first product in your product_data array
  const product = data.product_data[0];

  const handleAddToCart = () => {
    const productData = {
      anhsp: product.anh,
      tensp: product.tensp,
      tengv: product.tengv,
      gia: product.gia,
      soluong: product.soluong
    };
  
    axios.post('http://localhost:8081/products', productData)
      .then(res => {
        if (res.data.Status === "sucess") {
          alert('Thêm sản phẩm vào giỏ hàng thành công!');
        }
      })
      .catch(err => {
        console.error('Error adding to cart:', err);
        alert('An error occurred while adding the product to the cart.');
      });
  };
  
    return (
        <div >
        <div className="row">
         <div className="col" style={{ display: 'flex', justifyContent: 'center'}}>
             <img  src={product.anh} alt="COMBO 3 SACH" width="330px" height="auto"/>
       
         </div>
         <div className="col" >
             <h2 className="fw-bold" style={{color:'black'} }>{product.tensp}</h2>
            
             <p style={{fontWeight:"bold"}}>Giảng viên: {product.tengv}</p>
             <p>Tình trạng: Còn hàng</p>
             <div className="p-3 mt-3 mb-3 col-12 bg-light d-flex align-items-center justify-content-start pricing">
                <span className="p-2 old-price fw-bold">
                    <del>2,700,000 đ</del>
                </span>
                <span className="p-2 final-price fw-bold">
                    {product.gia}
                    
                    <span className="badge badge-danger ms-4 pb-1 mb-2" style={{backgroundColor:'red',color:"white"}}> - 50%</span>
                </span>
                </div>

              <div className="row justify-content-between p-2">

                 <span className="col">
                  <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                 <span>  Môn: Toán học</span>
                  
                 </span>
                 <span className="col">
                  <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
                 <span>  Cấp độ: Lớp 11</span>
                 </span>
                 <span className="col">
                 <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>
                 <span>  Video: 0 video</span>
                 </span>
                 <span className="col">
                  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                 <span>  Thời lượng: 0 phút</span>
                 </span>
              </div>
              <p className="fw-bold text-danger">Hotline: 0934.556.247 </p>
              <button className="btn btn-primary p-2 fw-bold" onClick={handleAddToCart}>Mua khóa học</button>     {/* test*/}
              <a className="btn btn-primary p-2 mx-4 fw-bold">Thêm vào giỏ</a>
         </div>
         <div className="row">
         <div className="col">
         <div className="row " style={{border:"none"}}>
          <div className="col-8 ">

  <div className="card text-center ">
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
          <div className="card-body" style={{backgroundColor:"white",border:"none"} } >
        
        <p className="card-text" >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
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
          
          <div className="card-body " style={{backgroundColor:"white"}}>
        
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
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
          <div className="card-body" style={{backgroundColor:"white"}}>
        
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
          </div>
        </div>
      </div>
      <div className="form-floating" style={{backgroundColor:"white"}}>
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
  <label htmlFor="floatingTextarea2">Comments</label>
  <a href="" className="btn btn-primary float-end p-2 m-2">Gửi bình luận </a>
</div>
          
  </div>
</div>
         </div>
         <div className="col">
            <div className="row bg-danger" >
              <h4 className="border-0 text-light ms-0">KHOÁ HỌC LIÊN QUAN</h4>
            </div>
            <div className="row bg-light">
             
              <a className="col-3 m-0" href=""> 
                <img src="	https://d3484gt1o8rlzm.cloudfront.net/mclass/course/CB2K8T10/CB2K8T10_1687925927.jpg" alt="" style={{width:"150%"}}/>

              </a>
              <div className="col-1 "></div>
              <div className="col">
                
              <li ><a className= "fw-bold" style={{fontSize:"15px",color:"black"}} href="">COMBO LIVE VIP TOÁN 10 - Khóa 2K8 THẦY LÂM</a>
                <p>Giảng viên: <a href=""><img id="poster1" src="https://d3484gt1o8rlzm.cloudfront.net/mclass/images/lecturers/GT1001.jpg?v=20220228140420" alt="" style={{width:"5%"}}/><strong>Trần Lâm</strong></a></p>  
                <span class=""><strike>400,000đ</strike>
                <span style={{color:"red",fontSize:"10px",fontWeight:"700"}}>1,600,000đ</span>
                </span></li>
              </div>
            </div>
            <div className="row bg-light">
             
              <a className="col-3 m-0" href=""> 
                <img src="	https://d3484gt1o8rlzm.cloudfront.net/mclass/course/CB2K8T10/CB2K8T10_1687925927.jpg" alt="" style={{width:"150%"}}/>

              </a>
              <div className="col-1 "></div>
              <div className="col">
                
              <li ><a className= "fw-bold" style={{fontSize:"15px",color:"black"}} href="">COMBO LIVE VIP TOÁN 10 - Khóa 2K8 THẦY LÂM</a>
                <p>Giảng viên: <a href=""><img id="poster1" src="https://d3484gt1o8rlzm.cloudfront.net/mclass/images/lecturers/GT1001.jpg?v=20220228140420" alt="" style={{width:"5%"}}/><strong>Trần Lâm</strong></a></p>  
                <span class=""><strike>400,000đ</strike>
                <span style={{color:"red",fontSize:"10px",fontWeight:"700"}}>1,600,000đ</span>
                </span></li>
              </div>
            </div>
            <div className="row bg-light">
             
              <a className="col-3 m-0" href=""> 
                <img src="	https://d3484gt1o8rlzm.cloudfront.net/mclass/course/CB2K8T10/CB2K8T10_1687925927.jpg" alt="" style={{width:"150%"}}/>

              </a>
              <div className="col-1 "></div>
              <div className="col">
                
              <li ><a className= "fw-bold" style={{fontSize:"15px",color:"black"}} href="">COMBO LIVE VIP TOÁN 10 - Khóa 2K8 THẦY LÂM</a>
                <p>Giảng viên: <a href=""><img id="poster1" src="https://d3484gt1o8rlzm.cloudfront.net/mclass/images/lecturers/GT1001.jpg?v=20220228140420" alt="" style={{width:"5%"}}/><strong>Trần Lâm</strong></a></p>  
                <span class=""><strike>400,000đ</strike>
                <span style={{color:"red",fontSize:"10px",fontWeight:"700"}}>1,600,000đ</span>
                </span></li>
              </div>
            </div>
            <div className="row bg-light">
             
              <a className="col-3 m-0" href=""> 
                <img src="	https://d3484gt1o8rlzm.cloudfront.net/mclass/course/CB2K8T10/CB2K8T10_1687925927.jpg" alt="" style={{width:"150%"}}/>

              </a>
              <div className="col-1 "></div>
              <div className="col">
                
              <li ><a className= "fw-bold" style={{fontSize:"15px",color:"black"}} href="">COMBO LIVE VIP TOÁN 10 - Khóa 2K8 THẦY LÂM</a>
                <p>Giảng viên: <a href=""><img id="poster1" src="https://d3484gt1o8rlzm.cloudfront.net/mclass/images/lecturers/GT1001.jpg?v=20220228140420" alt="" style={{width:"5%"}}/><strong>Trần Lâm</strong></a></p>  
                <span class=""><strike>400,000đ</strike>
                <span style={{color:"red",fontSize:"10px",fontWeight:"700"}}>1,600,000đ</span>
                </span></li>
              </div>
            </div>
         </div>
         </div>
     </div>
     </div>
     <div className="col"></div>
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
export default Khoahoc;