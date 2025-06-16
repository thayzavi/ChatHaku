import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './Screens/HomeScreen';
import ChatScreen from './Screens/ChatScreen';

const Stack =  createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Bem-Vindo'}}/>
          <Stack.Screen name="Chat" component={ChatScreen} options={{title: 'Chat com Haku'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}