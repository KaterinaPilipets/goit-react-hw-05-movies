import { Suspense, useRef } from 'react';
import { useLocation, NavLink, Outlet } from 'react-router-dom';
import { StyledLink, Year, Container, ContainerLink } from './MovieInfo.styled';
import PropTypes from 'prop-types';
const MovieInfo = ({ movie }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const {
    poster_path,
    title,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <>
      <StyledLink to={backLink.current} state={{ from: location }}>
        Go back
      </StyledLink>
      <Container>
        <img
          src={poster_path && `${IMAGE_BASE_URL}${poster_path}`}
          alt={title}
        />

        <div>
          <h2>
            {title || original_title}{' '}
            <Year>{`(${release_date?.slice(0, 4)})`}</Year>
          </h2>
          User score: <span>{Math.round(vote_average * 10)}%</span>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name).join(' | ')}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      </Container>
      <div>
        <h3>Additional information</h3>
        <ContainerLink>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </ContainerLink>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};

export default MovieInfo;
