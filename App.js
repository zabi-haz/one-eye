import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//naviation system 
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
//importing screens
import HomeScreen from "./screens/HomeScreen"
import Goals from "./screens/goals"
import WorkoutScreen from "./screens/workout"
import SettingScreen from "./screens/setting.jsx"
//bottom tab navigatior 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//icons 
import {} from "";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={({route}) =>({
          tabBarIcon:({focused,color,size}) =>{
            let iconsname;
            let routeName = route.name;
            if(routeName === "Home"){
              iconsname = focused ? "home" : "home-outline"
            }else if(routeName === "Wrokout"){
              iconsname = focused ? "barbell" : "barbell-outline"
            }
          }
        })}
      >
        <Stack.Screen  name="Home"  component={HomeScreen}
        />
        <Stack.Screen name="Wrokout"  component={WorkoutScreen}/>
        <Stack.Screen name="Goals"  component={Goals}/>
        <Stack.Screen name="setting"  component={SettingScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
