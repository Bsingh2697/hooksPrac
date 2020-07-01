import React, {useReducer } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const initialState = {
    count : 0,
    lastAction :null, 
}

// reducer takes 2 parameters :      1. current state   2.action dispatched
const reducer = (state,action) => {
    switch(action.type){
        case 'increment' : 
            return {...state, count : state.count + 1}
        case 'decrement' : 
            return {...state, count : state.count - 1}
        case 'incrementFive' : 
            return {...state, count : state.count + 5}
        case 'decrementFive' : 
            return {...state, count : state.count - 5}
        case 'reset' :
            return initialState
        default :
            return state
    }
}

const useReducerPrac = () => {

    //use Reducer Takes 2 parameters :    1. Reducer      2. Initial Value
    const [countOne , dispatchOne] = useReducer(reducer, initialState)
    const [countTwo , dispatchTwo] = useReducer(reducer, initialState)

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <Text>
                Counter One Value : {countOne.count}
            </Text>
            <TouchableOpacity onPress={()=>dispatchOne({type:'increment'})} style={styles.butSt}>
                <Text>Increment Counter 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatchOne({type:'decrement'})} style={styles.butSt}>
                <Text>Decrement Counter 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatchOne({type:'incrementFive'})} style={styles.butSt}>
                <Text>Increment Counter 1 by +5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatchOne({type:'decrementFive'})} style={styles.butSt}>
                <Text>Decrement Counter 1 by +5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatchOne({type:'reset'})} style={styles.butSt}>
                <Text>Reset</Text>
            </TouchableOpacity>

        <View style={{backgroundColor:'black',height:2,width:'100%'}}></View>
            <Text>
                Counter Two Value : {countTwo.count}
            </Text>
            <TouchableOpacity onPress={()=>dispatchTwo({type:'increment'})} style={styles.butSt}>
                <Text>Increment Counter 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatchTwo({type:'decrement'})} style={styles.butSt}>
                <Text>Decrement Counter 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatchTwo({type:'incrementFive'})} style={styles.butSt}>
                <Text>Increment Counter 2 by +5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatchTwo({type:'decrementFive'})} style={styles.butSt}>
                <Text>Decrement Counter 2 by +5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatchTwo({type:'reset'})} style={styles.butSt}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    butSt : {
        height:40,
        width:300,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#DDD',
        margin:10,
        borderBottomColor:30
    }
})

export default useReducerPrac
