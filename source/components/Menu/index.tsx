import * as React from 'react';
import { PixelRatio } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { Button } from './styles';

function Menu() {
    const theme = useTheme()
    const navigation = useNavigation()
    return ( 
        <Button onPress={() => console.log('click')}>
            <Ionicons name="menu" size={PixelRatio.getPixelSizeForLayoutSize(15)} color={theme.COLORS.BLACK_900}/>
        </Button>
     );
}

export default Menu;