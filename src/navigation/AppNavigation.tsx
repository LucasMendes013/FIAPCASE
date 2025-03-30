import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { Image } from 'react-native';

import Login from '../screens/Login';
import Aulas from '../screens/Aulas';
import Bulletin from '../screens/Bulletin';
import ArchiveIcon from '../assets/icons/Archive.png';
import CalendarIcon from '../assets/icons/Calendar.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="AULAS"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.button,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          backgroundColor: theme.colors.accordion,
          borderWidth: 1,
          borderColor: theme.colors.accordion,
          paddingTop: 10,
          height: 100,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          marginTop: 4,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
        },
      }}
    >
      <Tab.Screen
        name="AULAS"
        component={Aulas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={CalendarIcon}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BOLETIM"
        component={Bulletin}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={ArchiveIcon}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ animation: 'none' }}
        />
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ animation: 'none' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
