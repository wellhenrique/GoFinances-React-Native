import React from "react";

import { Container, Category, Icon } from "./styles";

interface CategorySelectData {
  title: string;
  onPress: () => void
}

export function CategorySelectButton({ title, onPress }: CategorySelectData) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
