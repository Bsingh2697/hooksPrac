import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { TestCountContext } from '../../App'



const compB = () => {

    const action = useContext(TestCountContext)

    return (
        <View>
                <TouchableOpacity onPress={()=>action.testDispatch('increment')} style={styles.butSt}>
                    <Text>
                        Increment
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>action.testDispatch('decrement')} style={styles.butSt}>
                    <Text>
                        Decrement
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>action.testDispatch('reset')} style={styles.butSt}>
                    <Text>
                        Reset
                    </Text>
                </TouchableOpacity>
        </View>
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
        borderBottomColor:30,
        borderRadius:30
    }
})

export default compB