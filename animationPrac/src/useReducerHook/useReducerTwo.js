import React, { useReducer, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


const initialValue = {
    firstCounter : 0,
    secondCounter : 5,
}

const reducer = (state,action) => {
    switch(action.type){
        case  'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement' :
            return {...state, firstCounter: state.firstCounter - action.value}
        case  'incrementSecond':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrementSecond' :
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset' :
            return initialValue
        default :
            return state
    }
}

const useReducerTwo = () =>  {

    //  Here count refers to whole initial object
    const [state , dispatch] = useReducer(reducer, initialValue)

    return (
        <View>
            <Text>
                {`First Count  : ${state.firstCounter}        Second Count : ${state.secondCounter}`}
            </Text>
            <View>
                <TouchableOpacity 
                    onPress= {()=> dispatch({type : 'increment', value: 1})}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Increment
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatch({type : 'decrement', value: 1})}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Decrement
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatch({type : 'increment', value: 5})}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Increment 5
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatch({type : 'decrement', value: 5})}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Decrement 5
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatch({type : 'incrementSecond', value: 5})}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Increment Second Counter
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatch({type : 'decrementSecond', value: 5})}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Decrement Second Counter
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {()=> dispatch({type : 'reset'})}
                    style={{marginVertical:20, marginHorizontal:30, alignItems:'center',alignSelf:'center', backgroundColor:'#DDD', borderRadius:20, paddingVertical:10, paddingHorizontal:100}}>
                    <Text>
                        Reset
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default useReducerTwo

