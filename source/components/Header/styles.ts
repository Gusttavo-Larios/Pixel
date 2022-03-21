import { PixelRatio } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: 0px ${PixelRatio.getPixelSizeForLayoutSize(25)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: ${PixelRatio.getPixelSizeForLayoutSize(10)}px;
`;

type TitleProps = {
    size: number
} 

export const Title = styled.Text<TitleProps>`
    color: ${props => props.theme.COLORS.BLACK_900};
    font-size: ${props => PixelRatio.getPixelSizeForLayoutSize(props.size)}px;
`;