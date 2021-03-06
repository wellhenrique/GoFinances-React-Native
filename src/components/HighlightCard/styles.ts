import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { ReactNode } from "react";

interface TypeProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};
  border-radius: 5px;
  margin-right: 16px;

  width: ${RFValue(300)}px;
  padding: 10px 23px ${RFValue(26)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather as any)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${(props) =>
    props.type === "up" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `};

  ${(props) =>
    props.type === "down" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `};

  ${(props) =>
    props.type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;

  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
`;
