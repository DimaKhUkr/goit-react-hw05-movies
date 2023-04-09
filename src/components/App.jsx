import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { useState, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));
const FilmDetails = lazy(() => import('../pages/FilmDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

export const App = () => {
  const [cast, setCast] = useState('');
  const [reviews, setReviews] = useState('');

  function pr(data) {
    if (data?.cast) {
      data.cast.splice(10);
      return setCast(data.cast);
    }
    return setReviews(data.results);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<FilmDetails pr={pr} />}>
            <Route path="cast" element={cast && <Cast cast={cast} />} />
            <Route
              path="reviews"
              element={reviews && <Reviews reviews={reviews} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};
