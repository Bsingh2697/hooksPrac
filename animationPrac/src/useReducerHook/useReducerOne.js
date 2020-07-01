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

const useReducerOne = () =>  {

    const [count , dispatch] = useReducer(reducer, initialValue)

    // How it works : 
        // So basically first of all we created 'count' whose value is set to 'initialValue' in the beginning
        // Look at this analogy with use state
            //  const [count , setCount] = useState(initialValue)          
            //  const [count , dispatch] = useReducer(reducer, initialValue) // here we have reducer extra which sets the value
        //  now use UseReducer is very similar to it. Except for one thing
        // When we use dispatch it goes to reducer along with action and returns us new state. 
        // While in useState we executed the setCount function directly.

    

    return (
        <View>
            <Text>
                Count  : {count}
            </Text>
            <View>
                <TouchableOpacity 
                    onPress= {()=> dispatch('increment')}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Increment
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatch('decrement')}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Decrement
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatch('reset')}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Reset
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default useReducerOne

