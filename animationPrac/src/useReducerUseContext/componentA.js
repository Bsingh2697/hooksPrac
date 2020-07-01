import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import ComponentC from './componentC'
import { CountContext } from '../../App'

function componentA() {

    const countContext  = useContext(CountContext)

    return (
        <View>
            <Text style={{marginVertical:20}}>
                COUNT : {countContext.countValue}
            </Text>
            <Text>
                Component C
            </Text>
            <ComponentC/>
        </View>
    )
}

export default componentA
