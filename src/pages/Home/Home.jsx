import MovieList from 'components/MovieList';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/ApiService';

import { PageTitle } from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const getData = async period => {
      try {
        const { results } = await getTrending(period);

        setTrendMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getData('day');
  }, []);

  return (
    <>
      <PageTitle>Most popular of the day</PageTitle>
      <MovieList movies={trendMovies} />
    </>
  );
};

export default Home;