import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'

const anime = () => {

const initialCount = 0
const [count, setCount] = useState(initialCount)
const [name , setName] = useState({firstName:"", lastName:""})
const [items, setItems] =useState([])

const addRandom = () => {
    setItems([...items,{
        id : items.length,
        item : Math.floor(Math.random()*100)+5 
    }])
}

    return (
        <ScrollView contentContainerStyle={{flexGrow:1,marginVertical:10,marginHorizontal:10,paddingBottom:20}}>
            <Text style={{fontSize:20}}>useState Example basic Counter</Text>
            <Text>
               Hello : {count}
            </Text>
            {/* Please make use of prevValue in case u need to make change to the value using prev state */}
            <TouchableOpacity onPress={()=>setCount(initialCount)}><Text>Reset</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setCount(prevCount => prevCount+1)}><Text>Increment</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setCount(prevCount => prevCount-1)}><Text>Decrement</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setCount(prevCount => prevCount+5)}><Text>Increment by 5</Text></TouchableOpacity>

{/* ********************************************************************************************************************************** */}
            <View style={{width:'100%',height:2, backgroundColor:'black',marginVertical:20}}></View>
{/* ********************************************************************************************************************************** */}

            <Text style={{fontSize:20}}>useState Example Multi Values</Text>
            <TextInput style={{backgroundColor:'gray',margin:10}} value={name.firstName} onChangeText={(firstName)=>setName({...name,firstName})}/>
            <TextInput style={{backgroundColor:'gray',margin:10}} value={name.lastName} onChangeText={(lastName)=>setName({...name,lastName})}/>
            <Text>{JSON.stringify(name)}</Text>

{/* ********************************************************************************************************************************** */}
<View style={{width:'100%',height:2, backgroundColor:'black', marginVertical:20}}></View>
{/* ********************************************************************************************************************************** */}

            <Text style={{fontSize:20}}>useState Example as an array </Text>
            <TouchableOpacity onPress={()=>addRandom()} ><Text>Add New Random Number</Text></TouchableOpacity>
            <FlatList
                data={items}
                keyExtractor={index=>{`${index}`}}
                renderItem={({item,index})=>(
                    <Text>
                        {item.item}
                    </Text>
                )}
            />

        </ScrollView>
    )
}

export default anime


