import { View, Text, TextInput, Share, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useRef } from 'react';
import QRCode from 'react-native-qrcode-svg';
import ViewShot from "react-native-view-shot";

const Qrcode = () => {
  const [qrvalues, setQrvalues] = useState('');
  const ref = useRef();

  const captureAndShareScreenshot = async () => {
    try {
      if (ref.current) {
        const uri = await ref.current.capture();
        console.log("Captured URI: ", uri); // Debugging line
        const options = {
          url: uri,
          message: "hello please share"
        };
        await Share.share(options);
      } else {
        Alert.alert("Error", "Reference to ViewShot is null");
      }
    } catch (error) {
      console.error("Error capturing screenshot: ", error);
      Alert.alert("Error", "Failed to capture and share screenshot");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
      <ViewShot ref={ref} options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9 }}>
        <TextInput
          style={{ width: 280, borderColor: 'white', borderWidth: 1, marginBottom: 10, paddingVertical: 2, paddingHorizontal: 2, color: 'white' }}
          onChangeText={(text) => setQrvalues(text)}
          value={qrvalues}
        />
        <QRCode
          value={qrvalues ? qrvalues : "https://www.google.com/"}
          size={280}
          color="black"
          backgroundColor="white"
        />
      </ViewShot>
      <TouchableOpacity onPress={captureAndShareScreenshot} style={{ marginTop: 40 }}>
        <Text style={{ color: 'white' }}>Share QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Qrcode;
