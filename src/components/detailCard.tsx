import React, {useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackIcon, StarIcon} from '../assets';
import {Separator} from './separator';
const {width} = Dimensions.get('window');

interface Props {
  title: string;
  text: any;
  type: string;
}

export const DetailCard: React.FC<Props> = ({title, text, type}) => {
  const [isOpen, setIsOpen] = useState(false);
  const index = useRef(new Animated.Value(0)).current;
  const rotate = index.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '-90deg'],
  });

  const click = () => {
    if (isOpen) {
      Animated.timing(index, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
      setIsOpen(false);
    } else {
      Animated.timing(index, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
      setIsOpen(true);
    }
  };

  const textRender = () => {
    switch (type) {
      case 'text':
        return (
          <Text
            style={[
              styles.dropDownDetail,
              isOpen
                ? {height: 100, marginBottom: 20}
                : {height: 0, marginBottom: 0},
            ]}>
            {text}
          </Text>
        );
      case 'array':
        return Object.keys(text).map((cur: string) => (
          <View key={cur} style={{flexDirection: 'row'}}>
            <Text>- {cur} : </Text>
            <Text>{text[cur]}</Text>
          </View>
        ));
      case 'star':
        const review = Number(text);
        return [1, 2, 3, 4, 5].map((i) => (
          <View key={`star${i}`}>
            <View style={[styles.star, {backgroundColor: '#EBEBEB'}]} />
            <View
              style={[
                styles.star,
                {width: review > i ? 29 : (review - (i - 1)) * 29},
              ]}
            />
            <StarIcon width={30} height={30} />
          </View>
        ));
    }
  };

  const measureHeight = () => {
    switch (type) {
      case 'text':
        return `auto`;
      case 'array':
        return Object.keys(text).length * 20;
      case 'star':
        return 20;
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => click()}>
        <View style={styles.dropDownHeader}>
          <Text style={styles.dropDownTitle}>{title}</Text>
          <Animated.View style={{transform: [{rotate}]}}>
            <BackIcon color="black" />
          </Animated.View>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.dropDownDetail,
          isOpen
            ? {height: measureHeight(), marginBottom: 20, display: 'flex'}
            : {height: 0, marginBottom: 0, display: 'none'},
          type === 'star' ? {flexDirection: 'row'} : {},
        ]}>
        {textRender()}
      </View>
      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownHeader: {
    width: width * 0.85,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropDownTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  dropDownDetail: {
    fontSize: 17,
    lineHeight: 25,
    opacity: 0.8,
    fontWeight: '400',
    width: width * 0.85,
    textTransform: 'capitalize',
  },
  star: {
    width: 29,
    height: 26,
    position: 'absolute',
    backgroundColor: '#F3603F',
    marginTop: 2,
  },
});
