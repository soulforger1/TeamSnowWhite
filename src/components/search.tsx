import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CloseIcon, SearchIcon} from '../assets';
const {width} = Dimensions.get('window');

interface Props {
  defaultText: string;
}

export const Search: React.FC<Props> = ({defaultText}) => {
  const [text, setText] = useState<string>(defaultText);
  const navigation = useNavigation();

  const onKeyPress = () => {
    navigation.navigate('Explore', {search: text});
  };

  return (
    <View style={styles.container}>
      <SearchIcon />
      <TextInput
        value={text}
        style={styles.input}
        placeholder="Search Store"
        placeholderTextColor="#7C7C7C"
        onChangeText={(text) => setText(text)}
        onSubmitEditing={onKeyPress}
      />
      <TouchableOpacity onPress={() => setText('')}>
        <View
          style={[
            styles.closeButton,
            text !== '' ? {display: 'flex'} : {display: 'none'},
          ]}>
          <CloseIcon color="white" width={11} height={11} />
        </View>
      </TouchableOpacity>
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
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 20,
    width: 20,
    backgroundColor: '#C5C5C5',
  },
});
