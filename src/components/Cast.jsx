import PropTypes from 'prop-types';

const Cast = ({ cast }) => {
  return (
    <main>
      <h1>Casts</h1>
      {cast.map(c => {
        return (
          <div key={c.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w400${c.profile_path}`}
                alt={`Sorry img of film "${c.name}" not found`}
              />
            </div>
            <div>
              <p>{c.name}</p>
              <p>{c.character}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Cast;
Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
};
