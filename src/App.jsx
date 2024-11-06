import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Full from './Full'; 
import BangVinhDanh from './bangvinhdanh'; 
import TaiLieu from './tailieu/tailieu';
import LuyenDe from './luyende/luyende';
import Sach from './sach/sach';
import Login from './login/login';
import Register from './register/register';
import Ctietsach from './sach/ctietsach/ctietsach'
import Khoahoc from './khoahoc/khoahoc';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Full />} />
        <Route path="/bangvinhdanh" element={<BangVinhDanh />} />
        <Route path="/tailieu/tailieu" element={<TaiLieu/>}/>
        <Route path='/luyende/luyende' element={<LuyenDe/>}/>
        <Route path='/ctietsach' element={<Ctietsach/>}/>
        <Route path='/sach/sach' element={<Sach/>}/>
        <Route path='/login/login' element={<Login/>}/>
        <Route path='/register/register' element={<Register/>}/>
        <Route path='/khoahoc/khoahoc'element={<Khoahoc/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
