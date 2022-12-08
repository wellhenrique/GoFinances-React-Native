import React from "react";
import { TextInputProps } from "react-native";

import { Control, Controller } from "react-hook-form";

import { Input } from "../Input";

import { Container } from "./styles";

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export function InputForm({ control, name, ...props }: Props) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input {...props} onChangeText={onChange} value={value} />
        )}
      />
    </Container>
  );
}
