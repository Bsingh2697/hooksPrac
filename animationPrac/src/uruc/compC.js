import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import componentC from './../useContext/componentC';
import CompD from './compD';
import { TestCountContext } from '../../App';

const compC = () => {

    const count = useContext(TestCountContext)

    return (
        <View>
            <Text>
                {`Component C -> D ->E`}
            </Text>
            <Text>
                Count value : {count.testCountValue.count}
            </Text>
            <CompD/>
        </View>
    )
}

export default compC