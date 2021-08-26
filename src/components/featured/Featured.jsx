import React from 'react';

import { PlayArrow } from '@material-ui/icons';
import './featured.scss';

export const Featured = (props) => {
  const { type } = props;

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="animation">Animation</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Wester</option>
          </select>
        </div>
      )}

      <img
        src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="Movie"
      />

      <div className="info">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/dd4itby-724c0c0a-a0b3-482b-b915-5c520a3adeba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZGQ0aXRieS03MjRjMGMwYS1hMGIzLTQ4MmItYjkxNS01YzUyMGEzYWRlYmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CiaiCsRz6XNRtMNbMsoo-1eNsSlXDqM9xFDgPocw0x8"
          alt="Title"
        />

        <span className="desc">
          Our friendly neighborhood Super Hero decides to join his best friends
          Ned, MJ, and the rest of the gang on a European vacation. However,
          Peter's plan to leave super heroics behind for a few weeks are quickly
          scrapped when he begrudgingly agrees to help Nick Fury uncover the
          mystery of several elemental creature attacks, creating havoc across
          the continent.
        </span>

        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
