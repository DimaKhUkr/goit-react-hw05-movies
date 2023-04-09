import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchAllAbout } from '../Fetch/fetchAllAbout';
import { FilmInfo } from 'components/FilmInfo';
import { fetchCast } from 'Fetch/fetchCast';
import { fetchReviews } from 'Fetch/fetchReviews';
import { Suspense } from 'react';
import PropTypes from 'prop-types';

const FilmDetails = ({ pr }) => {
  const location = useLocation();

  const { movieId } = useParams();
  const [filmData, setFilmData] = useState('');

  useEffect(() => {
    async function extractFetch() {
      const movieInfo = await fetchAllAbout(movieId);
      setFilmData(movieInfo);
    }
    extractFetch();
  }, [movieId, filmData]);

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
          <Link onClick={castSearch} to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link onClick={reviewsSearch} to="reviews" state={location.state}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default FilmDetails;

FilmDetails.propTypes = {
  pr: PropTypes.func.isRequired,
};
