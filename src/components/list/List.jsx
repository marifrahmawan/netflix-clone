import React from 'react';

import ListItem from '../listItem/ListItem';
import ScrollContainer from 'react-indiana-drag-scroll';

import './list.scss';

//* List Component
const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ScrollContainer className="scroll-container">
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
        </ScrollContainer>
      </div>
    </div>
  );
};

export default List;
