import React from 'react'
import { View } from 'react-native'
import ComponentB from './componentB'

function componentA() {
    return (
        <View>
            <ComponentB/>
        </View>
    )
}

export default componentA
