import React, { useReducer, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


const initialValue = 0
const reducer = (state,action) => {
    switch(action){
        case  'increment':
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :
            return initialValue
        default :
            return state
    }
}

const useReducerThree= () =>  {

    // Suppose we have two counters with same functionality then unlike useReducerTwo, we can use only one reducer
    // for and rather create two two useReducer.
    // Here dispatch decides which state to handle.

    const [stateOne , dispatchOne] = useReducer(reducer, initialValue)
    const [stateTwo , dispatchTwo] = useReducer(reducer, initialValue)

    return (
        <View>
            <Text>
                {`Count One  : ${stateOne}           Count Two  : ${stateTwo} `}
            </Text>
            <View>
                <TouchableOpacity 
                    onPress= {()=> dispatchOne('increment')}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Increment
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatchOne('decrement')}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Decrement
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatchOne('reset')}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Reset
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatchTwo('increment')}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Increment TWO
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatchTwo('decrement')}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Decrement TWO
                    </Text>
                </TouchableOpacity>     
                <TouchableOpacity 
                    onPress= {()=> dispatchTwo('reset')}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Reset
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default useReducerThree

