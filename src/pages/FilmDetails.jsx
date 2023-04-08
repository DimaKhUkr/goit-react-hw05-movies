import { Link, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchAllAbout } from '../Fetch/fetchAllAbout';
import { FilmInfo } from 'components/FilmInfo';

export const FilmDetails = () => {
  const { movieId } = useParams();
  const [filmData, setFilmData] = useState('');
  useEffect(() => {
    if (!filmData) {
      console.log('Рендер');
      async function extractFetch() {
        const movieInfo = await fetchAllAbout(movieId);
        setFilmData(movieInfo);
      }
      extractFetch();
    }
  }, []);
  return (
    <main>
      {filmData && <FilmInfo filmData={filmData} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
