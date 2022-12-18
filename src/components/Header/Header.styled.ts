import styled from 'styled-components';

export const Header = styled.header`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem 25%;
  background-color: white;

  @media (max-width: 500px) {
    padding: 2rem 10%;
  }
`;
