import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import data from '../data/data';

const Checkout = () =>{
  const location = useLocation();
  const { chosenBooks = [], chosenProducts = [] } = location.state || {};
  const [total, setTotal] = useState(0);
  const [code, setCode] = useState("");
  const [discountUsed, setdiscountUsed] = useState(false);
  const [count, setCount] = useState(0);

  const pdid = location.state?.productid;
  const pd = data.product_data.find((item) => item.id === pdid);
  
  useEffect(() => {
    let totalPrice =
      chosenProducts.reduce((total, product) => total + product.gia * product.soluong, 0) +
      chosenBooks.reduce((total, book) => total + book.gia * book.soluong, 0);
      if(pd){
        totalPrice += pd.gia;
      }
      if (discountUsed) {
        totalPrice *= 0.95; 
      }
    setTotal(totalPrice);
  }, [chosenProducts, chosenBooks, pd, discountUsed]);
  useEffect(() => {
    const sl = chosenBooks.reduce((count, book) => count + book.soluong, 0) +
    chosenProducts.reduce((count, product) => count + product.soluong, 0);
    setCount(sl);
  }, [chosenBooks, chosenProducts, pd]); // hooks alwways top level of function => để dưới là lỗi
  const handleCOD = () => {
    if(chosenBooks.length === 0){
      alert('Sản phẩm bạn muốn mua không hỗ trợ phương thức thanh toán này!');
    }
  }
  const handleReduce = () => {
    if(code === 'tuanduog' && !discountUsed){
      let discount = 0;
      if (pd) {
        discount = pd.gia * 0.05;
        setTotal((prevTotal) => prevTotal - discount); 
      } else {
   
        discount = total * 0.05;
        setTotal((prevTotal) => prevTotal - discount);
      }
      setdiscountUsed(true);
      alert('Khuyến mãi được áp dụng!')
    } else if (discountUsed && code === 'tuanduog'){
      alert('Mã khuyến mãi này đã được áp dụng!');
    } else {
      alert('Mã khuyến mãi không hợp lệ!');
    }
  }
  return(

    <div className="container">
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Giỏ hàng</span>
            <span className="badge badge-secondary badge-pill">{count || 1}</span>
          </h4>
          <ul className="list-group mb-3">
          {
          pd ? (
            <div key={pd.id}>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0" style={{ width: "250px" }}>{pd.tensp}</h6>
                  <small className="text-muted">Số lượng: 1</small>
                </div>
                <span className="text-muted">
                  {Intl.NumberFormat("de-DE").format(pd.gia)}
                </span>
              </li>
            </div>
          ) : (
            <>
              {chosenProducts.map((product) => (
                <div key={product.productid}>
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0" style={{ width: '250px' }}>{product.tensp}</h6>
                      <small className="text-muted">Số lượng: {product.soluong}</small>
                    </div>
                    <span className="text-muted">{Intl.NumberFormat("de-DE").format(product.gia)}</span>
                  </li>
                </div>
              ))}
              {chosenBooks.map((book) => (
                <div key={book.sachid}>
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0" style={{ width: '250px' }}>{book.tensach}</h6>
                      <small className="text-muted">Số lượng: {book.soluong}</small>
                    </div>
                    <span className="text-muted">{Intl.NumberFormat("de-DE").format(book.gia)}</span>
                  </li>
                </div>
              ))}
            </>
          )
        }

            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Mã thẻ khuyến mại</h6>
                <small>tuanduog</small>
              </div>
              <span className="text-success">- 5%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span><strong style={{color: 'red'}}>Tổng tiền: </strong> {Intl.NumberFormat("de-DE").format(total)}</span>
              <strong>VNĐ</strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Khuyến mại" value={code} onChange={(e) => setCode(e.target.value)}/>
              <div className="input-group-append">
                <button type="button" className="btn btn-primary" style={{height: '34px'}} onClick={() => handleReduce()}>Áp dụng</button>
              </div>
            </div>
          </form>
        </div>
        
          <div className="col-md-8 order-md-1">
          <h3 className="mb-3 ms-1">Thông tin người nhận</h3>
          <form className="needs-validation" noValidate>
            <div className="row ps-0">
              <div className="col mb-3">
                <label htmlFor="firstName">Họ đệm</label>
                <span style={{color: 'red', fontSize: '1.2rem'}}> *</span>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col mb-3">
                <label htmlFor="lastName">Tên</label>
                <span style={{color: 'red', fontSize: '1.2rem'}}> *</span>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3" style={{marginTop: '-20px'}}>
              <label htmlFor="username">Tên đăng nhập</label>
              <span style={{color: 'red', fontSize: '1.2rem'}}> *</span>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Tên đăng nhập" required/>
                <div className="invalid-feedback" style={{width:"100%"}}>
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <span style={{color: 'red', fontSize: '1.2rem'}}> *</span>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Địa chỉ</label>
              <span style={{color: 'red', fontSize: '1.2rem'}}> *</span>
              <input type="text" className="form-control" id="address" placeholder="ex: Số nhà 1 - Xóm Trung Tâm - Xã Nghĩa Phúc - Huyện Tân Kỳ - Tỉnh Nghệ An" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">Số điện thoại </label>
              <span style={{color: 'red', fontSize: '1.2rem'}}> *</span>
              <input type="text" className="form-control" id="address2" placeholder="ex: 0123456789" required/>
            </div>

           
            <hr className="mb-4"/>
          
            <hr className="mb-4"/>

            <h4 className="mb-3 ms-0">Phương thức thanh toán</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="QR" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
                <label className="custom-control-label" htmlFor="QR" style={{paddingLeft: '3px'}}>QR Pay</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="COD" name="paymentMethod" type="radio" className="custom-control-input" required onChange={handleCOD}/>
                <label className="custom-control-label" htmlFor="COD" style={{paddingLeft: '3px'}}>
                  Thanh toán khi nhận hàng (<span style={{color: 'red'}}>Chỉ áp dụng đối với sách</span>)</label>
              </div>
            </div>

            <hr className="mb-4"/>
            <Link to="../Checkout/QR">
            <button className="btn btn-primary btn-lg btn-block" type="submit">Tiếp tục</button>
            </Link>
          </form>
        </div>
      </div>
        </div>
        
        

    )
}
export default Checkout