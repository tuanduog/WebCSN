import './tailieu.css';


const Tailieu = () => {
  
  return (
    <div id="main">
      
      <div className="content">
        <h1>Thư viện đề thi môn Toán</h1>
        <div className="loc">
          <ul>
            <li>
              <select name="mon" id="mon">
                <option value="">Toán</option>
              </select>
            </li>
            <li>
              <input type="text" name="ten" placeholder="Tên đề thi" id="ten" />
            </li>
            <li>
              <select name="mh" id="mh">
                <option value="">Tỉnh thành</option>
                <option value="hn">Hà Nội</option>
                <option value="nd">Nam Định</option>
                <option value="th">Thanh Hóa</option>
              </select>
            </li>
            <li>
              <select name="cd" id="cd">
                <option value="">Cấp độ</option>
                <option value="12">Lớp 12</option>
                <option value="9">Lớp 9</option>
                <option value="10">Lớp 10</option>
              </select>
            </li>
            <li>
              <select name="n" id="n">
                <option value="">Năm</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </li>
            <li>
              <button onClick={() => console.log('Tìm kiếm')} id="tk">
                Tìm Kiếm
              </button>
            </li>
          </ul>
        </div>
      
        <h4 style={{marginTop: '8px'}}>Tên đề thi</h4>
        <table>
          <thead>
            <tr>
              <th>Tên Đề Thi</th>
              <th>Hành Động</th>
              <th>Tỉnh/TP</th>
              <th>Năm</th>
              <th>Cấp Độ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Đề thi toán 9 vào 10 trường chuyên ABC môn toán</td>
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
              <td>Thái Bình</td>
              <td>2020</td>
              <td>Lớp 9</td>
            </tr>
            <tr>
              <td>Đề thi toán 9 vào 10 trường chuyên ABC môn toán</td>
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
              <td>Thái Bình</td>
              <td>2020</td>
              <td>Lớp 9</td>
            </tr>
            <tr>
              <td>Đề thi toán 9 vào 10 trường chuyên ABC môn toán</td>
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
              <td>Thái Bình</td>
              <td>2020</td>
              <td>Lớp 9</td>
            </tr>
            <tr>
              <td>Đề thi toán 9 vào 10 trường chuyên ABC môn toán</td>
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
              <td>Thái Bình</td>
              <td>2020</td>
              <td>Lớp 9</td>
            </tr>
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
