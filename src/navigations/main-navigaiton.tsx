import React from 'react';
import {Dimensions} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {CartProvider} from '../provider';
import {CheckoutModal, ProductDetail} from '../screens';
import {BottomNavigation, SignInNavigation} from './';
const {height} = Dimensions.get('window');

const Stack = createSharedElementStackNavigator();

const modal = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({current: {progress}}: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [height, 0],
            }),
          },
        ],
      },
    };
  },
};

export const MainNavigaiton = () => {
  return (
    <CartProvider>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="main" component={BottomNavigation} />
        <Stack.Screen
          name="checkout-modal"
          component={CheckoutModal}
          options={modal}
        />
        <Stack.Screen name="sign-in" component={SignInNavigation} />
        <Stack.Screen name="product-detail" component={ProductDetail} />
      </Stack.Navigator>
    </CartProvider>
  );
};
