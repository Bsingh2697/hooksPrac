import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, View, TextInput } from 'react-native'

// 1. Use effect is called after every render
// 2. Use effect takes two params (function, array of props or states based on which use effect will execute)
// 3. U can have multiple use effects but each use effect must have separate useState
    //   ex :  const [abc ,setAbc] =useState ("xyz"),
    //         useEffect(()=>{
                    //todo
    //            })
    //         const [name , setName] = useState({firstName:"", lastName:""})
    //         useEffect(()=>{
                    //todo
    //            })


function UseEffectPrac() {

    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    let someVal = 0

    const counter = () => {  //if we use prevCount the we dont need to set count in dependency array of use effect
        setCount(count+1)
    }

    useEffect(()=>{

        // Uncomment to check 1st point
        const timer = setTimeout(()=>{
            someVal+=1
            console.log("Some Val : " + someVal )
        },1000)

        const interval = setInterval(counter,5000);

        // U can perform cleanup tasks in return function.   
        // If I click again before 5 seconds then use effect with clear timeout and return.
        return ()=>{
            console.log("Clearing")
            clearTimeout(timer)
            clearInterval(interval)
        }

        //For second Point
        // console.log("Use Effect Running")
    },[count])  // Now if u heck only render will be logged in console if u type text, but for count useEffect will run.
                // Try passing empty array  : It will be called only once during initial render
    return (
        <View>
            <TouchableOpacity onPress={console.log("Render")}></TouchableOpacity>
            <TouchableOpacity onPress={()=>setCount(prevCount=>prevCount+1)}>
                <Text>Increment Count</Text>
            </TouchableOpacity>
            <Text>{`So the count is ${count}`}</Text>
            <Text>{`Some value is ${someVal}`}</Text>
            <TextInput 
                style={{backgroundColor:"gray", margin:20}}
                value={name}
                onChangeText={(e)=>setName(e)}
            />
        </View>
    )
}

export default UseEffectPrac
