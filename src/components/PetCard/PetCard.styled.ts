import styled from 'styled-components';

export const PetCard = styled.section`
  display: flex;
  margin: 0 auto 1rem;
  padding: 1rem;
  min-height: fit-content;
  width: 70%;
  max-height: fit-content;
  max-width: 600px;
  background-color: white;
  width: 100%;
  height: 50%;
  display: block;

  @media (max-width: 900px) {
    width: 100%;
    height: 50%;
    display: block;
  }
`;

export const PetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-width: 100%;
  min-height: 500px;
  margin: 0;
  background-color: grey;
  display: block;
`;

export const PetReport = styled.div`
  height: 50%;
  width: 100%;
  padding: 1rem;
  border: 1px solid black;
  margin-left: 0;
  display: block;
  h2 {
    font-size: 2rem;
  }
`;
