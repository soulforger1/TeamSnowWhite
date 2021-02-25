import React, {useEffect, useRef, useState} from 'react';
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
const background1 = require('../assets/sign-in-1.png');
const background2 = require('../assets/sign-in-3.png');
const mongolia = require('../assets/mongoliaFlag.png');
const {width} = Dimensions.get('window');

export const SignInStep1 = () => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const [confirm, setConfirm] = useState(null);
  const [phone, setPhone] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const opacity = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.2],
  });
  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -360],
  });
  var inputRef = useRef<any>(null);

  useEffect(() => {
    if (isFocused) {
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      inputRef.current.blur();
    }
  }, [isFocused]);

  return (
    <View style={styles.main}>
      <Animated.Image
        source={background1}
        blurRadius={isFocused ? 30 : 0}
        style={[styles.background1, {opacity}]}
      />
      <Animated.View
        style={[styles.inputContainer, {transform: [{translateY}]}]}>
        <View
          style={[
            {
              height: 120,
              width: width,
              justifyContent: 'center',
              paddingLeft: 30,
            },
            isFocused ? {display: 'flex'} : {display: 'none'},
          ]}>
          <TouchableOpacity onPress={() => setIsFocused(false)}>
            <BackIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.inputLabel}>
          {isFocused
            ? 'Enter your mobile number'
            : 'Get your groceries with nectar'}
        </Text>
        <Text style={{width: width * 0.85, opacity: 0.5, marginTop: 20}}>
          {isFocused ? 'Mobile Number' : ''}
        </Text>
        <View
          style={{
            width: width * 0.85,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
            marginBottom: 20,
          }}>
          <Image source={mongolia} style={styles.flag} />
          <Text style={{color: '#030303', fontSize: 18, marginLeft: 10}}>
            +976
          </Text>
          <TextInput
            ref={inputRef}
            style={styles.input}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            onFocus={() => setIsFocused(true)}
            keyboardType="phone-pad"
          />
        </View>
        <Separator />
      </Animated.View>
      <View
        style={[
          styles.nextButton,
          isFocused ? {display: 'flex'} : {display: 'none'},
        ]}>
        <TouchableOpacity>
          <BackIcon color="white" />
        </TouchableOpacity>
      </View>
      <Image source={background2} blurRadius={90} style={styles.background2} />
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
    position: 'absolute',
    top: 0,
  },
  background2: {
    width: width,
    position: 'absolute',
    bottom: 10,
    height: 200,
    opacity: 0.45,
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
  flag: {
    height: 25,
    width: 45,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
    width: width * 0.5 - 45,
    height: 25,
  },
  nextButton: {
    height: 67,
    width: 67,
    backgroundColor: '#53B175',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '180deg'}],
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
});
