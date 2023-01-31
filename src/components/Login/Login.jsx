import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { GoogleContext } from '../Context/Context';
import { UserFirebaseContext } from '../Context/Context';

import './Login.css';

export const Login = () => {

    const { signInWithGoogle, checkuser } = useContext(GoogleContext)
    const { isRegister, setIsRegister, submithandler } = useContext(UserFirebaseContext)
    console.log(isRegister);
    return (
        <>
            
            {checkuser ? <Navigate to="/home" /> :

                <div className="bg-gradient-primary">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-12 col-xl-10">
                                <div className="card shadow-lg o-hidden border-0 my-5">
                                    <div className="card-body p-0">
                                        <div className="row">

                                            <div className="col-lg-6 d-none d-lg-flex">
                                                <div className="flex-grow-1 bg-login-image img-login" ></div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="p-5">

                                                    <div className="text-center">
                                                        <h4 className="text-dark mb-4">PLATAFORMA</h4>
                                                        <h6 className="text-dark mb-4">{isRegister ? "Registrate" : "Iniciar sesion"}</h6>
                                                    </div>

                                                    <form className="user" onSubmit={submithandler}>

                                                        <div className="mb-3">
                                                            <input className="form-control form-control-user" type="email" placeholder="E-Mail" name="email" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <input className="form-control form-control-user" type="password" placeholder="Contraseña" name="password" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label>
                                                                Rol:
                                                                <select id='rol'>
                                                                    <option value="admin">Admin</option>
                                                                    <option value="cliente">Cliente</option>
                                                                </select>
                                                            </label>
                                                        </div>

                                                        <input className="btn btn-primary d-block btn-user w-100" type="submit" value={isRegister ? "Registrar" : "Iniciar session"} />

                                                        <hr />
                                                        <div onClick={() => setIsRegister(!isRegister)}>{isRegister ? "Ya tengo una cuenta" : "Registrarme"}</div>

                                                        <hr />

                                                    </form>

                                                    <button className="btn btn-primary d-block btn-google btn-user w-100 mb-2" onClick={signInWithGoogle}>
                                                        <i className="fab fa-google"></i>
                                                        &nbsp; Google
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )

}

export default Login;