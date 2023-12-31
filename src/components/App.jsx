import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
// import Home from 'pages/Home/Home';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Movies from 'pages/Movies/Movies';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));

const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    // </div>
  );
};
export default App;
