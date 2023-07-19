import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/ApiService';
import Actor from 'components/Actor';

import { ComponentContainer } from './Cast.styled';

// import PropTypes from 'prop-types'

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getData = async movieId => {
      try {
        const { cast } = await getCast(movieId);

        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getData(movieId);
  }, [movieId]);

  return (
    <ComponentContainer>
      {movieCast.map(actorDetails => (
        <Actor actorDetails={actorDetails} />
      ))}
    </ComponentContainer>
  );
};

// Cast.propTypes = {

// }

export default Cast;
