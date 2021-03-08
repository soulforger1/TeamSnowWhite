import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackIcon, SettingsIcon} from '../assets';
import {ProductsRender, ShopCard} from '../components';
import {useCollectionSearch} from '../hooks';
const {width} = Dimensions.get('window');

export const Category: React.FC<any> = (props) => {
  const {category} = props.route.params;
  const navigation = useNavigation();
  const collection = useCollectionSearch('products', 'tags', category)
    .collection;

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={13} height={22} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{category}</Text>
        <SettingsIcon width={24} height={24} />
      </View>
      <ProductsRender data={collection} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: width * 0.85,
    marginBottom: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '500',
  },
});
