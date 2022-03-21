import * as React from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./source/routes";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./source/theme";

export default function App() {
  return (
    <>
      <StatusBar style="auto" hidden/>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
