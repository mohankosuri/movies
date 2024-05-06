
import React, { useState ,useEffect} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, ImageBackground,Alert,ToastAndroid,ScrollView } from 'react-native';
 
import { useNavigation } from '@react-navigation/native';
import { MyTabs } from '../component/MyTabs';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
 







const Loginscreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const sampleUsers = [
        { email: 'user1@gmail.com', password: '1234' },
        { email: 'user2@gmail.com', password: '1234' },
      ];
 


    
    const handleLogin = async() => {
         
        
        const matchingUser = sampleUsers.find((user) => user.email === email && user.password === password);

        if (matchingUser) {
          // User successfully logged in
          console.log('User logged in:', matchingUser.email);
          ToastAndroid.show('Login successfully!', ToastAndroid.SHORT);
          try{
            await AsyncStorage.setItem('userToken', 'authenticated');
          }catch(error){
                console.log('Error in storing the user',error)
          }

          navigation.push('Mytabs');
          setEmail('');
          setPassword('');
        } else {
          // Invalid credentials
          console.error('Invalid credentials');
          Alert.alert('Error', 'Invalid email or password.');
        }
      

    };

    

    return (
        <View>


        <ImageBackground source={require("../assets/back.jpg")} className="h-full w-full" resizeMode='cover'>

        <View style={{flex:0.6,justifyContent:'center',alignItems:"center"}}>
        <LottieView
          autoPlay={true}
          style={{ width: '100%', height: '100%' }}
          loop={true}
         
          source={require('../assets/Login1.json')}
      />
        </View>
             
            <View className='mt-1'>
            <View className="ml-24"><Text className="font-bold text-black"><Text className="text-red-600 text-4xl">S</Text><Text className="text-3xl">treamCine</Text></Text></View>

            </View>

            <View className='w-full flex justify-around '>
                <View className='flex items-center mt-4'>
                    <Text className='font-bold tracking-wider text-3xl'>Login</Text>
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
                    <Text className='font-bold tracking-wider text-xl ml-6'>Password</Text>
                    <TextInput
                        className='px-4 py-3 bg-white border border-gray-300 mt-2 rounded-lg mb-4 ml-6 w-[330]'
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>


                <View>
                    <View className='mx-[100] mt-8 mb-4'>
                        <Button
                         title='Login'
                         onPress={handleLogin}
                         >
                        </Button>

                    </View>




                </View>
                <View className='flex-row justify-center'>
                    <Text className='text-base'>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.push('Signup')}>
                        <Text className="text-blue-600 text-base ml-4">Sign Up</Text>
                    </TouchableOpacity>
                

                </View>





            </View>
           




            
            
           
            
            </ImageBackground>

        </View>
    );
}



export default Loginscreen;
