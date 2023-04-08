import { FilmList } from 'components/FilmsList';
import { fetchpopular } from '../Fetch/fetchPopular.js';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [films, setFilms] = useState('');
  useEffect(() => {
    async function extractFetch() {
      const movies = await fetchpopular();
      setFilms(movies.results);
    }
    extractFetch();
  }, []);

  return (
    <main>
      <h1>Welcome</h1>
      {films && <FilmList films={films} />}
    </main>
  );
};
