import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { useState } from 'react';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Movies } from 'pages/Movies';
import { FilmDetails } from 'pages/FilmDetails';
import { Reviews } from './Reviews';
import { Cast } from './Cast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [cast, setCast] = useState('');
  const [reviews, setReviews] = useState('');

  function pr(data) {
    if (data?.cast) {
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
