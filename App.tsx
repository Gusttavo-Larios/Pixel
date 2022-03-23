import * as React from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./source/routes";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./source/theme";
import { useFonts } from "expo-font";
import {
  Roboto_900Black,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }
  return (
    <>
      <StatusBar style="auto" hidden />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
