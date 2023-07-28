import React from 'react';
// import { useLocation } from 'react-router-dom';

import MovieSmallCard from 'components/MovieSmallCard';

import PropTypes from 'prop-types';

import { Ul } from './MovieList.styled';

const MovieList = ({ movies }) => {
  // const location = useLocation();
  // console.log('location:', location);

  return (
    // <ComponentContainer>
    <Ul>
      {movies.map(movie => (
        <MovieSmallCard key={movie.id} movie={movie} />
      ))}
    </Ul>
    // </ComponentContainer>
  );
};

MovieList.propTypes = { movies: PropTypes.array };

export default MovieList;
