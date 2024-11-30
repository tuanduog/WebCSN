import QRcode from "../assets/QR.png"
<<<<<<< HEAD

const QRPay = () =>{
=======
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../data/data";
import axios from "axios";
const QR = () =>{
    const navigate = useNavigate();
    
    const location = useLocation();
    const {pdid} = location.state ||{};
    const {e} = location.state || {};
    const {a} = location.state  || {};
    const {p} = location.state  || {};
    const {total} = location.state || {};
>>>>>>> 8ca66398eadca2f0651aa55822242ee84031b78b
    const handleSuccess = () => {
        alert('Bạn đã thanh toán thành công đơn hàng!');
        navigate('/YourCourse', {state: {pdid}});
    }
    const product = data.product_data.find((item) => item.id === pdid);

    const handleToYourCart = () => {
        alert('Bạn đã thanh toán thành công đơn hàng!');
        if (!product) {
          alert('Product not found!');
          return;
        }
      
        const productData = {
          anhsp: product.anh,
          tensp: product.tensp,
          tengv: product.tengv, 
          gia: product.gia,
          soluong: product.soluong,
          lop: product.lop,
          mon: product.mon
        };
      
        console.log('Sending product data:', productData);
      
        axios.post('http://localhost:8081/products', productData, { withCredentials: true })
          .then((res) => {
            console.log('Server response:', res.data);
            if (res.data.Status === "success") {
              alert('Khoá học đã được thêm vào cho bạn');
              navigate('/YourCourse');
            } else {
              alert('Error: ' + res.data.Error);
            }
          })
          .catch((err) => {
            console.error('Error adding to cart:', err.response?.data || err.message);
            alert('An error occurred while adding the product to the cart.');
          });
      };
    return (
        <div className="row"> 
        <div className="col">
            <h4>Thông tin của bạn</h4>
            <p>Họ và Tên: </p>
            <p>Địa chỉ: {a ||'No address provided'}</p>
            <p>Email: {e || 'No email provided'}</p>
            <p>Số điện thoại: {p || 'No phone number provided'}</p>
            <p>Phương thức thanh toán: QR Pay</p>
            <p>Tổng số tiền: {Intl.NumberFormat("de-DE").format(total)} đ</p>
        </div>
        <div className="col">
            <p className="text-center">Quét mã QR dưới đây bằng ứng dụng internet banking để thanh toán</p>
            <p className="text-center">Mã QR sẽ hết hạn sau 24h</p>
            <img className="rounded mx-auto d-block" src={QRcode} alt="" style={{width:"30%"}}/>
            <p className="mt-2 text-center">Mã hoá đơn: 2000000343</p>
            <div className="text-center">
            <button className="btn btn-primary " type="submit" onClick={handleToYourCart}>Tôi đã hoàn tất thanh toán</button>
            </div>
            
        </div>
        </div>
    )
}
export default QRPay;