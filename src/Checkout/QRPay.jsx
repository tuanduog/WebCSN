import QRcode from "../assets/QR.png"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const QR = () =>{
    const navigate = useNavigate();
    
    const location = useLocation();
    const {e} = location.state || {};
    const {a} = location.state  || {};
    const {p} = location.state  || {};
    const {total} = location.state || {};

    const handleToYourCart = () => {
        alert("Bạn đã thanh toán thành công!");
        navigate("/yourCourse");
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
export default QR;