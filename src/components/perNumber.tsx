import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MinusIcon, PlusIcon} from '../assets';

interface Props {
  plusFunction: Function;
  minusFunction: Function;
  number: number;
}

export const PerNumber: React.FC<Props> = ({
  plusFunction,
  minusFunction,
  number,
}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 16}}>
      <TouchableOpacity onPress={() => minusFunction()}>
        <View style={styles.button}>
          <MinusIcon color={number === 1 ? '#B3B3B3' : '#53B175'} />
        </View>
      </TouchableOpacity>
      <View style={styles.number}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>{number}</Text>
      </View>
      <TouchableOpacity onPress={() => plusFunction()}>
        <View style={styles.button}>
          <PlusIcon color="#53B175" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  number: {
    height: 46,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 46,
    width: 46,
    borderRadius: 17,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E2E2E2',
  },
});
