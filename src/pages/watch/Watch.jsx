import React from 'react';

import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>

      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://vod-progressive.akamaized.net/exp=1631974318~acl=%2A%2F468975811.mp4%2A~hmac=d9cda1a9dcca2d4a65a18c0d3c2bfd45c68e7126e7c9d0fc4e6d50f303b5c6c0/vimeo-prod-skyfire-std-us/01/395/3/76979871/468975811.mp4"
      ></video>
    </div>
  );
};

export default Watch;
