import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import AddChat from "./screens/AddChat";
import Chat from "./screens/Chat";
const Stack = createNativeStackNavigator();
const globalScreenOptions = {

  headerStyle : {backgroundColor:  "#B09955"},
  headerTitleStyle : {color : 'white'},
  headerTintColor : 'white',

};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      //initialRouteName="Home"
      screenOptions={globalScreenOptions}
      >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/> 
        <Stack.Screen name="AddChat" component={AddChat}/> 
        <Stack.Screen name="Chat" component={Chat}/> 

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
