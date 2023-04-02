import { fetchMoviesByName } from 'API';
import MoviesList from 'components/MoviesList/MoviesList';
import FormSearch from 'components/FormSearch/FormSearch';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const curentMovie = searchParams.get('query') ?? '';
  useEffect(() => {
    if (!curentMovie) {
      return;
    }
    const fetch = async () => {
      try {
        const movies = await fetchMoviesByName(curentMovie);
        setFoundMovies(movies.results);
        if (!movies.results.length) {
          alert('Please write correct movie');
        }
      } catch (error) {
        alert(error);
        return;
      }
    };

    fetch();
  }, [curentMovie]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <FormSearch onSubmit={handleSubmit} />
      {foundMovies && <MoviesList list={foundMovies} />}
    </>
  );
};
export default Movies;
// {
//   /* <Outlet /> */
// }
