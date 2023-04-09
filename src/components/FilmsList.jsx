import { Link, useLocation } from 'react-router-dom';

export const FilmList = ({ films }) => {
  const location = useLocation();

  return films.map(film => {
    return (
      <ul key={film.id}>
        <Link to={`/movies/${film.id}`} state={{ from: location }}>
          {film.title ? <li> {film.title}</li> : <li>{film.name}</li>}
        </Link>
      </ul>
    );
  });
};
