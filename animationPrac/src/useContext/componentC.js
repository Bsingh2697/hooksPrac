import React, {useContext} from 'react'
import { UserContext } from './../../App';
import { View, Text } from 'react-native';

function componentC() {
    const user = useContext(UserContext)
    return (
        <View>
            <Text>
                Hello From the other Side : {user.fname} {user.lname}
            </Text>
        </View>
    )
}

export default componentC
