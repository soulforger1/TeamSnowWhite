import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ShopCard} from '../components';
import {useFireStoreCol} from '../hooks';

export const Shop = () => {
  const productsData = useFireStoreCol('products').collection;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productsData}
        renderItem={({index, item}) => (
          <ShopCard
            image={item.images[0]}
            name={item.name}
            price={item.price}
            id={item.id}
            perItemWeight={item.perItemWeight}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
