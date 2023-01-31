import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider, GoogleContext } from './components/Context/Context';
import { useContext } from 'react';
// import { getFirestore, doc, getDoc } from 'firebase/firestore'
// import { app } from "./firebase/";
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

import GlobalProvider from './components/Context/Context';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import DashAdmin from './components/DashAdmin/DashAdmin';
import DashClient from './components/DashClient/DashClient';
// import ProtectRoutes from './components/ProtectRoutes/ProtectRoutes';

export const App = () => {

  const { checkuser } = useContext(GoogleContext)

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <CartProvider>

            <Routes>

              <Route path="/" element={ !checkuser ? <Landing /> : <Navigate to="/home" /> } />
              <Route path="/home" element={ checkuser ? <Home /> : <Navigate to="/landing" /> } />

              {/* <Route path="/" element={<Home />} /> */}
              {/* <Route path="/home" element={<Home />} /> */}

              {/* <Route path="/home" element={<ProtectRoutes><Home/></ProtectRoutes>} /> */}
            
              <Route path="/ingresar" element={<Login />} />
              
              <Route path="/registrar" element={<Register />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/admin" element={<DashAdmin />} />
              <Route path="/clientes" element={<DashClient />} />
              {/* <Route path="/registrar" element={<Register />} /> */}

            </Routes>

          </CartProvider>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;