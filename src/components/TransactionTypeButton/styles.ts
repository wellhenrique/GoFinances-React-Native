import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean;
  transactionType: "up" | "down";
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;

  ${({ isActive, transactionType }) =>
    isActive &&
    transactionType === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
      border: 1.5px solid ${({ theme }) => theme.colors.success_light};
    `};

  ${({ theme, isActive, transactionType }) =>
    isActive &&
    transactionType === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
      border: 1.5px solid ${({ theme }) => theme.colors.attention_light};
    `};
`;

export const Icon = styled(Feather as any)<IconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
