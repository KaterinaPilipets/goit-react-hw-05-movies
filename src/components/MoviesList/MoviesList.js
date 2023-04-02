import { useLocation } from 'react-router-dom';
import { Link, ListMovie } from './MoviesList.styled';
import PropTypes from 'prop-types';
const MoviesList = ({ list }) => {
  const location = useLocation();
  return (
    <ListMovie>
      {list.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ListMovie>
  );
};
export default MoviesList;
MoviesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};
