import React, { FunctionComponent } from 'react';

type ButtonProps = {
  onClick?(e: React.MouseEvent<any>): any;
  className?: string;
  type?: any;
}

const Button: FunctionComponent<ButtonProps> = ({onClick, className, children, type = "submit"}) =>
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>

  export default Button;
