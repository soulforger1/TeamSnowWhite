import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PlusIcon} from '../assets';
import {cartContext} from '../provider/';

interface Props {
  image: string;
  name: string;
  price: string;
  id: string;
  perItemWeight: string;
}

export const ShopCard: React.FC<Props> = ({
  image,
  name,
  price,
  id,
  perItemWeight,
}) => {
  const navigation = useNavigation();
  const {setCart} = useContext<any>(cartContext);
  const addCart = () => {
    const data = {id, number: 1, price: price};
    setCart((cart: any) => ({...cart, [id]: data}));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('product-detail', {id})}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.perItemWeight}>{perItemWeight}</Text>
      </TouchableOpacity>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price}</Text>
        <TouchableOpacity onPress={() => addCart()}>
          <View
            style={{
              height: 45,
              width: 45,
              backgroundColor: '#53B175',
              borderRadius: 17,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <PlusIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 250,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageContainer: {
    width: 170,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 30,
  },
  perItemWeight: {
    width: 140,
    fontSize: 16,
    lineHeight: 17,
    opacity: 0.6,
  },
  priceContainer: {
    height: 50,
    width: 140,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
  },
});
