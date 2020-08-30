import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import useColorScheme from '../hooks/useColorScheme';
import { Auth } from '../screens/Auth';


const Stack = createStackNavigator();

export default function AuthNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}