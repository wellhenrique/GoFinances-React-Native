import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardData,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardData {
  id: number;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: 1,
      type: "positive",
      title: "Desenvolvimento de website",
      ammount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "12/07/2022",
    },
    {
      id: 2,
      type: "negative",
      title: "Supermercado",
      ammount: "R$ 1.200,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "01/07/2022",
    },
    {
      id: 3,
      type: "negative",
      title: "Aluguel do apatamento",
      ammount: "R$ 1.000,00",
      category: {
        name: "Aluguel",
        icon: "home",
      },
      date: "06/07/2022",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/76652528?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Welisson</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          ammount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de junho"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          ammount="R$ 8.340,00"
          lastTransaction="Última saida dia 28 de junho"
        />
        <HighlightCard
          type="total"
          title="Entradas"
          ammount="R$ 8.960,00"
          lastTransaction="Dia 01 à 30 de junho"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={({ id }: DataListProps) => id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
