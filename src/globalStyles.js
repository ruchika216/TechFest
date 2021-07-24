import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  // font-family: 'Vipnagorgialla';
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
font-family: EXO;
  border-radius: 49px;
  background: ${({ primary }) => (primary ? '#5de3f1' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '10px 27px' : '7px 10px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '13px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 10px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 45%;
  }
`;

export default GlobalStyle;
