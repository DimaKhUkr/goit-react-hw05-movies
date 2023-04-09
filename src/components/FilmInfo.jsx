import { useLocation } from 'react-router-dom';
import { BackLink } from './BackLink';
import PropTypes from 'prop-types';

export const FilmInfo = ({ filmData }) => {
  const { poster_path, vote_average, title, release_date, genres, overview } =
    filmData;
  const normDate = new Date(release_date).getFullYear();
  const genresList = genres.map(g => g.name).join(', ');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <div>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          alt={`Sorry img of film "${title}" not found`}
        />
      </div>
      <div>
        <h1>{`${title}(${normDate})`}</h1>
        <p>{`User Score : ${Math.round(vote_average * 10)}%`}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresList}</p>
      </div>
    </div>
  );
};

FilmInfo.propTypes = {
  films: PropTypes.shape({
    poster_path: PropTypes.string,
    vote_average: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.string,
    overview: PropTypes.string,
  }),
};
