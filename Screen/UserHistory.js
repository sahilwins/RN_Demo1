import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { TextInput,View,Text,Button,StyleSheet} from 'react-native'

const UserHistory=({navigation})=>{
    return(
        <View>
            <Text style={{color:'blue'}}>welcome to user data</Text>

             <TextInput style={styles.patchs}
        placeholder="go to user history"/>
       
        <Button onPress={()=>navigation.navigate("UserChoice")} title="button"/>
        </View>
        
       

    )
}
export default UserHistory

const styles = StyleSheet.create({
    patchs:{
        backgroundColor:'orange',
        color:'black',
        height:40,
        margin:10

    }

})