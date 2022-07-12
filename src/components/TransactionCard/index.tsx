import React from "react";

import {
  Container,
  Title,
  Ammount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

interface Category {
  name: String;
  icon: String;
}

export interface TransactionCardData {
  type: "positive" | "negative";
  title: String;
  ammount: String;
  category: Category;
  date: String;
}

interface TransactionCardProps {
  data: TransactionCardData;
}

export function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Ammount type={data.type}>
        {data.type === "negative" ? `- ${data.ammount}` : data.ammount}
      </Ammount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
