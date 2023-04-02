import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieId } from 'API';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [curentMovie, setCurentMovie] = useState(null);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async () => {
      try {
        const movie = await fetchMovieId(movieId);
        setCurentMovie(movie);
      } catch (error) {
        alert(error);
        return;
      }
    };

    fetch();
  }, [movieId]);

  return <>{curentMovie && <MovieInfo movie={curentMovie} />}</>;
};
export default MovieDetails;
