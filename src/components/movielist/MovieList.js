import React, { useState } from "react";
import "../movielist/MovieList.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
  const [scrollx, setScrollx] = useState(-400);

  const handleLeftArrow = () => {
    //Pega a metade da tela
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x)
  }

  const handleRightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listWidthTotal = items.results.length * 150;
    if ((window.innerWidth - listWidthTotal) > x) {
      x = (window.innerWidth - listWidthTotal) - 60;
    }
    setScrollx(x)
  }

  return (
    <div className="movie-container">
      <h2>{title}</h2>

      <div className="movie-left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movie-right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movie-area">
        <div className="movie-list" style={{
          marginLeft: scrollx,
          width: items.results.length * 150,
        }}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className="movie-item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} all={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}