import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInStarts, SignInStep1, SignInStep2, SignInStep3} from '../screens';
import {View} from 'react-native';

const Stack = createStackNavigator();

export const SignInNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="step-starts" component={SignInStarts} />
        <Stack.Screen name="step-1" component={SignInStep1} />
        <Stack.Screen name="step-2" component={SignInStep2} />
        <Stack.Screen name="step-3" component={SignInStep3} />
      </Stack.Navigator>
    </View>
  );
};
