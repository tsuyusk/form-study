import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  background: string;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  background,
  ...rest
}) => {
  return (
    <Container type="button" background={background} color={color} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
