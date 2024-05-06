import { View, Text ,StyleSheet,Button} from 'react-native'
import React,{useState} from 'react'
import Qrcode from '../component/Qrcode'
import {useNavigation} from '@react-navigation/native';

const Qrcodescreen = () => {
    const navigation = useNavigation();
    
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-around',
      }}>
      <Button
        onPress={() => {
          navigation.navigate('ScannerScreen');
        }}
        title="Scan Qrcode"
      />
      <Button
        onPress={() => {
          navigation.navigate('GeneratorScreen');
        }}
        title="Genrate Qrcode"
      />
    </View>
  )
}

export default Qrcodescreen