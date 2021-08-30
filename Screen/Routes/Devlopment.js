import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
};
const dino = require("../assets/ooo.jpg")

const Development = () => {
    return (
        <View style={{ flex: 1 }}>
              <ScrollView>
            <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image style={{width:200, height:200}} source={require("../assets/ooo.jpg")}/>
            <Image source={logo} />
            <Image source={dino} style={{width:250, height:250}}/>
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>If you like</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>Scrolling down</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>What's the best</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>Framework around?</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 80 }}>React Native</Text>
          </ScrollView>

        </View>
       

    )
};

export default Development;