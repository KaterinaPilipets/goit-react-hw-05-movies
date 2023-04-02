import axios from 'axios';

const API_KEY = '8c3b14bfd964334b0e677cd4ab73e9a9';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export async function fetchTrending() {
  const response = await axios('/3/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
}

export async function fetchMoviesByName(name) {
  const response = await axios('/3/search/movie', {
    params: {
      api_key: API_KEY,
      query: name,
      page: 1,
    },
  });
  return response.data;
}

export async function fetchMovieId(movieId) {
  const response = await axios(`/3/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}

export async function fetchMovieCredits(movieId) {
  const response = await axios(`/3/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios(`/3/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}
// export const fetchMovie = (movieId, fetchMovieFunc) => {
//   let movie = null;
//   if (!movieId) {
//     return;
//   }
//   const fetch = async () => {
//     try {
//       movie = await fetchMovieFunc(movieId);
//     } catch (error) {
//       alert(error);
//       return;
//     }
//   };
//   fetch();
//   return movie;
// };
