import { useLocation } from 'react-router-dom';
import { Link, ListMovie } from './MoviesList.styled';

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
