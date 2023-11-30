import React, { useEffect, useState } from 'react';
import FilmsList from 'pages/FilmsList/FilmsList';
import { fetchTrending } from 'Servises/getMovies';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchTrendingFilms = () => {
      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <FilmsList films={films} />
      {loading && <Loader />}
    </main>
  );
};
export default Home;
