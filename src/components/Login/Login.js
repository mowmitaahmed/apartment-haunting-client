import React from 'react';
import '../../styles/Login.scss';
import LoginMainArea from '../LoginMainArea/LoginMainArea';
import Navbar from '../Navbar/Navbar';

const Login = () => {
    return (
        <div>
          <Navbar></Navbar>
          <LoginMainArea></LoginMainArea>
        </div>
    );
};

export default Login;