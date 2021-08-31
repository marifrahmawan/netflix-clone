import React from 'react';
import { useState } from 'react';

import MoreInfoContext from './MoreInfoContext';

function MoreInfoProvider(props) {
  const [triggerInfo, setTriggerInfo] = useState(false);
  const [movieData, setMovieData] = useState({});

  const openInfoHandler = (data) => {
    setTriggerInfo(true);
    setMovieData(data);
  };

  const closeInfoHandler = () => {
    setTriggerInfo(false);
  };

  return (
    <MoreInfoContext.Provider
      value={{
        moreInfoTrigger: triggerInfo,
        movieData: movieData,
        openInfoHandler: openInfoHandler,
        closeInfoHandler: closeInfoHandler,
      }}
    >
      {props.children}
    </MoreInfoContext.Provider>
  );
}

export default MoreInfoProvider;
