import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  display: flex;
  border: 2px solid #eceff2;
  background: #eceff2;
  border-radius: 2px;
  transition: all 0.3s ease;
  margin-top: 15px;
  &:hover {
    > svg {
      transform: scale(1.1, 1.1);
    }
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #51a59c;
      color: #51a59c;
      > svg {
        transform: scale(1.1, 1.1);
      }
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #51a59c;
    `}



  > svg {
  margin-right: 12px;
  transition: all 0.3s ease;
  }

  input {
    border: 0;
    background: inherit;
    color: #444;
    &::placeholder {
      color: #999;
    }
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: #c53030;
  font-size: 14px;
`;
