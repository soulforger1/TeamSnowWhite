import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackIcon, HearthIcon, ShareIcon} from '../assets';
import {Button, DetailCard, PerNumber, Separator} from '../components';
import {useFireStoreDoc} from '../hooks';
import {cartContext} from '../provider/';
const {width, height} = Dimensions.get('window');
const greyBackground = require('../assets/images/greyBackground.png');

export const ProductDetail: React.FC<any> = (props) => {
  const {id} = props.route.params;
  const {cart, setCart} = useContext<any>(cartContext);
  const [number, setNumber] = useState(1);
  const navigation = useNavigation();
  const [product, setProduct] = useState<any>({
    name: '',
    detail: '',
    images: [
      'https://image.freepik.com/free-vector/salmon-sushi-with-chopstick-plate-cartoon-icon-illustration-japanese-food-icon-concept-isolated-flat-cartoon-style_138676-1727.jpg',
    ],
    nutritions: {calories: ''},
    perItemWeight: '',
    rate: '',
    price: '',
  });
  const res = useFireStoreDoc(`products/${id}`).doc;

  const plusFunction = () => {
    setNumber((number) => number + 1);
  };
  const minusFunction = () => {
    if (number !== 1) setNumber((number) => number - 1);
  };

  const addToBasket = () => {
    const data = {id, number: number, price: product.price};
    setCart({...cart, [id]: data});
  };

  useEffect(() => {
    if (res !== null) setProduct(res);
  }, [res]);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <ScrollView contentContainerStyle={styles.main}>
        <ImageBackground
          style={styles.headerContainer}
          source={greyBackground}
          resizeMode="contain">
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
            <ShareIcon />
          </View>
          <Image source={{uri: product.images[0]}} style={styles.poster} />
        </ImageBackground>
        <View style={styles.nameContainer}>
          <View>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.perItemWeight}>{product.perItemWeight}</Text>
          </View>
          <TouchableOpacity>
            <HearthIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.priceContainer}>
          <PerNumber
            plusFunction={() => plusFunction()}
            minusFunction={() => minusFunction()}
            number={number}
          />
          <Text style={styles.price}>${Number(product.price) * number}</Text>
        </View>
        <Separator />
        <DetailCard title="Product Detail" text={product.detail} type="text" />
        <DetailCard title="Nutritions" text={product.nutritions} type="array" />
        <DetailCard title="Review" text={product.rate} type="star" />
      </ScrollView>
      <View style={{position: 'absolute', bottom: 40}}>
        <Button
          text="Add To Basket"
          width={364}
          height={67}
          borderRadius={19}
          handler={() => addToBasket()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: '#F2F3F2',
    width: width,
    height: height * 0.38,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    flexDirection: 'row',
    width: width * 0.85,
    justifyContent: 'space-between',
    marginTop: 50,
  },
  poster: {
    marginTop: 40,
    width: 230,
    height: 150,
    resizeMode: 'contain',
  },
  nameContainer: {
    marginTop: 20,
    width: width * 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 3,
  },
  priceContainer: {
    height: 100,
    flexDirection: 'row',
    width: width * 0.85,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  perItemWeight: {
    fontSize: 16,
    fontWeight: '600',
    opacity: 0.7,
  },
  price: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '500',
  },
});
