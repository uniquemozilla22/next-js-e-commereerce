"use client";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: React.FC<IInputProps> = ({ className, ...rest }) => {
  return <input className={"input " + className} {...rest} />;
};

export default Input;
