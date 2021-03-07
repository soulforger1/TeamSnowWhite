import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Search} from '../components';
import {useFireStoreCol} from '../hooks';

const Card = ({color, poster, name}: any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('category', {category: name})}>
      <View style={[styles.cardMain, {borderColor: color}]}>
        <View style={[styles.cardBackground, {backgroundColor: color}]} />
        <Image source={{uri: poster}} style={styles.cardPoster} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Explore = () => {
  const categories = useFireStoreCol('categories').collection;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Find Product</Text>
      <Search />
      <FlatList
        style={{paddingTop: 20}}
        data={categories}
        renderItem={({item, index}) => (
          <Card color={item.color} poster={item.poster} name={item.name} />
        )}
        keyExtractor={(item) => item.name}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    height: 50,
    fontSize: 25,
    fontWeight: '600',
  },
  cardMain: {
    margin: 7.5,
    height: 190,
    width: 175,
    borderWidth: 2,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBackground: {
    position: 'absolute',
    width: 175,
    height: 190,
    opacity: 0.2,
    borderRadius: 18,
  },
  cardPoster: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
  },
});
