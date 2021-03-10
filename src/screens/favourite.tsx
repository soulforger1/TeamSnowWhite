import React, { useContext } from 'react';
import {StyleSheet, View, SafeAreaView, Text, Dimensions, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useFireStoreCol} from '../hooks';
import { Separator, FavouriteCard } from '../components';
import { cartContext } from '../provider';
const {width} = Dimensions.get('window');

export const Favourite = () => {
  const {cart} = useContext<any>(cartContext);
  const user: any = auth().currentUser;
  const userFavourite = useFireStoreCol(`users/${user.uid}/favourite`).collection;
  return ( 
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      <Separator width={width}/>
      <FlatList
        data={Object.values(userFavourite)}
        keyExtractor={(item: any) => item.productId}
        renderItem={({item, index}: any) => <FavouriteCard id={item.productId} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: width,
    marginTop: 10,
    height: 50,
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center',
  },
});
