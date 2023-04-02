import { useEffect, useState } from 'react';
import { fetchTrending } from 'API';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const movies = await fetchTrending();
        setTrendingMovies(movies.results);
      } catch (error) {
        alert('Sorry, please try again');
        return;
      }
    };
    fetch();
  }, []);
  return (
    <>
      <h1>Trending Movies</h1>

      {trendingMovies && <MoviesList list={trendingMovies} />}
    </>
  );
};
export default Home;
