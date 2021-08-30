import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, TextInput,View} from 'react-native'

const MainHomeScreen = ({navigation}) => {
    return (
        <View>

            <Text style={{fontSize:40,color:'blue',marginBottom:10}}>Homescreen</Text>
            <Text style={{color:'black',backgroundColor:'orange'}}> Go to user data</Text>
            <TextInput style={styles.pot}
            placeholder="Button"/>

            <Button onPress={()=> navigation.navigate("UserHistory")}title="Button"/>
        </View>
    )
}

export default MainHomeScreen

const styles=StyleSheet.create({
    pot:{
        color:'red',
        backgroundColor:'yellow',
        height:40,
        marginTop:10,
        
        
    }
})
