"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  primary?: boolean;
  secondary?: boolean;
  children: string | any;
  className: string;
}

const Button: React.FC<IButtonProps> = ({
  primary,
  secondary,
  children,
  className,
  ...rest
}) => {
  className += (primary && "btn-primary") || (secondary && "btn-secondary");
  return (
    <button className={"btn " + className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
