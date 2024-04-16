import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MatchScreen from './views/match'
import PoolScreen from './views/pool'
import TournamentScreen from './views/tournament'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              switch (route.name) {
                case 'Match':
                  return <MaterialCommunityIcons name='sword-cross' solid={true} size={24} color={focused ? 'black' : 'gray'} />
                case 'Pool':
                  return <MaterialCommunityIcons name='pound-box-outline' solid={true} size={24} color={focused ? 'black' : 'gray'} />
                case 'Tournament':
                  return <MaterialCommunityIcons name='tournament' solid={true} size={24} color={focused ? 'black' : 'gray'} />
              }
            },
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle:
              {
                height: 55,
                paddingBottom: 7
              }
          }
        )}
      >
        <Tab.Screen name='Match' component={MatchScreen} />
        <Tab.Screen name='Pool' component={PoolScreen} />
        <Tab.Screen name='Tournament' component={TournamentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
