import { Link, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchAllAbout } from '../Fetch/fetchAllAbout';
import { FilmInfo } from 'components/FilmInfo';
import { fetchCast } from 'Fetch/fetchCast';
import { fetchReviews } from 'Fetch/fetchReviews';

export const FilmDetails = ({ pr }) => {
  const { movieId } = useParams();
  const [filmData, setFilmData] = useState('');
  useEffect(() => {
    async function extractFetch() {
      const movieInfo = await fetchAllAbout(movieId);
      setFilmData(movieInfo);
    }
    extractFetch();
  }, [movieId]);

  function castSearch() {
    extractFetch(fetchCast(movieId));
  }
  function reviewsSearch() {
    extractFetch(fetchReviews(movieId));
  }

  async function extractFetch(foo) {
    const movies = await foo;

    pr(movies);
  }

  return (
    <main>
      {filmData && <FilmInfo filmData={filmData} />}
      <ul>
        <li>
          <Link onClick={castSearch} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link onClick={reviewsSearch} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
