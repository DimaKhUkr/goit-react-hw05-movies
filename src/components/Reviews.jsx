import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <main>
      <h1>REVO</h1>
      {reviews.map(r => {
        return (
          <div key={r.id}>
            <h2>{`Autor: ${r.author}`}</h2>
            <p>{r.content}</p>
          </div>
        );
      })}
    </main>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
