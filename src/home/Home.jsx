import React, { useState } from 'react';

import { Featured } from '../components/featured/Featured';
import List from '../components/list/List';
import Navbar from '../components/navbar/Navbar';
import MoreInfo from '../components/moreInfo/MoreInfo';

import './home.scss';

const Home = () => {
  const [type, setType] = useState('');

  const movieType = (e) => {
    setType(e);
  };

  const [triggerMovieInfo, setTriggerMovieInfo] = useState(false);

  const triggerMovieInfoHandler = () => {
    setTriggerMovieInfo(true);
  };

  return (
    <div className="home">
      {triggerMovieInfo && <MoreInfo />}

      <Navbar filmType={movieType} />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
