import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {BackIcon} from '../assets';
import {Separator} from '../components';
const {width} = Dimensions.get('window');
const background1 = require('../assets/images/sign-in-1.png');

export const SignInStep2: React.FC<any> = (props) => {
  const {confirm} = props.route.params;
  const [code, setCode] = useState<string>('');
  const navigation = useNavigation();
  const animationValue = useRef(new Animated.Value(0)).current;
  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -280],
  });

  const tranlateButton = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      navigation.navigate('step-3', {confirm: confirm});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.main}>
      <Image source={background1} blurRadius={40} style={styles.background1} />
      <Animated.View
        style={[styles.inputContainer, {transform: [{translateY: -350}]}]}>
        <View
          style={[
            {
              height: 120,
              width: width,
              justifyContent: 'center',
              paddingLeft: 30,
            },
          ]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.inputLabel}>Enter your 4-digit code</Text>
        <View
          style={{
            width: width * 0.89,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
            marginBottom: 20,
          }}>
          <TextInput
            style={styles.input}
            value={code}
            placeholder="- - - - - - -"
            placeholderTextColor="black"
            onChangeText={(text) => setCode(text)}
            keyboardType="phone-pad"
            keyboardAppearance="light"
            onFocus={tranlateButton}
          />
        </View>
        <Separator />
      </Animated.View>
      <Animated.View
        style={[
          styles.nextButton,
          {transform: [{translateY}, {rotate: '180deg'}]},
        ]}>
        <TouchableOpacity onPress={() => confirmCode()}>
          <View
            style={{
              height: 67,
              width: 67,
              backgroundColor: '#53B175',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <BackIcon color="white" />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(254, 254, 254, 0.55)',
  },
  background1: {
    width: width,
    height: 400,
    opacity: 0.2,
    position: 'absolute',
    top: 0,
  },
  inputContainer: {
    height: 100,
    width: width,
    alignItems: 'center',
  },
  inputLabel: {
    width: width * 0.85,
    fontSize: 29,
    lineHeight: 30,
    fontWeight: '400',
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
    width: width * 0.5 - 45,
    height: 25,
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    zIndex: 1,
  },
});
