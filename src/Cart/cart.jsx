import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [products, setProducts] = useState([]); 
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  
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
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8081/books', {
          withCredentials: true, 
        });
  
        if (response.data.Status === "success") {
          setBooks(response.data.Books || []);
        } else {
          console.error('No books found');
        }
      } catch (error) {
        console.error('Error fetching books:', error.response?.data || error.message);
      }
    };
  
    fetchBooks();
  }, []);
  
  
  const handleQuantityChange = (index, type) => {
    const updatedProducts = [...products];
    const currentProduct = updatedProducts[index];
  
    // Check if the product already exists in the cart by name
    const existingProductIndex = updatedProducts.findIndex(product => product.tensp === currentProduct.tensp);
  
    if (existingProductIndex !== -1) {
      if (type === 'increment') {
        updatedProducts[existingProductIndex].soluong += 1;
      } else if (type === 'decrement' && updatedProducts[existingProductIndex].soluong > 1) {
        updatedProducts[existingProductIndex].soluong -= 1;
      }
    } 
    axios.put(`http://localhost:8081/products/${currentProduct.productid}`, {
      soluong: updatedProducts[existingProductIndex].soluong
    }, { withCredentials: true })
    .then(response => {
      console.log('Product quantity updated:', response.data);
    })
    .catch(error => {
      console.error('Error updating product quantity:', error.response?.data || error.message);
    });
  
    setProducts(updatedProducts); 
  };
  const handleQuantityChanges = (index, type) => {
    const updatedBooks = [...books];
    const currentBook = updatedBooks[index];

    const existingBookIndex = updatedBooks.findIndex(book => book.tensach === currentBook.tensach);
  
    if (existingBookIndex !== -1) {
      if (type === 'increment') {
        updatedBooks[existingBookIndex].soluong += 1;
      } else if (type === 'decrement' && updatedBooks[existingBookIndex].soluong > 1) {
        updatedBooks[existingBookIndex].soluong -= 1;
      }
    } 
    axios.put(`http://localhost:8081/books/${currentBook.sachid}`, {
      soluong: updatedBooks[existingBookIndex].soluong
    }, { withCredentials: true })
    .then(response => {
      console.log('Product quantity updated:', response.data);
    })
    .catch(error => {
      console.error('Error updating product quantity:', error.response?.data || error.message);
    });
  
    setBooks(updatedBooks); 
  };
 

  const handleDeleteProduct = (productid) => {
    if (!productid) {
      console.error('Invalid product ID provided for deletion');
      alert('Invalid product ID provided');
      return;
    }

    const productToDelete = products.find((product) => product.productid === productid);
    if (!productToDelete) {
      console.error('Product not found');
      alert('Product not found');
      return;
    }
  
    const { userid } = productToDelete;
    axios.delete(`http://localhost:8081/products/${productid}`, {
      withCredentials: true, 
      data: { userid }, 
    })
      .then((response) => {
        if (response.data.Status === "success") {
          console.log('Product deleted successfully:', response.data);
  
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.productid !== productid)
          );
          alert('Xóa sản phẩm thành công!');
        } else {
          console.error('Failed to delete product:', response.data.Message);
          alert(`Failed to delete product: ${response.data.Message}`);
        }
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.Message || error.message;
        console.error('Error deleting product:', errorMessage);
        alert(`Error deleting product: ${errorMessage}`);
      });
  };
  //
  const handleDeleteBook = (sachid) => {
    if (!sachid) {
      console.error('Invalid product ID provided for deletion');
      alert('Invalid product ID provided');
      return;
    }

    const bookToDelete = books.find((book) => book.sachid === sachid);
    if (!bookToDelete) {
      console.error('Product not found');
      alert('Product not found');
      return;
    }
  
    const { userid } = bookToDelete;
    axios.delete(`http://localhost:8081/books/${sachid}`, {
      withCredentials: true, 
      data: { userid }, 
    })
      .then((response) => {
        if (response.data.Status === "success") {
          console.log('Product deleted successfully:', response.data);
  
          setBooks((prevProducts) =>
            prevProducts.filter((book) => book.sachid !== sachid)
          );
          alert('Xóa sản phẩm thành công!');
        } else {
          console.error('Failed to delete product:', response.data.Message);
          alert(`Failed to delete product: ${response.data.Message}`);
        }
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.Message || error.message;
        console.error('Error deleting product:', errorMessage);
        alert(`Error deleting product: ${errorMessage}`);
      });
  };

  const handleToCheckOut = () => {
    const chosenBooks = books.filter((book) => selectedBooks.includes(book.sachid));
    const chosenProducts = products.filter((product) =>
      selectedProducts.includes(product.productid)
    );
    navigate("/Checkout/Checkout", { state: { chosenBooks, chosenProducts } });
  };
  

  const handlePickProduct = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };
  
  const handlePickBook = (bookId) => {
    setSelectedBooks((prevSelected) =>
      prevSelected.includes(bookId)
        ? prevSelected.filter((id) => id !== bookId)
        : [...prevSelected, bookId]
    );
  };
  

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-10">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-normal mb-0">Sản phẩm</h3>
            <div>
              <p className="mb-0">
                <span className="text-muted">Sắp xếp theo: </span>
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
            <div className="card rounded-3 mb-4" key={product.productid}>
              <div className="card-body p-4" style={{ backgroundColor: 'white', width: '96%' }}>
                <div className="row d-flex justify-content-between align-items-center" style={{ backgroundColor: 'white' }}>
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img src={product.anhsp} alt={product.tensp} />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3" style={{width: '220px' }}>
                    <p className="lead fw-normal mb-2">{product.tensp}</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex" style={{ paddingRight: '20px' }}>
                    <button
                      className="btn btn-link px-2"
                      onClick={() => handleQuantityChange(index, 'decrement')}
                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <input
                      id={`form-${index}`}
                      min="0"
                      name="soluong"
                      value={product.soluong}
                      type="number"
                      className="form-control form-control-sm"
                      style={{ textAlign: 'center' }}
                      onChange={(e) => handleQuantityChange(index, e.target.value > product.soluong ? 'increment' : 'decrement')}
                    />

                    <button
                      className="btn btn-link px-2"
                      onClick={() => handleQuantityChange(index, 'increment')}
                    >
                     
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 d-flex" style={{ marginLeft: '-20px'}}>
                    <h5 className="mb-0">{Intl.NumberFormat('de-DE').format(product.gia)} VNĐ</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <input type="checkbox" style={{ cursor: 'pointer' }} onChange={() => handlePickProduct(product.productid)}
                     />
                    <FontAwesomeIcon 
                      icon={faTrash} 
                      style={{ fontSize: '1.5rem', marginLeft: '25px', cursor: 'pointer' }} 
                      onClick={() => handleDeleteProduct(product.productid)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {books.map((book, index) => (
            <div className="card rounded-3 mb-4" key={book.sachid}>
              <div className="card-body p-4" style={{ backgroundColor: 'white', width: '96%' }}>
                <div className="row d-flex justify-content-between align-items-center" style={{ backgroundColor: 'white' }}>
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img src={book.anhsach} alt={book.tensach} />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3" style={{width: '220px' }}>
                    <p className="lead fw-normal mb-2">{book.tensach}</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex" style={{ paddingRight: '20px' }}>
                    <button
                      className="btn btn-link px-2"
                      onClick={() => handleQuantityChanges(index, 'decrement')}
                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <input
                      id={`form-${index}`}
                      min="0"
                      name="soluong"
                      value={book.soluong}
                      type="number"
                      className="form-control form-control-sm"
                      style={{ textAlign: 'center' }}
                      onChange={(e) => handleQuantityChanges(index, e.target.value > book.soluong ? 'increment' : 'decrement')}
                    />

                    <button
                      className="btn btn-link px-2"
                      onClick={() => handleQuantityChanges(index, 'increment')}
                    >
                     
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 d-flex" style={{ marginLeft: '-20px'}}>
                    <h5 className="mb-0">{Intl.NumberFormat('de-DE').format(book.gia)} VNĐ</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <input type="checkbox" style={{ cursor: 'pointer' }} onChange={() => handlePickBook(book.sachid)} />
                    <FontAwesomeIcon 
                      icon={faTrash} 
                      style={{ fontSize: '1.5rem', marginLeft: '25px', cursor: 'pointer' }} 
                      onClick={() => handleDeleteBook(book.sachid)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Checkout Button */}
          <div className="card">
            <div className="card-body">
              
                <button
                  type="button"
                  className="btn btn-primary btn-block btn-lg"
                  onClick={handleToCheckOut}
                >
                  THANH TOÁN
                </button>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
