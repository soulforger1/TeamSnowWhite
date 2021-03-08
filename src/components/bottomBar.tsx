import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  AccountIcon,
  CartIcon,
  ExploreIcon,
  FavouriteIcon,
  ShopIcon,
} from '../assets';
const {width} = Dimensions.get('window');

const ICON_SELECT: any = {
  Shop: ShopIcon,
  Explore: ExploreIcon,
  Cart: CartIcon,
  Favourite: FavouriteIcon,
  Account: AccountIcon,
};

export const BottomBar: React.FC<any> = ({state, descriptors, navigation}) => {
  return (
    <View style={[styles.main, {flexDirection: 'row'}]}>
      {state.routes.map((route: any, index: any) => {
        const Icon = ICON_SELECT[route.name];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (route.name === 'Explore')
              navigation.navigate(route.name, {search: ''});
            else navigation.navigate(route.name);
          }
        };

        return (
          <View style={styles.container} key={route.name}>
            <TouchableOpacity onPress={onPress} style={{alignItems: 'center'}}>
              <Icon color={isFocused ? '#53B175' : '#181716'} />
              <Text
                style={[
                  isFocused ? {color: '#53B175'} : {color: '#181716'},
                  {
                    marginTop: 5,
                    marginBottom: 10,
                    fontSize: 15,
                    fontWeight: '500',
                  },
                ]}>
                {route.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: width,
    height: 80,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  container: {
    width: width / 5,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
