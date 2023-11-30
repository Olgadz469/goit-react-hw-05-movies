import axios from 'axios';
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '62144ae074e6d6ae76b1ff5ee4b62990';

export const fetchTrending = async () => {
  const response = await axios.get(
    `${API_URL}trending/movie/day?api_key=${API_KEY}`
  );

  return response.data.results;
};

export const fetchSearchByKeyword = async keyword => {
  const response = await axios.get(
    `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchActors = async movieId => {
  const response = await axios.get(
    `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `${API_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
