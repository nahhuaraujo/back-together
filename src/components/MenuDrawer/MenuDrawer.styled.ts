import styled from 'styled-components';
import { darkGreenColorValue, lightGreenColorValue, unstyledButton } from '../../styles/global-styles.styled';

interface IMenuDrawerProps {
  isOpen: boolean;
}
export const MenuDrawer = styled.nav<IMenuDrawerProps>`
  padding: 1rem;
  text-align: right;
  width: 50%;
  height: 100vh;
  background-color: ${lightGreenColorValue};
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? 0 : '-200%')};
  z-index: 1;
  transition: 300ms;

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;

    li:first-child {
      button {
        padding: 1rem;
        cursor: pointer;
        ${unstyledButton};
      }
    }

    li:last-child {
      margin-top: auto;
    }

    li {
      list-style: none;
      display: block;
    }

    button {
      text-align: inherit;
      cursor: pointer;
      ${unstyledButton};
    }
  }
`;

interface IDropBackProps {
  isOpen: boolean;
}
export const DropBack = styled.div<IDropBackProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  right: ${({ isOpen }) => (isOpen ? 0 : '-200%')};
  transition: 300ms;
  cursor: pointer;
`;