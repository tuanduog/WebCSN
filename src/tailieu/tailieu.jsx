import './tailieu.css';
import { useEffect, useState } from 'react';

const Tailieu = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    tentl: "",
    tinhtp: "",
    capDo: "Cấp độ",
    nam: "Năm",
  });
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    // get dữ liệu
    fetch('http://localhost:8081/tailieu')
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
    fetch('http://localhost:8081/tailieu/filter', {
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
      tentl: "",
      tinhtp: "",
      capDo: "Cấp độ",
      nam: "Năm",
    });
    setFilteredData(data);
  };
  return (
    <div id="main">
      
      <div className="content">
        <h1>Tài liệu ôn luyện</h1>
        <div className="loc">
          <ul>
            <li>
              <input style={{paddingLeft: '7px' ,height: '40px'}} placeholder='Tên tài liệu' type="text" id="tentl" value={filters.tentl} onChange={handleChange}/>
            </li>
            <li>
              <select style={{height: '40px', width: '150px', textAlign: 'center', marginLeft: '40px', borderRadius: '5px'}} id="tinhtp" value={filters.tinhtp} onChange={handleChange}>
                <option value="Tỉnh thành">Tỉnh thành</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Nghệ An">Nghệ An</option>
                <option value="Bình Dương">Bình Dương</option>
              </select>
            </li>
            <li>
              <select style={{height: '40px', width: '130px', textAlign: 'center', marginLeft: '40px', borderRadius: '5px'}} id="capDo" value={filters.capDo} onChange={handleChange}>
                <option value="Cấp độ">Cấp độ</option>
                <option value="Lớp 9">Lớp 9</option>
                <option value="Lớp 10">Lớp 10</option>
                <option value="Lớp 11">Lớp 11</option>
                <option value="Lớp 12">Lớp 12</option>
              </select>
            </li>
            <li>
              <select style={{height: '40px', width: '100px', textAlign: 'center', marginLeft: '20px', borderRadius: '5px'}} id="nam" value={filters.nam} onChange={handleChange}>
                <option value="Năm">Năm</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </li>
            <li>
              <button  id="tk" onClick={handleFilter}>
                Tìm Kiếm
              </button>
            </li>
            <li>
              <button  style={{marginLeft: '-100px', width:'60px', height: '40px', borderRadius: '5px'}} onClick={handleReset}>
                Hủy
              </button>
            </li>
          </ul>
        </div>
      
        <h4 style={{marginTop: '20px'}}>Tên tài liệu</h4>
        <table>
          <thead>
            <tr>
              <th>Tên tài liệu</th>
              <th>Hành Động</th>
              <th>Tỉnh/TP</th>
              <th>Năm</th>
              <th>Cấp Độ</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
              <td>{row.tentailieu}</td>
              <td>
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#c4423e',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '15px',
                  }}
                >
                  Xem
                </a>
              </td>
              <td>{row.tinhtp}</td>
              <td>{row.nam}</td>
              <td>{row.capdo}</td>
            </tr>
            ))}
          
          </tbody>
        </table>
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
    </div>
  );
};

export default Tailieu;
