import React, { useContext } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import CompB from './compB';
import { TestCountContext } from '../../App';


const compA = () => {
    
const count = useContext(TestCountContext)

    return (
        <View>
            <Text>
                {`Component A -> B`}
            </Text>
            <Text>
                Count Value: {count.testCountValue.count}
            </Text>
            <CompB/>
        </View>
    )
}

export default compA