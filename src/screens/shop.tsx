import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ColoredCarrotIcon, LocationIcon} from '../assets';
import {Search, ShopCard, Slider} from '../components';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useCollectionSearch, useFireStoreDoc} from '../hooks';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const vegetableSale = require('../assets/images/vegetableSalePoster.png');
const {width} = Dimensions.get('window');

const SlideShow = ({tag}: any) => {
  const exclusive = useCollectionSearch('products', 'tags', tag).collection;
  const navigation = useNavigation();

  return (
    <View style={{alignItems: 'center', height: 340}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: width * 0.85,
          marginBottom: 20,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 24, fontWeight: '600'}}>{tag}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('category', {category: tag})}>
          <Text style={{fontSize: 16, fontWeight: '600', color: '#53B175'}}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={exclusive}
        contentContainerStyle={{paddingLeft: 25}}
        renderItem={({index, item}: any) => (
          <ShopCard
            image={item.images[0]}
            name={item.name}
            price={item.price}
            id={item.id}
            perItemWeight={item.perItemWeight}
          />
        )}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={() => <View style={{width: 15}} />}
        horizontal
      />
    </View>
  );
};

export const Shop = () => {
  const uid = auth().currentUser?.uid;
  const userLocation = useFireStoreDoc(`users/${uid}`).doc;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ColoredCarrotIcon height={45} width={39} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 20,
        }}>
        <LocationIcon height={25} width={20} />
        <Text style={styles.location}>
          {userLocation ? userLocation.area : ''},
          {userLocation ? userLocation.zone : ''}
        </Text>
      </View>
      <ScrollView contentContainerStyle={{width: width, alignItems: 'center'}}>
        <Search defaultText="" />
        <Slider
          data={[vegetableSale, vegetableSale, vegetableSale]}
          width={370}
          height={115}
        />
        <SlideShow tag="Exclusive Offer" />
        <SlideShow tag="Best Selling" />
        <SlideShow tag="drink" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  location: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4C4F4D',
  },
});
