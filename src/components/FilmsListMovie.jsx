import { Link } from 'react-router-dom';

export const FilmsListMovie = ({ films }) => {
  return films.map(film => {
    return (
      <ul key={film.id}>
        <Link to={`/movies/${film.id}`}>
          {film.title ? <li> {film.title}</li> : <li>{film.name}</li>}
        </Link>
      </ul>
    );
  });
};
