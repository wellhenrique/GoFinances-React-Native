import React from "react";

import { Container, Category, Icon } from "./styles";

interface CategorySelectData {
  title: string;
}

export function CategoriSelect({ title }: CategorySelectData) {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
