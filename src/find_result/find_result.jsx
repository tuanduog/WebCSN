import { useLocation } from 'react-router-dom';
import data_sach from '../data/data_sach.jsx';
import '../find_result/find_result.css';
import data from '../data/data.jsx';
import { useNavigate } from 'react-router-dom';

const FindResult = () => {
  const location = useLocation();
  const query = location.state?.query || ''; 
  const navigate = useNavigate();
  const handlePickBook = (sachid) => {
    navigate('/ctietsach', {state: {sachid}});
  }
  const handlePickProduct = (productid) => {
    navigate('/khoahoc/khoahoc', {state: {productid: productid}});
  }

  const { sach_data = [] } = data_sach || {};
  const { product_data = [] } = data || {};

  const fitBooks = sach_data.filter((book) =>
    book.tensach.toLowerCase().includes(query.toLowerCase())
  );

  const fitProducts = product_data.filter((product) =>
    product.tensp.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="section">
      <div className="container">
        <h2 className="title">| {query ? `Kết quả tìm kiếm cho "${query}"` : 'Tất cả sản phẩm'}</h2>
        <h2>Sách:</h2>
        {fitBooks.length > 0 ? (
        <div className="courses" >
          {fitBooks.map((book) => (
              <div
              className="box"
              key={book.id}
              style={{ cursor: 'pointer', padding: '5px'}}
              onClick={() => handlePickBook(book.id)}
            >
              <img src={book.anhsach} alt={book.tensach} className="box-img" />
              <div className="bottom">
                <p className="name">{book.tensach}</p>
                <span style={{color: 'black'}}>Giá bán: </span><span style={{color: 'red', fontWeight: 'bold'}}>{Intl.NumberFormat('de-DE').format(book.gia)} đ</span>
                <p className="teacher" style={{color: 'black', paddingTop: '3px'}}>
                  Tác giả: <span>{book.tacgia}</span>
                </p>
                
              </div>
            </div>
          ))}
          </div>   
        ) : (
          <p>Không tìm thấy kết quả nào cho sách</p>
        )} 
        <h2>Khóa học:</h2>
        {fitProducts.length > 0 ? (
        <div className="courses">
          {fitProducts.map((product) => (
              <div
              className="box"
              key={product.id}
              style={fitProducts.length < 4 ? { cursor: 'pointer', padding: '5px', marginLeft: '10px'
              }:{cursor: 'pointer', padding: '5px'}}
              onClick={() => handlePickProduct(product.productid)}
            >
              <img src={product.anh} alt={product.tensp} className="box-img" />
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
        ) : (
          <p>Không tìm thấy kết quả nào cho khóa học</p>
        )} 
      </div><br/><br/>
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

export default FindResult;
