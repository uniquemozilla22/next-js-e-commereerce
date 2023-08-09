"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string | any;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={"btn " + className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
