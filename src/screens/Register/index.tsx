import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { CategoriSelect } from "../../components/Forms/CategoriSelect";

import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/TransactionTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionTypes>
            <TransactionTypeButton
              title="entrada"
              type="up"
              isActive={transactionType === "up"}
              onPress={() => handleTransactionTypeSelect("up")}
            />
            <TransactionTypeButton
              title="saída"
              type="down"
              isActive={transactionType === "down"}
              onPress={() => handleTransactionTypeSelect("down")}
            />
          </TransactionTypes>

          <CategoriSelect title="Categoria" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
