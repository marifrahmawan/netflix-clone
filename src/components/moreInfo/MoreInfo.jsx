import React, { useContext } from 'react';

import { Close } from '@material-ui/icons';
import MoreInfoContext from '../../context/MoreInfoContext';
import './more-info.scss';

function MoreInfo() {
  const moreInfoCtx = useContext(MoreInfoContext);

  return (
    <div className="moreInformation">
      <div className="moreInformationLeft">
        <Close className="closeButton" onClick={moreInfoCtx.closeInfoHandler} />

        <img
          src="https://images6.alphacoders.com/102/thumb-1920-1020775.jpg"
          loading="lazy"
          alt="Spiderman far from Home"
        />
        <div className="backdrop"></div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Nt9L1jCKGnE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="informationDesc">
          <h1>Spider Man - Far From Home</h1>
          <div className="movieInfo">
            <span>1 hr 40 mins</span>
            <span className="ageLimit">+16</span>
            <span>2019</span>
          </div>
          <p>
            Our friendly neighborhood Super Hero decides to join his best
            friends Ned, MJ, and the rest of the gang on a European vacation.
            However, Peter's plan to leave super heroics behind for a few weeks
            are quickly scrapped when he begrudgingly agrees to help Nick Fury
            uncover the mystery of several elemental creature attacks, creating
            havoc across the continent.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
