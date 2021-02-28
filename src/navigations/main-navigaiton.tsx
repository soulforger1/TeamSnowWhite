import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {CheckoutModal} from '../screens';
import {BottomNavigation, SignInNavigation} from './';

const Stack = createSharedElementStackNavigator();

export const MainNavigaiton = () => {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="main" component={BottomNavigation} />
      <Stack.Screen name="checkout-modal" component={CheckoutModal} />
      <Stack.Screen name="sign-in" component={SignInNavigation} />
    </Stack.Navigator>
  );
};
