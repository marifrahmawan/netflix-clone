import React from 'react';

import ListItem from '../listItem/ListItem';

import './list.scss';

//* List Component
const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <div className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    </div>
  );
};

export default List;
