import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPassordLost from './LoginPasswordLost';
import LoginPasswordResert from './LoginPasswordReset';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPassordLost />} />
        <Route path="resetar" element={<LoginPasswordResert />} />
      </Routes>
    </div>
  );
};

export default Login;
