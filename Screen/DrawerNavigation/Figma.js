import React from 'react'
import { View, Text,SafeAreaView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Figma = () => {
    return (
        <SafeAreaView style={{flex:1,justifyContent:"center",
        
        color:'red'
        
        }}>
        <TextInput placeholder="login" />
            <Text></Text>
        </SafeAreaView>
    )
}

export default Figma
