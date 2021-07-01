import "antd/dist/antd.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  movies: state.charactersAndMovies.movies,
});

const MovieDetails = ({ movies }) => {
  const releaseDates = movies
    .sort((a, b) => a.release_date - b.release_date)
    .map((movie) => movie.title + " - " + movie.release_date);

  return (
    <div>
      <p>Name/Year last Movies:</p>
      <p>{releaseDates[releaseDates.length - 1]}</p>x
    </div>
  );
};

export default connect(mapStateToProps)(MovieDetails);
