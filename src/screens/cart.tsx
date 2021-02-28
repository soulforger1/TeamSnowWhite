import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Separator} from '../components';
import {CartCard} from '../components/cartCard';
import {cartContext} from '../provider';
const {width} = Dimensions.get('window');

export const Cart = () => {
  const {cart, payment, setPayment} = useContext<any>(cartContext);
  const navigation = useNavigation();

  useEffect(() => {
    var sum = 0;
    Object.values(cart).map((cur: any) => {
      sum += Number(cur.price) * cur.number;
    });
    setPayment(sum);
  }, [cart]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <Separator width={width} />
      <FlatList
        data={Object.values(cart)}
        keyExtractor={(item: any) => item.id}
        renderItem={({item, index}: any) => <CartCard id={item.id} />}
        ItemSeparatorComponent={() => <Separator />}
      />
      <TouchableOpacity
        style={{width: 364, height: 70}}
        onPress={() => navigation.navigate('checkout-modal', {cost: payment})}>
        <View style={styles.button}>
          <Text style={{fontSize: 19, fontWeight: '500', color: 'white'}}>
            Go to Checkout
          </Text>
          <View style={styles.payment}>
            <Text style={{fontSize: 16, color: 'white'}}>${payment}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  button: {
    position: 'absolute',
    bottom: 20,
    width: 364,
    height: 70,
    borderRadius: 19,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  payment: {
    height: 22,
    paddingHorizontal: 2,
    backgroundColor: '#489E67',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
  },
});
