import 'bootstrap/dist/css/bootstrap.css';
import './changeacc.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const Changeacc = () => {
  const [hoten, setHoten] = useState('');
  const [sodt, setSodt] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("Mật khẩu mới và xác nhận mật khẩu không khớp");
      return;
    }

    axios.post('http://localhost:8081/user/change-password', { oldPassword, newPassword }, { withCredentials: true })
      .then(response => {
        alert(response.data.Message);
        setShowPasswordModal(false);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch(error => {
        console.error("Error changing password:", error.response?.data || error.message);
        alert("Nhập sai mật khẩu cũ!");
      });
  };

  useEffect(() => {
    axios.get('http://localhost:8081/users', { withCredentials: true })
      .then(response => {
        const user = response.data.Users[0]; 
        setHoten(user.hoten); 
        setEmail(user.email);
        setUserName(user.username);
        setPassword(user.password);
        setSodt(user.sodt);
        setFacebookLink(user.flink);
      })
      .catch(error => {
        console.error("Error fetching user data:", error.response?.data || error.message);
      });
  }, []);
  const handleUpdate = () => {
    if (sodt.length !== 10 || !/^\d+$/.test(sodt)) {
      alert('Bạn cần nhập đúng số điện thoại');
      return;
    }
    axios.put('http://localhost:8081/user/update-info', { hoten, sodt, facebookLink }, { withCredentials: true })
      .then(response => {
        alert(response.data.Message); 
      })
      .catch(error => {
        console.error("Error updating hoten:", error.response?.data || error.message); 
      });
  };
  
  
  return (
    <div className="container">
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Maxwell Admin"
                    />
                  </div>
                  <h5 className="user-name">{username}</h5>
                  <h6 className="user-email">{email}</h6>
                </div>
                <div className="about">
                  <h5>About</h5>
                  <p>
                    dddd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h5 className="mb-3 text-primary">Thông tin người dùng</h5>
                </div>
                
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName" className='mb-2'>Họ tên</label>
                    <input
                      type="text"
                      className="form-control"
                      value={hoten}
                      onChange={(e) => setHoten(e.target.value)}
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail" className='mb-2'>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      readOnly
                    />
                  </div>
                  <br/>
                </div>
                
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phone" className='mb-2'>Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      value={sodt}
                      onChange={(e) => setSodt(e.target.value)}
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="website" className='mb-2'>Link Facebook</label>
                    <input
                      type="url"
                      className="form-control"
                      value={facebookLink}
                      onChange={(e) => setFacebookLink(e.target.value)}
                      placeholder="Nhập link facebook của bạn"
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h5 className="mt-2 mb-3 text-primary">Tài khoản</h5>
                </div>
                <div className="col-9">
                <div className="form-group">
                  <label className='mb-2'>Tên đăng nhập</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    readOnly
                  />
                </div>
                <br/>
              </div>

              <div className="col-9">
                <div className="form-group">
                  <label  className='mb-2'>Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    readOnly
                  />
                </div>

              </div>
              <button 
                className="btn btn-primary" 
                style={{
                  width: '140px', 
                  height: '35px', 
                  display: 'inline-block', 
                  marginTop: '30px'
                }}
                onClick={() => setShowPasswordModal(true)}
              >
                Đổi mật khẩu
              </button>
              </div>
              {showPasswordModal && (
                <div className="modal show" tabIndex="-1" style={{ display: 'block', marginTop: '100px' }}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Đổi mật khẩu</h5>
                        <FontAwesomeIcon onClick={() => setShowPasswordModal(false)} icon={faTimes} style={{fontSize: '1.5rem', marginLeft: '320px', cursor: 'pointer'}}></FontAwesomeIcon>
                       
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <label htmlFor="currentPassword" className="mb-2">Mật khẩu cũ</label>
                          <input
                            type="password"
                            className="form-control"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            placeholder="Nhập mật khẩu cũ"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="newPassword" className="mb-2 mt-2">Mật khẩu mới</label>
                          <input
                            type="password"
                            className="form-control"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Nhập mật khẩu mới"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="confirmNewPassword" className="mb-2 mt-2">Xác nhận mật khẩu mới</label>
                          <input
                            type="password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Xác nhận mật khẩu mới"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setShowPasswordModal(false)}
                        >
                          Hủy
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handlePasswordChange}
                        >
                          Cập nhật mật khẩu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right">
                    <button
                      type="button"
                      id="cancel"
                      name="cancel"
                      className="btn btn-secondary"
                    >
                      Hủy
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleUpdate()}
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changeacc;
