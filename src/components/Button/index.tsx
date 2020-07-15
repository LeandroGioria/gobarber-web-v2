import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
// Coloca todos atributos do input disponivel para o InputProps
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
