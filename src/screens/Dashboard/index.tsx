import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

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
} from "./styles";

export function Dashboard() {
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
    </Container>
  );
}
