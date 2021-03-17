import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import {CarrotIcon} from '../assets';
import {Button} from '../components';
const background = require('../assets/images/poster.png');
const {height} = Dimensions.get('window');

export const SignInStarts = () => {
  const navigation = useNavigation();

  const nextFunction =  async() => {
    await analytics().logEvent('signInStarts', {
      id: 3745092,
      item: 'mens grey t-shirt',
      description: ['round neck', 'long sleeved'],
      size: 'L',
    })

    navigation.navigate('step-1')
  }

  return (
    <ImageBackground source={background} style={styles.main}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <CarrotIcon />
        <Text style={styles.titleBig}>Welcome to our store</Text>
        <Text style={styles.titleSmall}>
          Ger your groceries in as fast as one hour
        </Text>
        <Button
          text="Get Started"
          width={353}
          height={67}
          borderRadius={19}
          handler={() => nextFunction()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height: height * 0.45,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  titleBig: {
    width: 250,
    fontSize: 48,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  titleSmall: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    opacity: 0.8,
    marginTop: 10,
    marginBottom: 20,
  },
});
