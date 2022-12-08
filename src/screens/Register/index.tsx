import React, { useState } from "react";
import { Modal } from "react-native";

import { useForm } from "react-hook-form";

import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/TransactionTypeButton";

import { CategorySelect } from "../CategorySelect";

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
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const { control, handleSubmit } = useForm();

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategory() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategory() {
    setCategoryModalOpen(false);
  }

  function handleRegister(form: any) {
    // if (
    //   // !name ||
    //   // !amount ||
    //   transactionType === "" ||
    //   category.key === "category"
    // )
    //   return;

    // const data = {
    //   // name,
    //   // amount,
    //   transactionType,
    //   category: category.key,
    // };
    console.log(form, "form");
  }

  function handleInputChange(text: string) {}

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm name="name" control={control} placeholder="Nome" />
          <InputForm name="amount" control={control} placeholder="Preço" />

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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategory}
          />
        </Fields>

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </Container>
  );
}
