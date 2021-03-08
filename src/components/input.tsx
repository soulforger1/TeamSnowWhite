import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface InputProps {
  width: number | string;
  height: number | string;
  borderBottomWidth?: number;
  backgroundColor?: string;
  placeholder?: string;
  borderRadius?: number;
}

export const Input: React.FC<InputProps> = ({
  width,
  height,
  borderBottomWidth,
  placeholder,
  backgroundColor,
  borderRadius,
}) => {
  const [value, onChangeText] = useState<string>();

  const styles = StyleSheet.create({
    input: {
      width: width,
      height: height,
      borderBottomWidth: borderBottomWidth,
      borderColor: '#E2E2E2',
      backgroundColor: backgroundColor,
      flexDirection: 'row',
      borderRadius: borderRadius,
    },
  });

  return (
    <View style={styles.input}>
      <TextInput
        style={{
          fontSize: 18,
          width: width,
          height: height,
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};
