import QRcode from "../assets/QR.png"

const QRPay = () =>{
    const handleSuccess = () => {
        alert('Bạn đã thanh toán thành công đơn hàng!');
    }
    return (
        <div className="row"> 
        <div className="col">
            <h4>Thông tin của bạn</h4>
            <p>Họ và Tên: </p>
            <p>Địa chỉ: </p>
            <p>Phương thức thanh toán: QR Pay</p>
            <p>Tổng số tiền: </p>
        </div>
        <div className="col">
            <p className="text-center">Quét mã QR dưới đây bằng ứng dụng internet banking để thanh toán</p>
            <p className="text-center">Mã QR sẽ hết hạn sau 24h</p>
            <img className="rounded mx-auto d-block" src={QRcode} alt="" style={{width:"30%"}}/>
            <p className="mt-2 text-center">Mã hoá đơn: 2000000343</p>
            <div className="text-center">
            <button className="btn btn-primary " type="submit" onClick={handleSuccess}>Tôi đã hoàn tất thanh toán</button>
            </div>
            
        </div>
        </div>
    )
}
export default QRPay;