import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
const {width} = Dimensions.get('window');

const ICON_SELECT: any = {
  browse: '',
  account: '',
  search: '',
};

export const BottomBar: React.FC<any> = ({state, descriptors, navigation}) => {
  return (
    <View style={[styles.main, {flexDirection: 'row'}]}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const Icon = ICON_SELECT[route.name];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable onPress={onPress} key={route.name}>
            <View
              style={[
                styles.container,
                isFocused ? {opacity: 1} : {opacity: 0.5},
              ]}>
              {/* <Icon color="white" /> */}
              <Text style={{color: 'white', marginTop: 5, marginBottom: 10}}>
                {route.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: width,
    height: 80,
    borderWidth: 1,
    borderColor: '#28282B',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#5555',
  },
  container: {
    width: width / 5,
    height: 80,
  },
});
