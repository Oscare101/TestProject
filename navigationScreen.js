import React from 'react'
import {} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'

import HistoryScreen from './screens/historyScreen'
import InfoScreen from './screens/infoScreen'
import CameraScreen from './screens/cameraScreen'

const Tab = createBottomTabNavigator()

export default function NavigationScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#777',
        }}
      >
        <Tab.Screen
          name="История"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="history" size={24} color="#000" />
              ) : (
                <MaterialIcons name="history" size={24} color="#777" />
              ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Скан"
          component={CameraScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="circle" size={24} color="#000" />
              ) : (
                <Entypo name="circle" size={24} color="#777" />
              ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Инфо"
          component={InfoScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="information-circle-sharp"
                  size={24}
                  color="#000"
                />
              ) : (
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="#777"
                />
              ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
