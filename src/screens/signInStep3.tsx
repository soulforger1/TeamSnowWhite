import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackIcon, LocationIcon} from '../assets';
import {Button, Separator} from '../components';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const background1 = require('../assets/images/sign-in-1.png');
const {width, height} = Dimensions.get('window');

const Selecter = ({label, choises, state, setState}: any) => {
  const [focus, setFocus] = useState(false);
  const index = useRef(new Animated.Value(0)).current;
  const rotate = index.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', '90deg'],
  });

  useEffect(() => {
    if (focus)
      Animated.timing(index, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    else
      Animated.timing(index, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
  }, [focus]);

  return (
    <View style={styles.dropDownContainer}>
      <Text style={styles.dropDownLabel}>{label}</Text>
      <View>
        <TouchableOpacity onPress={() => setFocus(!focus)}>
          <View style={{width: width * 0.85, height: 40, flexDirection: 'row'}}>
            <Text
              style={[
                {
                  fontSize: 18,
                  lineHeight: 29,
                  width: width * 0.8,
                  fontWeight: '500',
                },
                state === 'Your areas' ? {opacity: 0.5} : {},
                state === 'Your zones' ? {opacity: 0.5} : {},
              ]}>
              {state}
            </Text>
            <Animated.View
              style={{transform: [{rotate}], width: 19, height: 19}}>
              <BackIcon />
            </Animated.View>
          </View>
        </TouchableOpacity>
        <Separator />
        <FlatList
          data={choises}
          style={focus ? {display: 'flex'} : {display: 'none'}}
          renderItem={({index, item}) => (
            <TouchableOpacity
              onPress={() => {
                setState(item);
                setFocus(false);
              }}>
              <View
                style={{height: 40, justifyContent: 'center', marginLeft: 10}}>
                <Text style={[{fontSize: 18, lineHeight: 29}]}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export const SignInStep3: React.FC<any> = (props) => {
  const uid = auth().currentUser?.uid;
  const phoneNumber = auth().currentUser?.phoneNumber;
  const [area, setArea] = useState('Your areas');
  const [zone, setZone] = useState('Your zones');
  const navigation = useNavigation();

  const submit = async () => {
    if (zone !== 'Your zones')
      if (area !== 'Your areas') {
        await firestore().collection('users').doc(uid).set({
          zone,
          area,
          phoneNumber,
        });
        navigation.navigate('main');
      }
  };

  return (
    <ScrollView style={styles.main}>
      <Image source={background1} blurRadius={40} style={styles.background1} />
      <SafeAreaView style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.header}>
            <BackIcon />
          </View>
        </TouchableOpacity>
        <LocationIcon />
        <Text style={styles.titleBig}>Select Your Location</Text>
        <Text style={styles.titleSmall}>
          Swithch on your location to stay in tune with what’s happening in your
          area
        </Text>
        <Selecter
          label="Your Zone"
          state={zone}
          setState={setZone}
          choises={['Frigid', 'Temperate', 'Torrid', 'Banasree']}
        />
        <Selecter
          label="Your Area"
          state={area}
          setState={setArea}
          choises={[
            'Russia',
            'Chine',
            'India',
            'kazakhstan',
            'Iran',
            'Mongolia',
            'Indonesia',
          ]}
        />
        <View style={{marginTop: 20}}>
          <Button
            text="Submit"
            height={67}
            width={364}
            borderRadius={19}
            handler={() => submit()}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: height * 0.5,
    backgroundColor: 'rgba(254, 254, 254, 0.55)',
  },
  background1: {
    width: width,
    height: 400,
    opacity: 0.2,
    position: 'absolute',
    top: 0,
  },
  header: {
    width: width * 0.85,
    height: 60,
    justifyContent: 'center',
    marginBottom: 50,
  },
  titleBig: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 26,
    fontWeight: '600',
  },
  titleSmall: {
    width: 324,
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
    opacity: 0.5,
    marginBottom: 60,
  },
  dropDownContainer: {
    width: width * 0.87,
    marginTop: 20,
    marginBottom: 20,
  },
  dropDownLabel: {
    fontSize: 17,
    lineHeight: 29,
    fontWeight: '600',
    opacity: 0.7,
    marginBottom: 10,
  },
});
