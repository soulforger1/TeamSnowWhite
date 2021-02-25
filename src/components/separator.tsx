import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Separator = () => {
  return <View style={styles.main}></View>;
};

const styles = StyleSheet.create({
  main: {
    width: 364,
    height: 0,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
});
