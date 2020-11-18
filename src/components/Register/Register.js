import React from 'react';
import '../../styles/Register.scss';
import Navbar from '../Navbar/Navbar';
import RegisterMainArea from '../RegisterMainArea/RegisterMainArea';

const Register = () => {
    return (
        <div className="register_area">
            <Navbar></Navbar>
            <RegisterMainArea></RegisterMainArea>
        </div>
    );
};

export default Register;