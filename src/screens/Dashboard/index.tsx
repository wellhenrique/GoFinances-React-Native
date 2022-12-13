import React, { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

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
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export interface DataListProps extends TransactionCardData {
  id: number;
}

export function Dashboard() {
  const [data, setData] = React.useState<DataListProps[]>([]);

  async function loadTransactions() {
    const collectionKey = "@goFinances:transactions";
    const response = await AsyncStorage.getItem(collectionKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted = transactions.map((item: DataListProps) => {
      const amount = Number(item.amount).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const date = Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }).format(new Date(item.date));

      return {
        id: item.id,
        name: item.name,
        amount,
        type: item.type,
        category: item.category,
        date,
      };
    });
    setData(transactionsFormatted);
  }

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

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
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de junho"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 8.340,00"
          lastTransaction="Última saída dia 28 de junho"
        />
        <HighlightCard
          type="total"
          title="Entradas"
          amount="R$ 8.960,00"
          lastTransaction="Dia 01 à 30 de junho"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={({ id }: DataListProps) => id}
          renderItem={({ item }: any) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
