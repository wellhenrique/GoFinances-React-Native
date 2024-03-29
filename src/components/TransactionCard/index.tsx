import React from "react";
import { categories } from "../../utils/categories";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

export interface TransactionCardData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface TransactionCardProps {
  data: TransactionCardData;
}

export function TransactionCard({ data }: TransactionCardProps) {
  const [category] = categories.filter(({ key }) => key === data.category);
  console.log(data, "data");
  return (
    <Container>
      <Title>{data.name}</Title>

      <Amount type={data.type}>
        {data.type === "negative" ? `- ${data.amount}` : data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
