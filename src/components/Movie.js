import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, CoverImage, title, summary, genres, year, star }) {
  return (
    <div className={styles.movie}>
      <img src={CoverImage} alt={title} className={styles.movie_img} />
      <div>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie_year}>{year}</h3>
        <h3>⭐️ {star}</h3>
        <p>{summary.length > 110 ? `${summary.slice(0, 110)}...` : summary}</p>
        <ul className={styles.movie_genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  CoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
