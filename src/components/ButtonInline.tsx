import React from 'react';
import Button from './Button';

type ButtonInlineProps = {
  onClick?(e: React.MouseEvent<any>): any;
}

const ButtonInline: React.FC<ButtonInlineProps> = ({onClick, children }) =>
  <Button className="button-inline" onClick={onClick}>
    {children}
  </Button>

  export default ButtonInline;
