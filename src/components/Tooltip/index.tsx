import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string; // necessary to use on styled(Tooltip)` (styles.ts - Input)
}
const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
