import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios'
// In future suspense will take over for fetching data

const dataFetchingWithHooks = () => {

    const[post,setPosts] = useState([])
    const[id, setId] =  useState("1")  // * To set default value for inputText, it must be string
    const[idFromButton , setIdFromButton] = useState("1")

    const onButtonClick = () => {
        setIdFromButton(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(response=> {
            console.log(response.data)
            setPosts(response.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[idFromButton])

    return (
        <View>
            <Text>POSTSSSS</Text>
            <TextInput
                keyboardType='numeric'
                style={{backgroundColor:'gray'}}
                value={id}
                onChangeText={(val)=>setId(val)}
            />
            <TouchableOpacity onPress={()=>onButtonClick()}>
                <Text>
                    Change Id
                </Text>
            </TouchableOpacity>
            <Text>
                {post.title}
            </Text>
            {/* {posts.map((post)=>(
                <Text>{post.title}</Text>
                )
            )} */}
        </View>
    )
}

export default dataFetchingWithHooks 