import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "./authContext";
import axios from 'axios';
import data_sach from './data/data_sach';

const Ctietsach = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sachid = location.state?.sachid;

  const sach = data_sach.sach_data.find((item) => item.id === sachid);

  const { auth } = useAuth();

  const handleBefortLog = () => {
    alert('Bạn cần đăng nhập trước khi thực hiện các chức năng của hệ thống');
    navigate('/login/login');
  };

  const handleAddToCart = () => {
    const bookData = {
      anhsach: sach.anhsach,
      tensach: sach.tensach,
      tacgia: sach.tacgia,
      soluong: sach.soluong,
      gia: sach.gia,
    };

    console.log('Sending book data:', bookData);

    axios.post('http://localhost:8081/books', bookData, { withCredentials: true })
      .then((res) => {
        console.log('Server response:', res.data);
        if (res.data.Status === "success") {
          alert('Thêm sản phẩm vào giỏ hàng thành công!');
        } else {
          alert('Error: ' + res.data.Error);
        }
      })
      .catch((err) => {
        console.error('Error adding to cart:', err.response?.data || err.message);
        alert('An error occurred while adding the product to the cart.');
      });
  };

  const formattedGia = sach ? new Intl.NumberFormat('de-DE').format(sach.gia) : '';

  return (
    <div>
      <div className="row">
        <div className="col">
          <img src={sach.anhsach} alt={sach.tensach} width="350px" height="250px" style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}/>
        </div>
        <div className="col">
          <h2 style={{ color: 'red', fontWeight: "bold" }}>{sach.tensach}</h2>
          <span className="gia" style={{ textDecoration: "underline" }}>Giá: {formattedGia}đ</span>
          <p style={{ fontWeight: "bold", paddingTop: '7px' }}>Tác giả: {sach.tacgia}</p>
          <p>Tình trạng: Còn hàng</p>

          <div className="d-flex align-items-center">
            <button className="btn btn-primary">-</button>
            <input
              type="number"
              className="form-control mx-2 center-text-input"
              value={sach.soluong}
              min="1"
              style={{ width: '60px' }}
              readOnly
            />
            <button className="btn btn-primary">+</button>
          </div>

          <form>
            <label htmlFor="soluong" style={{ paddingTop: '20px' }}>
              
              {auth ? (
                <button type="button" className="btn btn-danger" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
              ) : (
                <button type="button" className="btn btn-danger" onClick={handleBefortLog}>Thêm vào giỏ hàng</button>
              )}
            </label>
          </form>
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

export default Ctietsach;
