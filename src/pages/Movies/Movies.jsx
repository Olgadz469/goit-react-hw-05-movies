import { useEffect, useState } from 'react';
import FilmsList from 'components/FilmsList/FilmsList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'Servises/getMovies';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }

    const searchMovies = () => {
      setLoading(true);
      fetchSearchByKeyword(searchRequest)
        .then(searchResults => {
          if (searchResults.length === 0) {
            alert('No movies found!');
          }
          setSearchFilms(searchResults);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(setLoading(false));
    };
    searchMovies();
  }, [searchRequest]);

  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }

  return (
    <main>
      <Form searchMovies={onSubmit} />
      {loading && <Loader />}
      {error && <div>{error}</div>}

      {searchFilms && <FilmsList films={searchFilms} />}
    </main>
  );
};
export default Movies;
