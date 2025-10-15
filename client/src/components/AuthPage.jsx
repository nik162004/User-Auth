import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default AuthPage;