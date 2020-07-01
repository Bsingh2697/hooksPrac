import React, { useContext }  from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { CountContext } from '../../App'

function componentE() {

    const countContext = useContext(CountContext)

    return (
        <View>
            <TouchableOpacity
                onPress= {()=> countContext.countDispatch('increment')}
                style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                <Text>
                    Increment
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress= {()=> countContext.countDispatch('decrement')}
                style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                <Text>
                    Decrement
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress= {()=> countContext.countDispatch('reset')}
                style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                <Text>
                    Reset
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default componentE
