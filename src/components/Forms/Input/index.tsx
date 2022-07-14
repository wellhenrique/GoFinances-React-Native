import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

type InputData = TextInputProps;

export function Input({ ...props }: InputData) {
  return <Container {...props} />;
}
