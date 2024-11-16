import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [products, setProducts] = useState([]); // State to store fetched products

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const token = Cookies.get('token'); // Get the token from cookies
      console.log('Token:', token);

      if (!token) {
        console.error('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8081/products', {
          headers: {
            'Authorization': `Bearer ${token}`, // Pass token in Authorization header
          },
          withCredentials: true, // Include cookies in the request
        });

        if (response.data.Status === "success") {
          setProducts(response.data.Products); // Set products state
        } else {
          console.error('No products found');
        }
      } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message);
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, []);

  // Handle quantity change (increment/decrement)
  const handleQuantityChange = (index, type) => {
    const updatedProducts = [...products];
    if (type === 'increment') {
      updatedProducts[index].quantity += 1;
    } else if (type === 'decrement' && updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity -= 1;
    }
    setProducts(updatedProducts); 
  };

  // Handle delete product
  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.productId !== productId));
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-10">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-normal mb-0">Sản phẩm</h3>
            <div>
              <p className="mb-0">
                <span className="text-muted">Sắp xếp theo:</span>
                <a href="#!" className="text-body">
                  giá <i className="fas fa-angle-down mt-1"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="bg-primary" style={{ border: '1px solid black', height: '40px', color: 'white' }}>
            <div className="d-flex justify-content-between align-items-center mx-auto" style={{ width: "83%" }}>
              <h5 style={{ lineHeight: '40px' }}>Hình ảnh</h5>
              <h5 style={{ lineHeight: '40px' }}>Tên sản phẩm</h5>
              <h5 style={{ lineHeight: '40px' }}>Số lượng</h5>
              <h5 style={{ lineHeight: '40px' }}>Giá</h5>
              <h5 style={{ lineHeight: '40px' }}>Chọn</h5>
            </div>
          </div>

          {products.map((product, index) => (
            <div className="card rounded-3 mb-4" key={product.productId}>
              <div className="card-body p-4" style={{ backgroundColor: 'white', width: '96%' }}>
                <div className="row d-flex justify-content-between align-items-center" style={{ backgroundColor: 'white' }}>
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img src={product.anhsp} alt={product.tensp} />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3" style={{ paddingLeft: '80px' }}>
                    <p className="lead fw-normal mb-2">{product.tensp}</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex" style={{ paddingLeft: '60px' }}>
                    <button
                      className="btn btn-link px-2"
                      onClick={() => handleQuantityChange(index, 'decrement')}
                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <input
                      id={`form-${index}`}
                      min="0"
                      name="quantity"
                      value={product.quantity || 1} // Controlled value
                      type="number"
                      className="form-control form-control-sm"
                      style={{ textAlign: 'center' }}
                      onChange={(e) => handleQuantityChange(index, e.target.value > product.quantity ? 'increment' : 'decrement')}
                    />

                    <button
                      className="btn btn-link px-2"
                      onClick={() => handleQuantityChange(index, 'increment')}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 d-flex" style={{ paddingLeft: '-30px' }}>
                    <h5 className="mb-0">{product.gia} VND</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <input type="checkbox" style={{ cursor: 'pointer' }} />
                    <FontAwesomeIcon 
                      icon={faTrash} 
                      style={{ fontSize: '1.5rem', marginLeft: '25px', cursor: 'pointer' }} 
                      onClick={() => handleDeleteProduct(product.productId)} // Delete product
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Checkout Button */}
          <div className="card">
            <div className="card-body">
              <Link to="../Checkout/Checkout">
                <button
                  type="button"
                  className="btn btn-primary btn-block btn-lg"
                >
                  THANH TOÁN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
