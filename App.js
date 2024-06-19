  

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './screens/Loginscreen';
import Signupscreen from './screens/Signupscreen';
import Homescreen, { MovieDetailsScreen } from './screens/Homescreen';
import Onboardingscreen from './screens/Onboardingscreen';
import SplashScreen from './screens/SplashScreen';
import { MyTabs } from './component/MyTabs';
import { MoviesContext } from './context/moviescontext';
import Data1 from "./assets/MOCK_DATA (2).json"
import { Top100MovieDetailsScreen } from './screens/SettingsScreen';
import Profile from './screens/Profile';
import { StockDetailView } from './screens/SeriesScreen';
 

 
 
 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <MoviesContext.Provider value={Data1}>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Loginscreen} options={{headerShown:false}}/>
        <Stack.Screen name="Mytabs" component={MyTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signupscreen} options={{headerShown:false}} />
        <Stack.Screen name="Homescreen" component={Homescreen} options={{headerShown:false}} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Top100MovieDetails" component={Top100MovieDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onbordingscreens" component={Onboardingscreen} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="StockDetailView" component={StockDetailView} options={{headerShown:false}} />
     
        
      </Stack.Navigator>
      </MoviesContext.Provider>
    </NavigationContainer>
  );
}

export default App;