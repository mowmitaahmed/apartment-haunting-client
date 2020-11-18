import React from 'react';
import GoogleLogo from '../../images/logos/GoogleLogo.png';
import FBLogo from '../../images/logos/FBLogo.png';
import '../../styles/LoginMainArea.scss';
import { Link } from 'react-router-dom';

const LoginMainArea = () => {
    return (
        <div className="login_main_area py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12"></div>
                    <div className="col-md-4 col-12">
                        <div className="login_form">
                            <form className="p-3 border">
                                <h5 className="h5-responsive text-dark mb-4">Login</h5>
                                <div className="form-group">
                                    <input type="email" placeholder="Username or Email" className="form-control border-0 radius-0" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Passowrd" className="form-control border-0 radius-0" id="exampleInputPassword1" />
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div class="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                    </div>
                                    <a href="#" className="text-primary">Forgot Password</a>
                                </div>
                                <button type="submit" className="btn btn-primary radius-0 w-100 mb-2">Submit</button>
                                <p className="text-center text-black">Don't have an account? <Link to="/register" className="text-primary">Create an account</Link></p>
                            </form>
                            <p className="text-center text-secondary my-2">Or</p>
                            <button className="btn text-black w-100 mb-2 border social_login_btn p-2"><img src={FBLogo} alt={FBLogo} /><span>Continue with Facebook</span></button>
                            <button className="btn text-black w-100 mb-2 border social_login_btn p-2"><img src={GoogleLogo} alt={GoogleLogo} /><span>Continue with Google</span></button>
                        </div>
                    </div>
                    <div className="col-md-4 col-12"></div>
                </div>
            </div>
        </div>
    );
};

export default LoginMainArea;