
import * as React from 'react';
import { Colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Page from '../screens/intro/Page';

const Tab = createMaterialTopTabNavigator();


export default function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
        
        tabBarOptions={{
            indicatorStyle :{
              backgroundColor: Colors.app[colorScheme].text 
            },
            labelStyle: { fontSize: 12 },
            tabStyle: { width: 100 },
            style: { backgroundColor: Colors.app[colorScheme].topTabNavColor },
            showLabel: false,
            allowFontScaling: true,
        }}
    >
    <Tab.Screen name="Page0" component={Page} />
    <Tab.Screen name="Page1" component={Page} />
    <Tab.Screen name="Page2" component={Page} />
  </Tab.Navigator>
  );
}
