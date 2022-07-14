import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

interface TransactionTypeProps extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};
export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...props
}: TransactionTypeProps) {
  return (
    <Container {...props} transactionType={type} isActive={isActive}>
      <Icon name={icons[type]} type={type} />

      <Title>{title}</Title>
    </Container>
  );
}
