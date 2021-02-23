import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ShopCard} from '../components';

export const Shop = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ShopCard
        image="https://images.carriercms.com/image/upload/w_500,h_400,c_fill,g_center,q_auto,f_auto/v1543516192/carrier/carrier-global/food/bananas.jpg"
        name="Organic Bananas"
        price="4.99"
        id=""
        perItemWeight="7pc, Priceg"
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
