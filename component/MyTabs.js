import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import SettingsScreen from '../screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SeriesScreen from '../screens/SeriesScreen';
import Profile from '../screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';
import React from 'react';
import Qrcode from './Qrcode';
 
 


const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    
      <Tab.Navigator   
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Movies') {
            iconName = focused ? 'movie-open' : 'movie-open-check';
          }else if (route.name === 'Series') {
            iconName = focused ? 'movie-roll' : 'movie-roll';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-circle-outline';
          }else if (route.name === 'Qrcode') {
            iconName = focused ? 'account' : 'account-circle-outline';
          }
           

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
        tabBarHideOnKeyboard: true,
         
       
         
        
      })}>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Movies" component={SettingsScreen} />
        <Tab.Screen name="Series" component={SeriesScreen} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Qrcode" component={Qrcode} />
        
      </Tab.Navigator>
     
  );
}