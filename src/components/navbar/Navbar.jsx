import React, { useState } from 'react';

import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import './navbar.scss';
import { useEffect } from 'react';

const Navbar = ({ filmType }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [type, setType] = useState('');

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => (window.onscroll = null);
  };

  const typeHandler = (typeName) => {
    if (typeName === 'series') {
      setType((prevState) => {
        if (prevState !== 'series') {
          return (prevState = 'series');
        } else {
          return (prevState = '');
        }
      });
    }
    if (typeName === 'movies') {
      setType((prevState) => {
        if (prevState !== 'movies') {
          return (prevState = 'movies');
        } else {
          return (prevState = '');
        }
      });
    }
  };

  useEffect(() => {
    filmType(type);
  }, [filmType, type]);

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Logo"
          />
          <span>Home</span>
          <span onClick={typeHandler.bind(null, 'series')}>Series</span>
          <span onClick={typeHandler.bind(null, 'movies')}>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>

        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
            alt="Profile"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
