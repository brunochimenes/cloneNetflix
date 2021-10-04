import React from "react";
import "../featuredmovie/FeaturedMovie.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  /*let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }*/

  return (
    <section className="featured-container" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <h2 className="featured-name">{item.original_name}</h2>
          <div className="featured-info">
            <p className="featured-points">{item.vote_average} pontos</p>
            <p className="featured-yaer">{firstDate.getFullYear()}</p>
            <p className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</p>
          </div>
          <p className="featured-description">{item.overview}</p>
          <div className="featured-buttons">
            <a href={`/watch/${item.id}`} className="featured-watchbutton">▶ Assistir</a>
            <a href={`/list/add/${item.id}`} className="featured-mylistbutton">+ Minha Lista</a>
          </div>
          <p className="featured-genres"><strong>Gêneros:</strong>{genres.join(', ')}</p>
        </div>
      </div>
    </section>
  );
}