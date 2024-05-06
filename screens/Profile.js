import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform ,TouchableOpacity,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
 

const Profile=({navigation})=> {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ flex: 0.5 ,alignItems:"center", justifyContent:"center"}} className="bg-red-300">
         
      <TouchableOpacity onPress={pickImage} className="bg-pink-100 rounded-full w-[200] h-[200]">
      {image && <Image source={{ uri: image }} className="h-[200] w-[200] rounded-full"/>}
     </TouchableOpacity>
      
      
      </View>
    

     <View className="mt-6 p-6">
        <Text className="text-lg">Name: Mohan</Text>
        <Text className="text-lg mt-4">Email: kosurimohankrishna@gmail.com</Text>
        <Text className="text-lg mt-4">Mobile: 8688852788</Text>
     </View>

     <View className="mt-10 flex-wrap">
       <TouchableOpacity className="flex-row ml-4" onPress={()=>navigation.navigate("Login")}>
          <SimpleLineIcons name="logout" size={25}/><Text className="text-lg ml-3">Logout</Text>
       </TouchableOpacity>
     </View>

      
    </View>
  );
}

export default Profile