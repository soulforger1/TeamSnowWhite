import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Account, Cart, Explore, Favourite, Shop} from '../screens';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="shop" component={Shop} />
      <Tab.Screen name="explore" component={Explore} />
      <Tab.Screen name="cart" component={Cart} />
      <Tab.Screen name="favourite" component={Favourite} />
      <Tab.Screen name="account" component={Account} />
    </Tab.Navigator>
  );
};
