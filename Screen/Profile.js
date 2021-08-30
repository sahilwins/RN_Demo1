
import React, {useState}from 'react'
import { StyleSheet, Text, View ,TextInput, Button,SafeAreaView} from 'react-native'

const Profile = ({navigation}) => {
 const [textInput, setTextinput] = useState()
  return (
    
      <SafeAreaView>
        <Text style={{color:'blue'}}>Logic Screen</Text>
       <TextInput  style={styles.color}
       placeholder="Enter your name here"
       onChangeText={(value)=> setTextinput(value)}/>

     <TextInput style={styles.color}
     placeholder="password" 
     />
     <Button onPress={()=> navigation.navigate("MainHomeScreen")} title="login"/>
      </SafeAreaView>
    
  )
}

export default Profile

const styles=StyleSheet.create({
  color:{
    backgroundColor:'yellow' ,
  height:40,
   marginTop:10,
   

  }
})
