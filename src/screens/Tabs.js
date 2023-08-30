import { View, Text } from 'react-native'
import React from 'react'
const Tab = createBottomTabNavigator()
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = () => {
  return (
      <Tab.Navigator >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
  )
}

export default Tabs