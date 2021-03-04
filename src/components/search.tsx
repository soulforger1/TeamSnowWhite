import React, {useState} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import {SearchIcon} from '../assets';
const {width} = Dimensions.get('window');

export const Search = () => {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <SearchIcon />
      <TextInput
        style={styles.input}
        placeholder="Search Store"
        placeholderTextColor="#7C7C7C"
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#F2F3F2',
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#7C7C7C',
    width: width * 0.65,
    height: 30,
  },
});
