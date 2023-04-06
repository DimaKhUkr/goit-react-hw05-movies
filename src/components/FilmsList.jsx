import { useState, useEffect } from 'react';
import { fetchpopular } from '../Fetch/fetchPopular.js';

export const FilmList = () => {
  const [films, setFilms] = useState('');

  useEffect(() => {
    async function extractFetch() {
      const movies = await fetchpopular();
      setFilms(movies.results);
    }
    extractFetch();
  }, []);
  console.log(films);

  if (films) {
    console.log(films);

    return films.map(film => {
      return (
        <ul key={film.id}>
          {film.title ? <li> {film.title}</li> : <li>{film.name}</li>}
        </ul>
      );
    });
  }
};
