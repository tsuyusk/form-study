import styled, { keyframes } from 'styled-components';

import { Form as UnformForm } from '@unform/web';

const fillToNormalWidth = keyframes`
  0% {
    transform: scale(0, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const fadeFromBottom = keyframes`
  0% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 1);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  background: #fff;
  display: flex;
  width: 860px;
  padding: 5px;
  height: 422px;
  border: 0 50px;
  border-radius: 15px;
  @media screen and (max-width: 763px) {
    flex-direction: column-reverse;
  }
`;

export const GreetingsContainer = styled.div`
  background: #51a59c;
  border-radius: 15px 0 0 15px;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  transform-origin: bottom left;
  animation: ${fillToNormalWidth} 1s ease;

  h1 {
    margin-bottom: 13px;
  }
  p {
    max-width: 208px;
    text-align: center;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 763px) {
    transform-origin: bottom;
    animation: ${fadeFromBottom} 1s ease;
    border-radius: 0 0 15px 15px;
    padding: 5px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  align-items: center;
  justify-content: center;
  h1 {
    color: #51a59c;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 763px) {
    width: 100%;
  }
`;

export const Form = styled(UnformForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 16px;
    width: 100px;
  }
`;
