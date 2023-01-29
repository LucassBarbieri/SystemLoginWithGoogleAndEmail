import React from 'react'
// import { Link } from 'react-router-dom';

export const Register = () => {

    return (
        <>
            <div className="bg-gradient-primary">
                <div class="container">
                    <div class="card shadow-lg o-hidden border-0 my-5">
                        <div class="card-body p-0">
                            <div class="row">

                                <div class="col-lg-5 d-none d-lg-flex">
                                    <div class="flex-grow-1 bg-register-image img-login" ></div>
                                </div>

                                <div class="col-lg-7">

                                    <div class="p-5">

                                        <div class="text-center">
                                            <h4 class="text-dark mb-4">Create an Account!</h4>
                                        </div>

                                        <form action='' classname="user">

                                            <div classname="row mb-3">

                                                <div classname="col-sm-6 mb-3 mb-sm-0">
                                                    <input classname="form-control form-control-user" type="text" id="exampleFirstName" placeholder="First Name" name="first_name" />
                                                </div>

                                                <div classname="col-sm-6">
                                                    <input classname="form-control form-control-user" type="text" id="exampleLastName" placeholder="Last Name" name="last_name" />
                                                </div>

                                            </div>

                                            <div classname="mb-3">
                                                <input classname="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email" />
                                            </div>

                                            <div classname="row mb-3">

                                                <div classname="col-sm-6 mb-3 mb-sm-0">
                                                    <input classname="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" />
                                                </div>

                                                <div classname="col-sm-6">
                                                    <input classname="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password_repeat" />
                                                </div>

                                            </div>

                                            <button classname="btn btn-primary d-block btn-user w-100" type="submit">Register Account</button>

                                            <hr />

                                            <a classname="btn btn-primary d-block btn-google btn-user w-100 mb-2" role="button">
                                                <i class="fab fa-google"></i>
                                                &nbsp; Register with Google
                                            </a>

                                            <a class="btn btn-primary d-block btn-facebook btn-user w-100" role="button">
                                                <i class="fab fa-facebook-f"></i>
                                                &nbsp; Register with Facebook
                                            </a>

                                            <hr />

                                        </form>

                                        <div classname="text-center">
                                            <a classname="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>

                                        <div classname="text-center">
                                            <a classname="small" href="login.html">Already have an account? Login!</a>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;