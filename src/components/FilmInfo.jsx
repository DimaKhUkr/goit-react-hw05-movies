export const FilmInfo = ({ filmData }) => {
  console.log(filmData);
  const { poster_path } = filmData;

  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="" />
      </div>
      <div>
        <h1></h1>
        <p></p>
        <h2></h2>
        <p></p>
        <h3></h3>
        <p></p>
      </div>
    </div>
  );
};
