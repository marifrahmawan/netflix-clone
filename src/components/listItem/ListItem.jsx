import React, { useContext } from 'react';
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';

import MoreInfoContext from '../../context/MoreInfoContext';
import './list-item.scss';

const ListItem = () => {
  const moreInfoCtx = useContext(MoreInfoContext);
  const data = {
    title: 'Spider Man - Far From Home',
  };

  return (
    <div className="listItem">
      <img
        src="https://ae01.alicdn.com/kf/Hc2e3d2d7da2c4208917ab97f5142c9e5h/60x90cm-Spiderman-Far-From-Home-Movie-Posters-Heroes-Spider-man-Movie-Characters-Study-Room-Bedroom-Canvas.jpg"
        alt="Movie"
      />
      <div className="itemInfo">
        <div className="itemInfoTop">
          <div className="icons">
            <PlayArrow className="iconPlay" />
            <Add className="iconAdd" />
            <ThumbUpAltOutlined className="iconLike" />
            <ThumbDownAltOutlined className="iconDislike" />
          </div>
          <span onClick={moreInfoCtx.openInfoHandler.bind(null, data)}>
            Info
          </span>
        </div>
        <div className="itemInfoBottom">
          <span>1 hr 40 mins</span>
          <span className="ageLimit">+16</span>
          <span>2019</span>
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
