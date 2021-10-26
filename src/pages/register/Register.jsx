import React, { useEffect, useReducer, useRef, useState } from 'react';

import './register.scss';

const inputInitialState = { value: '', isValid: null };

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'user_email':
      return { value: action.payload, isValid: action.payload.includes('@') };

    default:
      throw new Error();
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'user_password':
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };

    default:
      throw new Error();
  }
};

/*
 * REGISTER COMPONENT
 */

const Register = () => {
  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    inputInitialState
  );
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    inputInitialState
  );

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: 'user_email', payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: 'user_password', payload: e.target.value });
  };

  useEffect(() => {
    const emailKeyStroke = setTimeout(() => {
      console.log('Checking Email is Valid or Not');
      if (emailIsValid) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    }, 700);

    return () => {
      console.log('Clean Up');
      clearTimeout(emailKeyStroke);
    };
  }, [emailIsValid]);

  useEffect(() => {
    const passwordKeyStroke = setTimeout(() => {
      console.log('Checking Email is Valid or Not');
      if (passwordIsValid) {
        setPasswordValid(true);
      } else {
        setPasswordValid(false);
      }
    }, 700);

    return () => {
      console.log('Clean Up');
      clearTimeout(passwordKeyStroke);
    };
  }, [passwordIsValid]);

  const [btnStart, setBtnStart] = useState();
  const [emailBlank, setEmailBlank] = useState(true);
  const [passwordBlank, setPasswordBlank] = useState(true);

  const startClick = () => {
    if (emailValid) {
      setBtnStart(true);
    } else {
      emailRef.current.focus();
      setEmailBlank(false);
    }
  };

  const [btnFinish, setBtnFinish] = useState(false);
  const finishClick = (e) => {
    e.preventDefault();

    if (passwordValid) {
      setBtnFinish(true);
    } else {
      passwordRef.current.focus();
      setPasswordBlank(false);
    }
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="registerWrapper">
      <div className="topWrapper">
        <div className="top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
          <button className="signIn">Masuk</button>
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
            <h1>Film, acara TV tak terbatas, dan lebih banyak lagi.</h1>
            <h2>Tonton di mana pun. Batalkan kapan pun.</h2>
            <p>
              Siap menonton? Masukkan email untuk membuat atau memulai lagi
              keanggotaanmu.
            </p>

            {!btnStart ? (
              <>
                <div className="input">
                  <input
                    type="email"
                    placeholder="Email Address"
                    ref={emailRef}
                    onChange={emailChangeHandler}
                    value={emailState.value}
                  />
                  <button onClick={startClick}>Daftar</button>
                </div>
                {!emailBlank && (
                  <div className="error-message">
                    <p className="error-text">
                      Please Enter a Valid Email Address
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <form onSubmit={finishClick} className="input">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={passwordChangeHandler}
                    ref={passwordRef}
                    value={passwordState.value}
                  />
                  <button type="submit">Mulai</button>
                </form>

                {!passwordBlank && (
                  <div className="error-message">
                    <p className="error-text">Please Enter a Valid Password</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* <div className="content">
        <div className="contentWrapper">
          <div className="contentItem">
            <h1>Nikmati di TV-mu.</h1>
            <h2>
              Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV,
              pemutar Blu-ray, dan banyak lagi.
            </h2>
          </div>
        </div>

        <div className="contentWrapper">
          <div className="contentItem">
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              autoPlay
              playsInline
              muted
              loop
            ></video>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="contentWrapper">
          <div className="contentItem">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="contentWrapper">
          <div className="contentItem">
            <h1>Download your shows to watch offline.</h1>
            <h2>
              Save your favorites easily and always have something to watch.
            </h2>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Register;
