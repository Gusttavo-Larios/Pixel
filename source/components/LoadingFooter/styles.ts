import { PixelRatio } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: ${PixelRatio.getPixelSizeForLayoutSize(10)}px;
    align-items: center;
`;