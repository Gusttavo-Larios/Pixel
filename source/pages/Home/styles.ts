import { PixelRatio } from "react-native";
import styled from "styled-components/native";

export const ListImages = styled.FlatList`
  margin-top: ${PixelRatio.getPixelSizeForLayoutSize(10)}px;
`;

export const ItemSeparator = styled.View`
  width: 100%;
  height: ${PixelRatio.getPixelSizeForLayoutSize(2.5)}px;
`;
