import React from 'react';
import GoogleLogo from '../../images/logos/GoogleLogo.png';
import FBLogo from '../../images/logos/FBLogo.png';
import '../../styles/RegisterMainArea.scss';
import { Link } from 'react-router-dom';

const RegisterMainArea = () => {
    return (
        <div className="register_main_area py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12"></div>
                    <div className="col-md-4 col-12">
                        <div className="register_form">
                            <form className="p-3 border">
                                <h5 className="h5-responsive text-dark mb-4">Create an account</h5>
                                <div className="form-group">
                                    <input type="text" placeholder="First Name" className="form-control border-0 radius-0" id="exampleInputFirstName" aria-describedby="firstNameHelp" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Last Name" className="form-control border-0 radius-0" id="exampleInputLastName" aria-describedby="lastNameHelp" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Username or Email" className="form-control border-0 radius-0" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Passowrd" className="form-control border-0 radius-0" id="exampleInputPassword1" />
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Confirm Passowrd" className="form-control border-0 radius-0" id="exampleInputConfirmPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary radius-0 w-100 mb-2">Create an account</button>
                                <p className="text-center text-black">Already have an account? <Link to="/login" className="text-primary">Login</Link></p>
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

export default RegisterMainArea;