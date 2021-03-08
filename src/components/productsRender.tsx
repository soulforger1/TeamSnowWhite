import React from 'react';
import {FlatList, View} from 'react-native';
import {ShopCard} from './shopCard';

interface Props {
  data: any;
}

export const ProductsRender: React.FC<Props> = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={{margin: 7.5}}>
          <ShopCard
            image={item.images[0]}
            name={item.name}
            price={item.price}
            id={item.id}
            perItemWeight={item.perItemWeight}
          />
        </View>
      )}
      numColumns={2}
      keyExtractor={(item: any) => item.id}
    />
  );
};
