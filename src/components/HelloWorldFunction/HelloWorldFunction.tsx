import React from "react";
import { Background } from "./HelloWorld.styled";

type HelloWorldFunctionProps = {
  text: string;
};

export const HelloWorldFunction = ({ text }: HelloWorldFunctionProps) => {
  return <Background>{text}</Background>;
};
