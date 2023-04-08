// import { Search } from 'components/Search';
import { fetchSearch } from 'Fetch/fetchSearch';
import { FilmList } from 'components/FilmsList';
import NewSearche from 'components/NewSearch';
import { useEffect, useState } from 'react';

export const Movies = () => {
  const [filmName, setFilmName] = useState('');
  const [films, setFilms] = useState('');

  const DataHandleSubmit = data => {
    const { filmName: filmNameSearch } = data;
    return setFilmName(filmNameSearch);
  };

  useEffect(() => {
    if (!filmName) {
      return;
    }
    async function extractFetch(filmName) {
      const movies = await fetchSearch(filmName);
      setFilms(movies.results);
      console.log(movies);
    }
    extractFetch(filmName);
    setFilmName('');
  }, [filmName]);

  return (
    <main>
      <NewSearche DataHandleSubmit={DataHandleSubmit} />
      {films && <FilmList films={films} />}
    </main>
  );
};
