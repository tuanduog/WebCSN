import '../sach/sach.css';
import { useNavigate } from 'react-router-dom';
import data_sach from '../data/data_sach';

const Sach = () => {
  const navigate = useNavigate();
  const handlePick = (sachid) => {
    navigate('/ctietsach', {state: {sachid}});
  }

  return (
    <div>
        <div id="main">
        
  <div className="con">
    <ul className="dm" style={{ padding: "10px 60px", backgroundColor: "#fffbfb" }}>
      <li>
        <a href="#">CÁC ĐẦU SÁCH HOT</a>
      </li>
      <li>
        <a href="#">SÁCH CHUYÊN ĐỀ LUYỆN THI THPT QG</a>
      </li>
    </ul>
    <h1>TẤT CẢ SÁCH</h1>
    <br></br>
    <div className="dms">
      <ul className="dmsach">
        <h4>Danh mục Sách</h4>
        <li>
          <a href="#">CÁC ĐẦU SÁCH HOT</a>
        </li>
        <li>
          <a href="#">SÁCH CHUYÊN ĐỀ LUYỆN THI THPT QG</a>
        </li>
      </ul>
      <div className="s">
        <ul className="sach">
        {data_sach.sach_data
        .filter((book) => book.id >= 1 && book.id <= 3)
        .map((book) => (
        <li key={book.id}>
          <div
            className="card"
            style={{ width: "16rem" }} 
          >
        <img
          className="card-img-top"
          src={book.anhsach}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{book.tensach}</h5>
          <p className="card-text" style={{ marginBottom: "0.1rem" }}>
            <span>
              Tác giả: <strong>{book.tacgia}</strong>
            </span>
          </p>
          <strong style={{ marginBottom: "0.1rem", stroke: 'none', color: 'red'}}>
            {Intl.NumberFormat('de-DE').format(book.gia)} đ
          </strong>
         
            <div className="btn btn-primary d-flex" style={{justifyContent: 'center'}} onClick={() => handlePick(book.id)} >Tham khảo thêm</div>

            </div>
          </div>
        </li>
          ))}

          
        </ul>
        <ul className='sach'>
        {data_sach.sach_data
        .filter((book) => book.id >= 2 && book.id <= 4)
        .map((book) => (
        <li key={book.id}>
          <div
            className="card"
            style={{ width: "16rem" }}
        
          >
        <img
          className="card-img-top"
          src={book.anhsach}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{book.tensach}</h5>
          <p className="card-text" style={{ marginBottom: "0.1rem" }}>
            <span>
              Tác giả: <strong>{book.tacgia}</strong>
            </span>
          </p>
          <strong style={{ marginBottom: "0.1rem", stroke: 'none', color: 'red'}}>
            {Intl.NumberFormat('de-DE').format(book.gia)} đ
          </strong>
    
          <div className="btn btn-primary d-flex" style={{justifyContent: 'center'}} onClick={() => handlePick(book.id)} >Tham khảo thêm</div>
   
            </div>
          </div>
        </li>
          ))}
        </ul>
        <ul className='sach'>
        {data_sach.sach_data
        .filter((book) => book.id >= 1 && book.id <= 3)
        .map((book) => (
        <li key={book.id}>
          <div
            className="card"
            style={{ width: "16rem" }}
          >
        <img
          className="card-img-top"
          src={book.anhsach}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{book.tensach}</h5>
          <p className="card-text" style={{ marginBottom: "0.1rem" }}>
            <span>
              Tác giả: <strong>{book.tacgia}</strong>
            </span>
          </p>
          <strong style={{ marginBottom: "0.1rem", stroke: 'none', color: 'red'}}>
            {Intl.NumberFormat('de-DE').format(book.gia)} đ
          </strong>

          <div className="btn btn-primary d-flex" style={{justifyContent: 'center'}} onClick={() => handlePick(book.id)} >Tham khảo thêm</div>

            </div>
          </div>
        </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

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
  )
}

export default Sach
