
import './find_result/find_result.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
const YourCourse = () => {
  
  const [products, setProducts] = useState([]); 
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8081/khoahoccuatoi', {
          withCredentials: true, 
        });
  
        if (response.data.Status === "success") {
          setProducts(response.data.Products);
        } else {
          console.error('No products found');
        }
      } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message);
      }
    };
  
    fetchProducts();
  }, []);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8081/sachcuatoi', {
          withCredentials: true, 
        });
  
        if (response.data.Status === "success") {
          setBooks(response.data.Books);
        } else {
          console.error('No products found');
        }
      } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message);
      }
    };
  
    fetchBooks();
  }, []);
  return (
    <div className="section">
      <div className="container">
        
        <h2>Khóa học:</h2>

        <div className="courses">
            {products.map((product) =>(
                <div
                className="box"
                key={product.productid}
                style={{ cursor: 'pointer', padding: '5px', marginLeft: '10px'
                }}
                
              >
                <img src={product.anhsp} alt={product.tensp} className="box-img" />
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
          <br/>
          <h2>Sách:</h2>
          <br/>
        <div className="courses">
            {books.map((book) =>(
                <div
                className="box"
                key={book.sachid}
                style={{ cursor: 'pointer', padding: '5px', marginLeft: '10px'
                }}
               
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

export default YourCourse;
