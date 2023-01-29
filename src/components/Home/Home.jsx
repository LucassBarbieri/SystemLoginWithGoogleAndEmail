import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { GoogleContext } from '../Context/Context'
import { app } from "../../firebase/";
import { getAuth, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import Loading from '../Loading/Loading'
import Leftnav from '../Leftnav/Leftnav';
import Topnav from '../Topnav/Topnav';
import Footer from '../Footer/Footer';
import '../Home/Home.css'


export const Home = (user) => {

    const [loading, setLoading] = useState(false);
    const { checkuser } = useContext(GoogleContext)
    const auth = getAuth(app);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <>
            
                {/* Si checkuser es NO redirigime a... */}
                {!checkuser && <Navigate to="/landing" />}

                {/* ------ Navegadores */}
                <Topnav />
                <Leftnav />
                {/* ------ Navegadores */}

                {/* ------ Inicio contenido */}
                <h1>Home</h1>
                <button onClick={() => signOut(auth)}>Cerrar</button>
                {/* <p>{localStorage.getItem('name')}</p>
                <p>{localStorage.getItem('email')}</p>
                <img src={localStorage.getItem('photoPic')} alt="" />
                <p>{localStorage.getItem('photoPic')}</p>
                <p>{localStorage.getItem('emailVerify')}</p>
                <button onClick={logOutGoogle}>Salir</button> */}
                {/* ------ Fin contenidos */}

                {/* ------ Footer */}
                <Footer />
                {/* ------ Footer */}

            </>
        )
    }
}

export default Home;