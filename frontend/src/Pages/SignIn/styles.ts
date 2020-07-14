import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import { Form as UnformForm } from '@unform/web';

const fillToNormalWidth = keyframes`
  0% {
    transform: scale(0.2, 1);
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
    flex-direction: column;
  }
`;

export const GreetingsContainer = styled.div`
  background: #51a59c;
  border-radius: 0 15px 15px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: #fff;
  transform-origin: right;
  animation: ${fillToNormalWidth} 1s ease;
  h1 {
    margin-bottom: 13px;
  }
  p {
    max-width: 208px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 300;
  }

  @media screen and (max-width: 763px) {
    border-radius: 0 0 15px 15px;
    transform-origin: bottom;
    animation: ${fadeFromBottom} 1s ease;
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

  a {
    margin: 10px auto;
    text-decoration: none;
    color: ${shade(0.5, '#51a59c')};

    &:hover {
      color: ${shade(0.8, '#51a59c')};
    }
  }

  button {
    width: 100px;
  }
`;
