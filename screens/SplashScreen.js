import { View, Text, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
 
import LottieView from 'lottie-react-native';
import Splash from '../assets/splash.json'
import * as Animatable from 'react-native-animatable';
 

const SplashScreen = ({navigation}) => {


    setTimeout(()=>{
        navigation.push("Login")
    },5000)
  return (
    <View>
      <StatusBar/>
        <ImageBackground source={require("../assets/splash1.jpg")} className="h-full w-full">

        <View style={{flex:0.4,justifyContent:'center',alignItems:"center"}}>
        <LottieView
        autoPlay={true}
        style={{ width: '100%', height: '100%' }}
        loop={true}
       
        source={require('../assets/splash.json')}
    />
        
        </View>
          <Animatable.View animation="zoomInUp" className="items-center">
               
               <Text className="text-red-600 text-5xl">s<Text className="text-white text-5xl">treamCine</Text></Text>
              
                
              
          </Animatable.View>

         
              
        </ImageBackground>
    </View>
  )
}

export default SplashScreen