import React from 'react';
import { Form, LoginWrapper, Footer } from './styled';

const Login: React.FC = () => {
  return (
    <LoginWrapper>
      <Form>
        <header>
          <img src="/static/images/login-avatar.png" />
        </header>
        <div className="inputs">
          <input type="text" placeholder="username or email" />
          <input type="password" placeholder="password" />
          <p className="light">
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </Form>
      <Footer>
        <button>Continue</button>
        <p>
          {"Don't have an account?"} <a href="#">Sign Up</a>
        </p>
      </Footer>
    </LoginWrapper>
  );
};

export default Login;
