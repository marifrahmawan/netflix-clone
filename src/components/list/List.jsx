import React, { useRef, useState, useEffect } from 'react';

import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';

import ListItem from '../listItem/ListItem';
import useWindowDimensions from './useWindowDimension';

import './list.scss';

//* List Component
const List = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [showSlider, setShowSlider] = useState(true);
  const { width } = useWindowDimensions();
  const listRef = useRef();

  useEffect(() => {
    const sliderBtnShowing = setTimeout(() => {
      setShowSlider(false);
    }, 250);

    return () => {
      setShowSlider(true);
      clearTimeout(sliderBtnShowing);
    };
  }, [slideNumber]);

  const handleClick = (direction) => {
    const howManyBox = width / 230;
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === 'right' && slideNumber <= 15 - howManyBox) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }

    if (direction === 'left' && slideNumber > 1) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={handleClick.bind(null, 'left')}
          style={{
            display: slideNumber === 1 || showSlider === true ? 'none' : '',
          }}
        />
        <div className="container" ref={listRef}>
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
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={handleClick.bind(null, 'right')}
          style={{
            display: showSlider === true ? 'none' : '',
          }}
        />
      </div>
    </div>
  );
};

export default List;
