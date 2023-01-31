import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider, GoogleContext, UserFirebaseContext } from './components/Context/Context';
import { useContext } from 'react';
import GlobalProvider from './components/Context/Context';

import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import DashAdmin from './components/DashAdmin/DashAdmin';
import DashClient from './components/DashClient/DashClient';

export const App = () => {

  const { checkuser } = useContext(GoogleContext)
  const { rol } = useContext(UserFirebaseContext)

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={!checkuser ? <Landing /> : <Navigate to="/home" />} />
              <Route path="/home" element={checkuser ? <Home /> : <Navigate to="/landing" />} />

              <Route path="/ingresar" element={<Login />} />
              <Route path="/landing" element={<Landing />} />

              {rol === 'admin' && <Route path="/admin" element={<DashAdmin />} />}
              {rol === 'cliente' && <Route path="/cliente" element={<DashClient />} />}
              
            </Routes>
          </CartProvider>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;