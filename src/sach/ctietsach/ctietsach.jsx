import "./style.css";
import { useState } from 'react';



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