import * as React from "react";
import { ActivityIndicator, PixelRatio } from "react-native";
import { Container } from "./styles";

function LoadingFooter() {
  return (
    <Container>
      <ActivityIndicator
        size={PixelRatio.getPixelSizeForLayoutSize(15)}
        color="#000"
      />
    </Container>
  );
}

export default LoadingFooter;
