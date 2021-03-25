import React, {setState} from 'react';
import styled from 'styled-components/macro';
import { Container } from '../styles/Styles';
import Movie from './components/Movie';


const Movies = ({ myProp }) => {
  const handleEvent = () => {
    console.log('Event handled');
  };
  return (
    <>
       <Container>
        <button type="button" onClick={handleEvent}>
          Klikk meg
        </button>
      </Container>
    </>
  );
};

export default Movies;