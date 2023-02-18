import PropTypes from "prop-types";
import { Link } from "react-router-dom";
                //parent component로 부터 받아오는 properties
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
        {/* img 태그에 alt값 안넣으면 에러 */}
        <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
            <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;