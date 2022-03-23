import { PixelRatio } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  width: ${PixelRatio.getPixelSizeForLayoutSize(50)}px;
  height: ${PixelRatio.getPixelSizeForLayoutSize(100)}px;
  overflow: hidden;
  border-radius: ${PixelRatio.getPixelSizeForLayoutSize(5)}px;
  margin: 0 5px;
  padding: 10px 15px;
  justify-content: flex-end;
`;

export const Author = styled.Text`
  font-size: ${PixelRatio.getPixelSizeForLayoutSize(4.5)}px;
  color: ${(props) => props.theme.COLORS.WHITE_100};
  width: 70%;
  ${{
    textShadowOffset: {
      width: 10,
      height: 10,
    },
    textShadowRadius: 15,
    textShadowColor: "#000",
  }}
`;

type FooterType = {
   isVisible: Boolean
}

export const Footer = styled.View<FooterType>`
  width: 100%;
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
