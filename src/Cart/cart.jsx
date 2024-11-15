import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cart = () => {
  return (
      <div style={{backgroundColor: 'white'}}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0">Sản phẩm</h3>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sắp xếp theo:</span>{" "}
                  <a href="#!" className="text-body">
                    giá <i className="fas fa-angle-down mt-1"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className='bg-primary' style={{border: '1px solid black', height: '40px', color: 'white'}}>
            <div className='d-flex justify-content-between align-items-center mx-auto' style={{width: "83%"}}>
                <h5 style={{lineHeight: '40px'}}>Hình ảnh</h5>
                <h5 style={{lineHeight: '40px'}}>Tên sản phẩm</h5>
                <h5 style={{lineHeight: '40px'}}>Số lượng</h5>
                <h5 style={{lineHeight: '40px'}}>Giá</h5>
                <h5 style={{lineHeight: '40px'}}>Chọn</h5>
            </div>
            </div>
            {[...Array(4)].map((_, index) => (
              <div className="card rounded-3 mb-4" key={index}>
                <div className="card-body p-4" style={{backgroundColor: 'white', width: '96%'}}>
                  <div className="row d-flex justify-content-between align-items-center" style={{backgroundColor: 'white'}}>
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                        className="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3" style={{paddingLeft: '80px'}}>
                      <p className="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span className="text-muted">Size: </span>M{" "}
                        <span className="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex" style={{paddingLeft: '60px'}}>
                      <button
                        className="btn btn-link px-2"
                        onClick={(e) =>
                          e.currentTarget.parentNode.querySelector(
                            "input[type=number]"
                          ).stepDown()
                        }
                      >
                        <i className="fas fa-minus"></i>
                      </button>

                      <input
                        id={`form-${index}`}
                        min="0"
                        name="quantity"
                        defaultValue="1"
                        type="number"
                        className="form-control form-control-sm"
                        style={{textAlign: 'center'}}
                      />

                      <button
                        className="btn btn-link px-2"
                        onClick={(e) =>
                          e.currentTarget.parentNode.querySelector(
                            "input[type=number]"
                          ).stepUp()
                        }
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 d-flex" style={{paddingLeft: '-30px'}}>
                      <h5 className="mb-0">1.350.000</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <input type='checkbox' style={{cursor: 'pointer'}}></input>
                        <FontAwesomeIcon icon={faTrash} style={{fontSize: '1.5rem', marginLeft: '25px', cursor: 'pointer'}}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-row">
                <div className="form-outline flex-fill">
                  <input
                    type="text"
                    id="discount-code"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="discount-code">
                    Discount code
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-warning btn-lg ms-3"
                >
                  Apply
                </button>
              </div>
            </div>

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
  )
}

export default cart
