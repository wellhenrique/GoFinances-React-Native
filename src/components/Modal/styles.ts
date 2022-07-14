import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 80%;
  height: ${RFValue(150)}px;
  background-color: ${({ theme }) => theme.colors.shape};
`;
