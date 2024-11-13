import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title ">
              </div>   

              <div className="row-2 " >
              <div className="row-2 ">
                  <div className="col border-0" ><h5><b>Sản phẩm</b></h5></div>
                  <div className="col align-self-center text-right text-muted">3 items</div>
                </div>
                <div className="row main align-items-center border-bottom border">
                  <div className="col-3 ps-5 border-top-0">Hình ảnh</div>
                  <div className="col" >
                    Tên sản phẩm
                  </div>
                  <div className="col">
                   Số lượng
                  </div>
                  <div className="col-2">
                    Giá
                  </div>
                  <div className="col ps-5" >
                    Chọn
                  </div>
                </div>
              </div>  

              <div className="roll border">
                {/* List of items */}
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div className="row border-top border-bottom " key={index}>
                    <div className="row main align-items-center border-top-0">
                      <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" alt="Shirt" /></div>
                      <div className="col">
                        <div className="row text-muted border-top-0">Shirt</div>
                        <div className="row border-top-0">Cotton T-shirt</div>
                      </div>
                      <div className="col">
                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                      </div>
                      <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                      <div className="col d-flex align-items-center">
                        <div className="row ml-2 mt-4 border-top-0"><input type="checkbox" aria-label="select" /></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="back-to-shop">
                <a href="#">&larr;</a><span className="text-muted">Back to shop</span>
              </div>
            </div>
            
            <div className="col-md-4 summary " >
              <h5><b>Summary</b></h5>
              <hr />
              <div className="row">
                <div className="col" style={{ paddingLeft: 0 }}>ITEMS 3</div>
                <div className="col text-right">&euro; 132.00</div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select>
                  <option className="text-muted">Standard-Delivery- &euro;5.00</option>
                </select>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
              </form>
              <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">&euro; 137.00</div>
              </div>
              <button className="btn btn-primary">THANH TOÁN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;


// id
// name
// image
// gv
// price
// discount price
// description

