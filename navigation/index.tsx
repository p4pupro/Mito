import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import IntroNavigator from './IntroNavigatior';
import AuthNavigator from './AuthNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { useRecoilState } from 'recoil';
import { authInfo } from '../api/authInfo';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  const [logged, setLogged] = useRecoilState(authInfo);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     { 
      logged.username !== '' ? (
        <>
          <Stack.Screen name="Root"  component={BottomTabNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name="Intro" component={IntroNavigator} />
          <Stack.Screen name="Auth"  component={AuthNavigator} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </>
      )
    } 
      
    </Stack.Navigator>
  );
}
