import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens';
import QrCodeScanner from './screens/QrCodeScanner';
import Payment from './screens/Payment';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Main'
          component={Main}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='QrCodeScanner'
          component={QrCodeScanner}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Payment'
          component={Payment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
