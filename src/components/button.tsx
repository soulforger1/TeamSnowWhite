import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
  width: number | string;
  height: number | string;
  borderRadius: number;
  text: string;
  handler: Function;
}

export const Button: React.FC<ButtonProps> = ({
  width,
  height,
  borderRadius,
  text,
  handler,
}) => {
  const styles = StyleSheet.create({
    btn: {
      width: width,
      height: height,
      borderRadius: borderRadius,
      backgroundColor: '#53B175',
      justifyContent: 'center',
    },
    btnText: {
      fontSize: 18,
      fontWeight: '600',
      fontStyle: 'normal',
      lineHeight: 18,
      textAlign: 'center',
      color: '#FFF9FF',
    },
  });

  return (
    // <View style={styles.container}>
    //   <View style={styles.imageContainer}>
    //     <Image source={{uri: image}} style={styles.image} />
    //   </View>
    //   <Text style={styles.name}>{name}</Text>
    //   <Text style={styles.perItemWeight}>{perItemWeight}</Text>
    //   <View style={styles.priceContainer}>
    //     <Text style={styles.price}>${price}</Text>
    //     <View
    //       style={{
    //         height: 45,
    //         width: 45,
    //         backgroundColor: '#53B175',
    //         borderRadius: 17,
    //       }}></View>
    //   </View>
    // </View>
    <View>
      <TouchableOpacity style={styles.btn} onPress={() => handler()}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
