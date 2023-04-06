import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Movies } from 'pages/Movies';
import { FilmDetails } from 'pages/FilmDetails';
import { Reviews } from './Reviews';
import { Cast } from './Cast';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<FilmDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
