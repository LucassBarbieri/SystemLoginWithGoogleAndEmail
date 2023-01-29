import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider, GoogleContext } from './components/Context/Context';
import { useContext, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { app } from "./firebase/";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import GlobalProvider from './components/Context/Context';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import DashAdmin from './components/DashAdmin/DashAdmin';
import DashClient from './components/DashClient/DashClient';

const auth = getAuth(app);
const firestore = getFirestore(app);

export const App = () => {

  const { checkuser } = useContext(GoogleContext)
  const [user, setUser] = useState(null);

  async function getRol(uid) {

    const docRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;

  }

  function setUserWhitFirebaseAndRol(usuarioFirebase) {

    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: usuarioFirebase.rol,
      };
      setUser(userData);
    });

  }

  onAuthStateChanged(auth, (usuarioFirebase) => {

    if (usuarioFirebase) {
      if (!user) {
        setUserWhitFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }

  })

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <CartProvider>

            <Routes>

              <Route path="/" element={ !checkuser ? <Landing /> : <Navigate to="/home" /> } />
              <Route path="/home" element={ checkuser ? <Home user={user}/> : <Navigate to="/landing" /> } />

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