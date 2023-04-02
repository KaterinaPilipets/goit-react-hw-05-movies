import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'API';

const Reviews = () => {
  const { movieId } = useParams();
  const [curentMovie, setCurentMovie] = useState(null);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async () => {
      try {
        const movie = await fetchMovieReviews(movieId);
        setCurentMovie(movie.results);
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
    return <p>Sorry we don't have any reviews for this movie!</p>;
  }

  return (
    <div>
      <ul>
        {curentMovie?.map(({ id, author, content }) => (
          <li key={id}>
            <h2>
              Author: <span>{author}</span>
            </h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
