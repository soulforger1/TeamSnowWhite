import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {BottomNavigation} from './bottomNavigation';

const Stack = createSharedElementStackNavigator();

export const MainNavigaiton = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="main" component={BottomNavigation} />
    </Stack.Navigator>
  );
};
