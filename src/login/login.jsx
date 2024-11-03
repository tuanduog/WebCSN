import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const location = useLocation();
  const [username, setUsername] = useState(location.state?.username || '');
  function xemMK(){
    var x = document.getElementById("logpass");
    if(x.type === "password"){
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    
    <>
    {/* {showLoginForm && ( */}
    <div id='loginForm' className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
      <div className="p-4" style={{ border: '1px solid black', backgroundColor: '#f8f9fa' }}>
        <form style={{ width: '350px' }}>
          <h3 className="text-center mb-4">Đăng nhập</h3>

          {/* Email Input */}
          <div className="form-group mb-3">
            <label className='mb-2'>Tên đăng nhập</label>
            <input type="text" id="namelog" className="form-control" value={username}
        onChange={(e) => setUsername(e.target.value)}/>
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label className='mb-2'>Mật khẩu</label>
            <input type="password" id="logpass" className="form-control" />
          </div>
          <div className='form-group'>
            <input type='checkbox' className='mt-2' onClick={xemMK}/> Xem mật khẩu
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="row" style={{ backgroundColor: '#f8f9fa', border: 'none' , padding: '27px', marginTop: '7px'}}>
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="form2Example31" defaultChecked />
                <label className="form-check-label"> Remember me </label>
              </div>
            </div>
            <div className="col text-right">
              <a href="#!">Quên mật khẩu?</a>
            </div>
          </div>

          {/* Sign In Button */}
            <div className="d-flex justify-content-center">
                <button type="submit" id='loginButton' className="btn btn-primary mb-4" style={{ width: '100%' }}>
                    Đăng nhập
                </button>
            </div>

          {/* Social Media Sign-In Options */}
          <div className="text-center">
            <p>Chưa có tài khoản? <Link to="/register/register">Đăng ký</Link></p>
            <p>hoặc đăng nhập với:</p>
            <div>
              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#3b5998' }}>
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#db4a39' }}>
                <FontAwesomeIcon icon={faGoogle} size="lg" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#1da1f2' }}>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#333' }}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    {/* )} */}
    </>
  );
}

export default Login;
