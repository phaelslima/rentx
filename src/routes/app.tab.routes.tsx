import React from 'react'
import { Platform } from 'react-native'
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeSvg from '../assets/home.svg'
import CarSvg from '../assets/car.svg'
import ProfileSvg from '../assets/profile.svg'

import { AppStackRoutes } from './app.stack.routes'
import { MyCars } from '../screens/MyCars'
import { Profile } from '../screens/Profile'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.background_primary
        }
      }}
    >
      <Screen
        name="AppStackRoutes"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => <HomeSvg width={24} height={24} fill={color} />
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => <CarSvg width={24} height={24} fill={color} />
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <ProfileSvg width={24} height={24} fill={color} />
        }}
      />
    </Navigator>
  )
}