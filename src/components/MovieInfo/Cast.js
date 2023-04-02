import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'API';
import { Galery } from './MovieInfo.styled';
const Cast = () => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';
  const { movieId } = useParams();
  const [curentMovie, setCurentMovie] = useState(null);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async () => {
      try {
        const movie = await fetchMovieCredits(movieId);
        setCurentMovie(movie.cast);
      } catch (error) {
        alert(error);
        return;
      }
    };

    fetch();
  }, [movieId]);

  if (!curentMovie) {
    return null;
  }

  if (curentMovie.length === 0) {
    return <p>Sorry we don't have any cast for this movie!</p>;
  }

  return (
    <div>
      <Galery>
        {curentMovie?.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            {profile_path && (
              <img src={`${IMAGE_BASE_URL}${profile_path}`} alt={name} />
            )}
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </Galery>
    </div>
  );
};
export default Cast;
