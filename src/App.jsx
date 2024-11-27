import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import Full from './Full'; 
import BangVinhDanh from './bangvinhdanh'; 
import TaiLieu from './tailieu/tailieu';
import LuyenDe from './luyende/luyende';
import Sach from './sach/sach';
import Login from './login/login';
import Register from './register/register';
import Ctietsach from './ctietsach';
import Khoahoc from './khoahoc/khoahoc';
import Header from './header';
import Cart from './cart/cart';
import { AuthProvider } from './authContext';  
import Checkout from './Checkout/Checkout';
import QR from './Checkout/QRPay';
import Blank from './blank';
import Find from './find_result/find_result';
import Test from './test';
import YourCourse from './yourCourse';
const AppContent = () => {
  const location = useLocation(); 
  
  return (
    <>
      {location.pathname !== '/login/login' && location.pathname !== '/register/register' && <Header />}
      
      <Routes>
        <Route path="/login/login" element={<Login />} />
        <Route path="/register/register" element={<Register />} />
        <Route path="/" element={<Full />} />
        <Route path="/bangvinhdanh" element={<BangVinhDanh />} />
        <Route path="/tailieu/tailieu" element={<TaiLieu />} />
        <Route path="/luyende/luyende" element={<LuyenDe />} />
        <Route path="/ctietsach" element={<Ctietsach />} />
        <Route path="/sach/sach" element={<Sach />} />
        <Route path="/cart/cart" element={<Cart />} />
        <Route path="/khoahoc/khoahoc" element={<Khoahoc />} />
        <Route path="Checkout/Checkout" element={<Checkout />} />
        <Route path="Checkout/QR" element={<QR />} />
        <Route path="/blank" element={<Blank/>}></Route>
        <Route path="/find_result/find_result" element={<Find/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/yourCourse" element={<YourCourse/>}></Route>
        
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>  
        <BrowserRouter>
          <AppContent /> 
        </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
