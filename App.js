
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Auth from './src/screens/Auth.js'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown:false}} name="Login" component={Auth}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}

