import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const COD = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const {h} = location.state || {};
    const {t} = location.state || {};
    const {e} = location.state || {};
    const {a} = location.state  || {};
    const {p} = location.state  || {};
    const {total} = location.state || {};
    const handleAccept = () => {
        alert("Xác nhận đơn hàng thành công!");
    }
    const handleDis = () => {
        navigate(-1);
    }
    return (
        <section
          style={{
            marginTop: '50px',
            padding: "20px",
            maxWidth: "600px",
            margin: "auto",
            fontFamily: "Arial, sans-serif",
            border: "2px solid black",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h4 style={{ textAlign: "center", marginBottom: "20px" }}>Thông tin của bạn</h4>
          <article style={{ lineHeight: "1.6" }}>
            <p><strong>Họ và Tên:</strong> {h} {t}</p>
            <p><strong>Địa chỉ:</strong> {a}</p>
            <p><strong>Email:</strong> {e}</p>
            <p><strong>Số điện thoại:</strong> {p}</p>
            <p><strong>Phương thức thanh toán:</strong> Thanh toán khi nhận hàng</p>
            <p><strong>Tổng số tiền:</strong> {Intl.NumberFormat("de-DE").format(total)} đ</p>
            <p style={{ color: "red" }}>
              Đơn hàng sẽ được giao đến bạn trong vòng 2 đến 3 ngày tới. Vui lòng chú ý để nhận hàng!
            </p>
          </article>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/">
              <button
                onClick={handleAccept}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Xác nhận đơn hàng
              </button>
            </Link>
            <button
                onClick={handleDis}
                style={{
                    marginLeft: '10px',
                    backgroundColor: "gray",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Hủy
              </button>
          </div>
        </section>
      );
    };
export default COD;