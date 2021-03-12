import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CarrotIcon, TitleIcon} from '../assets';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export const SplashScreen = () => {
  const user = auth().currentUser;
  const navigation = useNavigation();

  useEffect(() => {
    if (user === null || user === undefined)
      setTimeout(() => {
        navigation.navigate('sign-in');
      }, 1000);
    else
      setTimeout(() => {
        navigation.navigate('main');
      }, 1000);
  }, [user]);

  return (
    <View style={style.main}>
      <View style={{flexDirection: 'row'}}>
        <CarrotIcon width={55} height={63} />
        <View style={{marginLeft: 10}}>
          <TitleIcon />
          <Text style={style.smallTitle}>online groceriet</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53B175',
  },
  bigTitle: {
    fontSize: 50,
    fontWeight: '500',
    lineHeight: 45,
    color: 'white',
    backgroundColor: 'blue',
  },
  smallTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
    letterSpacing: 5,
  },
});
