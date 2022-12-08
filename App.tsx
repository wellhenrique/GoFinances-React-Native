import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import "react-native-gesture-handler";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";

import { Register } from "./src/screens/Register";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Register />
      <StatusBar backgroundColor="transparent" translucent={true} />
    </ThemeProvider>
  );
}
