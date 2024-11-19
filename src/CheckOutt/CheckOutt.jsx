import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import axios from 'axios';
const Checkout = () =>{

  const [products, setProducts] = useState([]); 


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8081/products', {
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
    return(

<div className="container">
<div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Giỏ hàng</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            {products.map((product) => (
              <div key={product.productId}>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">{product.tensp}</h6>
                <small className="text-muted">Số lượng: {product.soluong }</small>
              </div>
              
              <span className="text-muted">{product.gia} </span>
            </li>
              </div>
            ))}
        
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Mã thẻ khuyến mại</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Khuyến mại"/>
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Áp dụng</button>
              </div>
            </div>
          </form>
        </div>
        
          <div className="col-md-8 order-md-1">
          <h4 className="mb-3 ms-1">Địa Chỉ</h4>
          <form className="needs-validation" noValidate>
            <div className="row ps-0">
              <div className="col mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
                <div className="invalid-feedback" style={{width:"100%"}}>
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

           
            <hr className="mb-4"/>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address"/>
              <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info"/>
              <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
            </div>
            <hr className="mb-4"/>

            <h4 className="mb-3 ms-0">Phương thức thanh toán</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="QR" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
                <label className="custom-control-label" htmlFor="QR">QR Pay</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="COD" name="paymentMethod" type="radio" className="custom-control-input" required/>
                <label className="custom-control-label" htmlFor="COD">COD</label>
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