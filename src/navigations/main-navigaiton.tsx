import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {BottomNavigation, SignInNavigation} from './';

const Stack = createSharedElementStackNavigator();

export const MainNavigaiton = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="sign-in" component={SignInNavigation} />
      <Stack.Screen name="main" component={BottomNavigation} />
    </Stack.Navigator>
  );
};
