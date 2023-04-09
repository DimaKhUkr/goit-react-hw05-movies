import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
