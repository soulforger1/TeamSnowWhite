import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useCollectionSearch, useFireStoreCol, useFireStoreDoc} from '../hooks';
import {cartContext} from '../provider';
import { BackIcon, RightArrow } from '../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('window');


interface Props {
    id: string;
}  

export const FavouriteCard: React.FC<Props> = ({id}) => {
    const user: any = auth().currentUser;
    const data = useFireStoreDoc(`products/${id}`).doc;
    const navigation = useNavigation();
    console.log(id)
    const [product, setProduct] = useState<any>({
        poster:
          'https://image.freepik.com/free-vector/salmon-sushi-with-chopstick-plate-cartoon-icon-illustration-japanese-food-icon-concept-isolated-flat-cartoon-style_138676-1727.jpg',
        name: '',
        price: '',
        perItemWeight: '',
    });

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
        <TouchableOpacity onPress={() => navigation.navigate('product-detail' , {id})}>
            <View style={styles.container}>
                <Image source={{uri: product.poster}} style={styles.poster} />
                <View style={styles.view2}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.perItemWeight}>{product.perItemWeight}</Text>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.price}>${product.price}</Text>
                    <RightArrow color='black'/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.85,
        height: 140,
        alignItems: 'center',
        flexDirection: 'row',
    },
    view2: {
        width: width-257,
        justifyContent: 'flex-start'
    },
    name: {
        fontSize: 16,
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
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    poster: {
        width: 70,
        height: 64,
        resizeMode: 'contain',
        marginRight: 35,
    },
})