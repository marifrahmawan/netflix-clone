import React, { useState, useContext } from 'react';

import { Featured } from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import MoreInfo from '../../components/moreInfo/MoreInfo';

import MoreInfoContext from '../../context/MoreInfoContext';
import './home.scss';

const Home = () => {
  const [type, setType] = useState('');

  const movieType = (e) => {
    setType(e);
  };

  const moreInfoCtx = useContext(MoreInfoContext);

  return (
    <div className="home">
      {moreInfoCtx.moreInfoTrigger && <MoreInfo />}
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
