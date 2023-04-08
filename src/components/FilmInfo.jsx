export const FilmInfo = ({ filmData }) => {
  console.log(filmData);
  const {
    poster_path,
    vote_average,
    original_title,
    release_date,
    genres,
    overview,
  } = filmData;
  const normDate = new Date(release_date).getFullYear();
  const genresList = genres.map(g => g.name).join(', ');
  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="" />
      </div>
      <div>
        <h1>{`${original_title}(${normDate})`}</h1>
        <p>{`User Score : ${vote_average * 10}%`}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresList}</p>
      </div>
    </div>
  );
};
