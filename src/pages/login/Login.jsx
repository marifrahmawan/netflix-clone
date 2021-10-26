import React, { useEffect, useReducer, useRef, useState } from 'react';

import './login.scss';

const inputInitailState = { value: '', isValid: '' };

const regEmail =
  /^(?=[^@]*[A-Za-z])([a-zA-Z0-9])(([a-zA-Z0-9])*([\._-])?([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,4})+$/i;

const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'user_email':
      return { value: action.payload, isValid: regEmail.test(action.payload) };

    default:
      throw new Error();
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'user_password':
      return {
        value: action.payload,
        isValid: regPassword.test(action.payload),
      };

    default:
      throw new Error();
  }
};

/*
 * LOGIN COMPONENT
 */
const Login = () => {
  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    inputInitailState
  );

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    inputInitailState
  );

  const emailRef = useRef();
  const passwordRef = useRef();

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: 'user_email', payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: 'user_password', payload: e.target.value });
  };

  const loginForm = (e) => {
    e.preventDefault();

    if (emailState.isValid === false) {
      console.log('email invalid');
      emailRef.current.focus();
    }

    if (passwordState.isValid === false) {
      console.log('password incorect');
      passwordRef.current.focus();
    }
  };

  return (
    <div className="loginWrapper">
      <div className="topWrapper">
        <div className="top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </div>

        <div className="backgroundwrapper">
          <img
            className="netflixBackground"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/1001c11d-58cb-4e1a-b8f7-abc9b12c2cca/ID-id-20210823-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="Netflix Background"
          />
          <div className="backgroundGradient"></div>
        </div>
        <div className="cardWrapper">
          <div className="card">
            <form className="card__content" onSubmit={loginForm}>
              <h1>Sign In</h1>
              <input
                type="text"
                className="emailOrPhone"
                placeholder="Email or Phone"
                onChange={emailChangeHandler}
                value={emailState.value}
                ref={emailRef}
              />
              <input
                type="password"
                className="password"
                placeholder="Password"
                onChange={passwordChangeHandler}
                value={passwordState.value}
                ref={passwordRef}
              />

              <button type="submit">Sign In</button>

              <div className="card__content-bottom">
                <div className="card__content-bottom__top">
                  <div className="remember-me">
                    <input className="remember-me-check" type="checkbox" />
                    <span>Remember me</span>
                  </div>
                  <div className="helper">Need Help?</div>
                </div>
                <div className="card__content-bottom__bottom">
                  <h3>
                    New to Netflix? <span>Sign Up Now</span>
                  </h3>
                  <p>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot. <a href="#">Learn more</a>.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
