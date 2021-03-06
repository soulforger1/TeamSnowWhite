import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CloseIcon} from '../assets';
import {useFireStoreDoc} from '../hooks';
import {cartContext} from '../provider';
import {PerNumber} from './perNumber';
const {width} = Dimensions.get('window');

interface Props {
  id: string;
}

export const CartCard: React.FC<Props> = ({id}) => {
  const {cart, setCart} = useContext<any>(cartContext);
  const data = useFireStoreDoc(`products/${id}`).doc;
  const [product, setProduct] = useState<any>({
    poster:
      'https://image.freepik.com/free-vector/salmon-sushi-with-chopstick-plate-cartoon-icon-illustration-japanese-food-icon-concept-isolated-flat-cartoon-style_138676-1727.jpg',
    name: '',
    price: '',
    perItemWeight: '',
  });

  const minusFunction = () => {
    if (cart[id].number !== 1) {
      const data = {id, number: cart[id].number - 1, price: cart[id].price};
      setCart((cart: any) => ({...cart, [id]: data}));
    }
  };
  const plusFunction = () => {
    const data = {id, number: cart[id].number + 1, price: cart[id].price};
    setCart((cart: any) => ({...cart, [id]: data}));
  };

  const deleteCard = () => {
    const local = Object.keys(cart).filter((cur) => cur !== id);
    var localData: any = {};
    local.map((cur) => {
      localData[cur] = cart[cur];
    });
    setCart(localData);
  };

  useEffect(() => {
    if (data !== null && data !== undefined)
      setProduct({
        poster: data.images[0],
        name: data.name,
        price: data.price,
        perItemWeight: data.perItemWeight,
      });
  }, [data]);

  return (
    <View style={styles.container}>
      <Image source={{uri: product.poster}} style={styles.poster} />
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.perItemWeight}>{product.perItemWeight}</Text>
        <PerNumber
          plusFunction={() => plusFunction()}
          minusFunction={() => minusFunction()}
          number={cart[id].number}
        />
      </View>
      <View style={styles.view3}>
        <TouchableOpacity onPress={() => deleteCard()}>
          <CloseIcon />
        </TouchableOpacity>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  poster: {
    width: 70,
    height: 64,
    resizeMode: 'contain',
    marginRight: 35,
  },
  name: {
    fontSize: 17,
    lineHeight: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
  perItemWeight: {
    fontSize: 14,
    lineHeight: 18,
    opacity: 0.8,
  },
  price: {
    fontSize: 21,
    lineHeight: 27,
    fontWeight: '600',
  },
  view3: {
    width: 110,
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});
