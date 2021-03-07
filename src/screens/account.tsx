import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CarrotIcon} from '../assets';
import auth from '@react-native-firebase/auth';
import {useFireStoreDoc} from '../hooks';
import {Separator} from '../components';
import {useNavigation} from '@react-navigation/native';

export const Account = () => {
  const user: any = auth().currentUser;
  const navigation = useNavigation();
  const userData = useFireStoreDoc(`users/${user.uid}`).doc;

  const signOut = () => {
    auth().signOut();
    navigation.navigate('splash');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CarrotIcon color="#53B175" />
      <Text style={styles.info}>Phone: {user.phoneNumber.split('+976')}</Text>
      <Separator />
      <Text style={styles.info}>Area: {userData && userData.area}</Text>
      <Separator />
      <Text style={styles.info}>Zone: {userData && userData.zone}</Text>
      <TouchableOpacity onPress={() => signOut()}>
        <View style={styles.button}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  info: {
    marginVertical: 15,
    fontSize: 19,
    lineHeight: 30,
    fontWeight: '400',
  },
  button: {
    opacity: 0.7,
    height: 50,
    width: 100,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
