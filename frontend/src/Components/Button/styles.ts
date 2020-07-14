import styled from 'styled-components';

interface ContainerProps {
  color: string;
  background: string;
  outline?: boolean;
}

export const Container = styled.button<ContainerProps>`
  padding: 8px 16px;
  border: 2px solid ${props => (props.outline ? props.color : props.background)};
  background: ${props => (props.outline ? props.background : props.color)};
  color: ${props => (props.outline ? props.color : props.background)};
  font-weight: bold;
  border-radius: 25px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => (props.outline ? props.background : props.color)};
    background: ${props => (props.outline ? props.color : props.background)};
    color: ${props => (props.outline ? props.background : props.color)};
  }
`;
