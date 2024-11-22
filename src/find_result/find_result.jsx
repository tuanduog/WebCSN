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
        <div className="courses" style={fitBooks.length < 4 ? {display: 'flex', justifyContent: 'center'}:{}}>
          {fitBooks.map((book) => (
              <div
              className="box"
              key={book.id}
              style={fitBooks.length < 4 ? { cursor: 'pointer', padding: '5px', marginLeft: '10px'}:{ cursor: 'pointer', padding: '5px'}}
              onClick={() => handlePickBook(book.id)}
            >
              <img src={book.anhsach} alt={book.tensach} className="box-img" />
              <div className="bottom">
                <p className="name">{book.tensach}</p>
                <p className="teacher">
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
        <div className="courses" style={fitProducts.length < 4 ? {display: 'flex', justifyContent: 'center'} : {}}>
          {fitProducts.map((product) => (
              <div
              className="box"
              key={product.id}
              style={fitProducts.length < 4 ? { cursor: 'pointer', padding: '5px', marginLeft: '10px'
              }:{cursor: 'pointer', padding: '5px'}}
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
      </div>
    </div>
  );
};

export default FindResult;
