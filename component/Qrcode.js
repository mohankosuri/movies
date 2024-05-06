import { View, Text } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

const Qrcode = ({value, getRef}) => {
  return (
    <QRCode
        value={value}
        size={250}
        color="black"
        backgroundColor="white"
        getRef={getRef}
        />
  )
}

export default Qrcode