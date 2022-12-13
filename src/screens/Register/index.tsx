import React, { useState } from "react";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";

import * as Yup from "yup";
import uuid from "react-native-uuid";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CategorySelect } from "../CategorySelect";
import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/TransactionTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";
import { useEffect } from "react";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor numérico")
    .positive("O valor não pode ser negativo")
    .required("O preço é obrigatório"),
});

export function Register() {
  const collectionKey = "@goFinances:transactions";

  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleTransactionTypeSelect(type: "positive" | "negative") {
    setTransactionType(type);
  }

  function handleOpenSelectCategory() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategory() {
    setCategoryModalOpen(false);
  }

  async function handleRegister({ name, amount, ...res }: any) {
    if (!transactionType) return Alert.alert("Selecione o tipo da transação");
    if (category.key === "category")
      return Alert.alert("Selecione a categoria");
    if (!name || !amount) return Alert.alert("Preencha todos os campos");

    const newTransaction = {
      name,
      amount,
      type: transactionType,
      date: new Date(),
      category: category.key,
      id: uuid.v4().toString(),
    };

    try {
      const data = await AsyncStorage.getItem(collectionKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransaction];
      await AsyncStorage.setItem(collectionKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType("");
      setCategory({
        key: "category",
        name: "Categoria",
      });
      navigation.navigate("Listagem" as never);
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar");
    }

    return Alert.alert("Sucesso", "Transação cadastrada com sucesso");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <TransactionTypes>
              <TransactionTypeButton
                title="entrada"
                type="up"
                isActive={transactionType === "positive"}
                onPress={() => handleTransactionTypeSelect("positive")}
              />

              <TransactionTypeButton
                title="saída"
                type="down"
                isActive={transactionType === "negative"}
                onPress={() => handleTransactionTypeSelect("negative")}
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
    </TouchableWithoutFeedback>
  );
}
