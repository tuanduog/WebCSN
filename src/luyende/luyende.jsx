
import '../luyende/luyende.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../assets/background.svg';
import { useEffect, useState } from 'react';

const Luyende = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    maDe: "",
    giangVien: "Tất cả",
    monHoc: "Chọn...",
    capDo: "Chọn..."
  });
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    // Gọi API để lấy dữ liệu
    fetch('http://localhost:8081/luyende')
      .then(response => response.json())
      .then(result => {
        setData(result);
        setFilteredData(result);
      })
      .catch(error => {
        console.error('Lỗi:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFilters({ ...filters, [id]: value });
  };
  const handleFilter = () => {
    fetch('http://localhost:8081/luyende/filter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filters),
    })
      .then((response) => response.json())
      .then((result) => {
        setFilteredData(result);
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      });
  };

  // Xóa bộ lọc
  const handleReset = () => {
    setFilters({
      name: "",
      maDe: "",
      giangVien: "Tất cả",
      monHoc: "Chọn...",
      capDo: "Chọn...",
    });
    setFilteredData(data);
  };
  
  return (
    <div id="main">
      <div
    className="header text-center"
    style={{
        backgroundImage: `url(${background})`,
        height: '250px',
    }}
    >
        <h1>Luyện Đề</h1>
        <p>Giải đề là cách tổng hợp kiến thức nhanh và dễ dàng nhất!</p>
        </div>
        <div className="container filter-section">
  <div className="row">
    <div className="col-md-3">
      <button className="btn btn-light equal-height">
        Đề kiểm tra 1 tiết chương 4,5 - Lớp 12
      </button>
    </div>
    <div className="col-md-3">
      <button className="btn btn-light equal-height">
        Chương 5. Sóng ánh sáng - Lớp 12
      </button>
    </div>
    <div className="col-md-3">
      <button className="btn btn-light equal-height">
        Chương 4. Dao động và sóng điện từ - Lớp 12
      </button>
    </div>
    <div className="col-md-3">
      <button className="btn btn-light equal-height">
        Chương 3. Điện xoay chiều - Lớp 12
      </button>
    </div>
  </div>

  <form className="row mt-4">
    <div className="col-md-2">
      <label htmlFor="name">Tên</label>
      <input
        type="text"
        className="form-control"
        placeholder="Nhập tên"
        id="name"
        style={{height: '38px', borderRadius: '3px', fontSize: '16px'}}
        value={filters.name}
        onChange={handleChange}
      />
    </div>
    <div className="col-md-2">
      <label htmlFor="maDe">Mã đề</label>
      <input
        type="text"
        className="form-control"
        placeholder="Nhập mã đề"
        id="maDe"
        style={{height: '38px', borderRadius: '3px', fontSize: '16px'}}
        value={filters.maDe}
        onChange={handleChange}
      />
    </div>
    <div className="col-md-2">
      <label htmlFor="mucDoSelect">Giảng viên</label>
      <select className="form-select" id="giangVien" value={filters.giangVien} onChange={handleChange}>
        <option value="Tất cả">Tất cả</option>
        <option value="Thầy Hồ Thức Thuận">Thầy Hồ Thức Thuận</option>
        <option value="Thầy Vũ Tuấn Anh">Thầy Vũ Tuấn Anh</option>
        <option value="Cô Huyền Trang">Cô Huyền Trang</option>
        <option value="Thầy Nhật">Thầy Nhật</option>
        <option value="Cô Phước">Cô Phước</option>
      </select>
    </div>
    <div className="col-md-2">
      <label htmlFor="monHocSelect">Môn học</label>
      <select className="form-select" id="monHoc" value={filters.monHoc} onChange={handleChange}>
        <option value="Chọn...">Chọn...</option>
        <option value="Vật lý">Vật lý</option>
        <option value="Hóa học">Hóa học</option>
        <option value="Toán">Toán</option>
        <option value="Tiếng Anh">Tiếng Anh</option>
        <option value="Ngữ Văn">Ngữ Văn</option>
        <option value="Sinh học">Sinh học</option>
      </select>
    </div>
    
    <div className="col-md-2">
      <label htmlFor="capDoSelect">Cấp độ</label>
      <select className="form-select" id="capDo" value={filters.capDo} onChange={handleChange}>
        <option value="Chọn...">Chọn...</option>
        <option value="Lớp 10">Lớp 10</option>
        <option value="Lớp 11">Lớp 11</option>
        <option value="Lớp 12">Lớp 12</option>
      </select>
    </div>
  </form>

    <button className="btn btn-primary mt-3" onClick={handleFilter}>
    <i className="fa fa-filter" aria-hidden="true"></i> Lọc
    </button>
    <button className="btn btn-secondary mt-3" onClick={handleReset}>Bỏ lọc</button>
    </div>
    <div className="container table-section">
  <table className="table table-bordered">
    <thead>
      <tr style={{textAlign: 'center'}}>
        <th>No</th>
        <th>Mã đề</th>
        <th>Tiêu đề</th>
        <th>Môn</th>
        <th>Giảng Viên</th>
        <th>Ngày mở đề</th>
        <th>Cấp độ</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
        {filteredData.map((row, index) => (
        <tr key={index} style={{ textAlign: 'center' }}>
          <td>{index + 1}</td>
          <td>{row.deid}</td>
          <td>{row.tende}</td>
          <td>{row.mon}</td>
          <td>{row.giangvien}</td>
          <td>{row.ngaymode}</td>
          <td>{row.capdo}</td>
          <td>
            <button className="btn btn-success">Làm Đề</button>
          </td>
        </tr>
        ))}

      </tbody>
    </table>
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

export default Luyende;
