import React from "react";
import { TextInputProps } from "react-native";

import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

import { Input } from "../Input";

import { Container, Error } from "./styles";

type ErrorType =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined;

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: ErrorType;
}

export function InputForm({ control, name, error, ...props }: Props) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input {...props} onChangeText={onChange} value={value} />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
