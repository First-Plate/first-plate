import React from 'react';
import { Outlet } from 'react-router-dom';
  
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Outlet />
    </div>
    
  );
};
  
export default Login;