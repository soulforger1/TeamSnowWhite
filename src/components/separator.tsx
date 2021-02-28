import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  width?: number;
}

export const Separator: React.FC<Props> = ({width = 364}) => {
  const styles = StyleSheet.create({
    main: {
      width: width,
      height: 0,
      borderWidth: 0.5,
      borderColor: '#E2E2E2',
    },
  });

  return <View style={styles.main}></View>;
};
