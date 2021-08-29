import React from 'react';

import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';

import './list-item.scss';

const ListItem = () => {
  return (
    <div className="listItem">
      <img
        src="https://fs.genpi.co/uploads/data/images/doctorstrange.jpg"
        alt="Movie"
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 40 mins</span>
          <span>+16</span>
          <span>2019</span>
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
