import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Button, Input } from '../components';

export const Cart = () => {
  return(
    <View style={styles.container}>
      <View style={styles.input}>
        <Input width={364} height={30} borderBottomWidth={1} placeholder="end bn"/>
      </View>
      <Button width={364} height={67} borderRadius={19} text='Go To Checkout'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
  }
});
