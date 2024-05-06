
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, ImageBackground, Alert, ScrollView,ToastAndroid } from 'react-native';
 
import { useNavigation } from '@react-navigation/native';
import { MyTabs } from '../component/MyTabs';
import LottieView from 'lottie-react-native';
 







const Signupscreen = () => {

  const [email, setEmail] = useState('');
  const [createpassword, setCreatePassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Console the values
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Create Password:", createpassword);
    console.log("Confirm Password:", confirmpassword);

    // Send data to API
    const apiUrl = 'http://192.168.0.104:5000/api/users/signup';
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        createpassword: createpassword,
        mobile: mobile,
        confirmpassword: confirmpassword
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      ToastAndroid.show('User Created successfully!', ToastAndroid.LONG);
          navigation.push('Login');
      // You can handle success response <here></here>
    })
    .catch((error) => {
      console.error('Error:', error);
      // You can handle errors here
    });


    setEmail("")
    setMobile("")
    setCreatePassword("")
    setConfirmPassword("")
  }
 

     

  return (
    <View>


      <ImageBackground source={require("../assets/back.jpg")} className="h-full w-full" resizeMode='cover'>

        


        <View className='mt-10 flex-row'>
          <View className="ml-24"><Text className="font-bold text-black"><Text className="text-red-600 text-4xl">S</Text><Text className="text-3xl">treamCine</Text></Text></View>
          

        </View>

        <ScrollView>
          <View className='w-full flex justify-around '>
            <View className='flex items-center mt-4'>
              <Text className='font-bold tracking-wider text-3xl'>Signup</Text>
            </View>
            <View className='flex mt-10 ml-4'>
              <Text className='font-bold tracking-wider text-xl ml-6'>Email</Text>
              <TextInput
                className='px-4 py-3 bg-white border border-gray-300 mt-2 rounded-lg mb-4 w-[330] ml-6'
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}

              />
            </View>
            <View className='flex ml-4'>
              <Text className='font-bold tracking-wider text-xl ml-6'>Mobile</Text>
              <TextInput
                className='px-4 py-3 bg-white border border-gray-300 mt-2 rounded-lg mb-4 ml-6 w-[330]'
                placeholder="mobile"
                
                value={mobile}
                onChangeText={(text) => setMobile(text)}
              />
            </View>

            <View className='flex ml-4'>
              <Text className='font-bold tracking-wider text-xl ml-6'>Create Password</Text>
              <TextInput
                className='px-4 py-3 bg-white border border-gray-300 mt-2 rounded-lg mb-4 ml-6 w-[330]'
                placeholder="Password"
                secureTextEntry
                value={createpassword}
                onChangeText={(text) => setCreatePassword(text)}
              />
            </View>
            <View className='flex ml-4'>
              <Text className='font-bold tracking-wider text-xl ml-6'>Confirm Password</Text>
              <TextInput
                className='px-4 py-3 bg-white border border-gray-300 mt-2 rounded-lg mb-4 ml-6 w-[330]'
                placeholder="Password"
                secureTextEntry
                value={confirmpassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>


            <View>
              <View className='mx-[100] mt-8 mb-4'>
                <Button
                  title='create'
                  onPress={handleSubmit}
                  color={"green"}
                  
                >
                </Button>

              </View>




            </View>
            <View className='flex-row justify-center'>
              <Text className='text-base'>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push('Login')}>
                <Text className="text-blue-600 text-base ml-4">Log in</Text>
              </TouchableOpacity>


            </View>





          </View>


        </ScrollView>
        <View style={{flex:10}}>
        <LottieView
          autoPlay={true}
          style={{ width: '100%', height: '100%' }}
          loop={true}
         
          source={require('../assets/Login.json')}
      />
        </View>



         



      </ImageBackground>

    </View>
  );
}



export default Signupscreen;
