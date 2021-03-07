import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CheckIcon} from '../assets';
import {Button} from '../components';
import {cartContext} from '../provider';
const {width} = Dimensions.get('window');
const background1 = require('../assets/images/sign-in-2.png');
const background2 = require('../assets/images/sign-in-3.png');

export const OrderAccepted = () => {
  const {setCart} = useContext<any>(cartContext);
  const navigation = useNavigation();

  useEffect(() => {
    setCart({});
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <Image source={background1} style={styles.background1} blurRadius={60} />
      <Image source={background2} style={styles.background2} blurRadius={60} />
      <View style={styles.icon}>
        <CheckIcon />
      </View>
      <Text style={styles.title1}>Your Order has been accepted</Text>
      <Text style={styles.title2}>Your items has been placed and is on</Text>
      <Text style={styles.title2}>it's way to being proccessed</Text>
      <View style={{height: 134}} />
      <Button
        text="Track Order"
        width={364}
        height={67}
        borderRadius={19}
        handler={() => console.log('handled')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('main')}>
        <Text style={{fontSize: 18, fontWeight: '500', marginTop: 20}}>
          Back to home
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  icon: {
    transform: [{translateX: -10}],
    marginBottom: 40,
  },
  title1: {
    fontSize: 30,
    width: width * 0.8,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 30,
  },
  title2: {
    fontSize: 18,
    fontWeight: '500',
    opacity: 0.6,
    lineHeight: 23,
  },
  background1: {
    width: width,
    height: 240,
    position: 'absolute',
    top: 0,
    opacity: 0.5,
    resizeMode: 'contain',
  },
  background2: {
    width: width,
    position: 'absolute',
    bottom: 10,
    height: 200,
    opacity: 0.45,
  },
});
