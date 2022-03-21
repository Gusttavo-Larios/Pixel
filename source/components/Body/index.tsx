import React from 'react'
import { View } from 'react-native'
import { Container } from './styles'

type Props = {
    children: React.ReactNode
}

function Body({children}: Props) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Body