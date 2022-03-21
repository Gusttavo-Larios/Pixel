import { PixelRatio } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 0 ${PixelRatio.getPixelSizeForLayoutSize(5)}px;
    align-items: center;
    background-color: ${props => props.theme.COLORS.WHITE_100};
`;