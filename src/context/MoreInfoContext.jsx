import React from 'react';

const MoreInfoContext = React.createContext({
  moreInfoTrigger: false,
  movieData: [],
  openInfoHandler: (data) => {},
  closeInfoHandler: () => {},
});

export default MoreInfoContext;
