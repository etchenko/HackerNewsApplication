import React, { FunctionComponent } from 'react';

type ButtonProps = {
  onClick?(e: React.MouseEvent<any>): any;
  className: string;
}

const Button: FunctionComponent<ButtonProps> = ({onClick, className, children}) =>
  <button type={"button"} className={className} onClick={onClick}>
    {children}
  </button>

  export default Button;
