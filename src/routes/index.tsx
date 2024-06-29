import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../pages/Home'
import Details from '../pages/Details'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
