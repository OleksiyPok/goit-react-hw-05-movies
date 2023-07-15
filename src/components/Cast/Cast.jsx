import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'services/ApiService';
import Actor from 'components/Actor';

import { Container, Ul, Li } from './Cast.styled';

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
    <Suspense>
      <Container>
        <Ul>
          {movieCast.map(actor => {
            return (
              <Li key={actor.id}>
                <Actor actorDetails={actor} />
              </Li>
            );
          })}
        </Ul>
      </Container>
    </Suspense>
  );
};
export default Cast;
