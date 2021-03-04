import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
const {width} = Dimensions.get('window');

interface Props {
  width: number;
  height: number;
  data: any;
}

const SliderContent = ({image, height, width, index, data}: any) => {
  return (
    <ImageBackground
      source={image}
      style={[style.imageBackground, {width, height}]}>
      <View
        style={{
          flexDirection: 'row',
          width: 45,
          justifyContent: 'space-between',
          backgroundColor: 'white',
          marginBottom: 6,
        }}>
        {data.map((cur: any, i: string) => (
          <Animated.View
            key={i}
            style={[
              style.dot,
              {transform: [{scaleX: 1}]},
              i === index
                ? {
                    backgroundColor: '#53B175',
                    width: 17,
                  }
                : {
                    backgroundColor: '#030303',
                    opacity: 0.3,
                  },
            ]}></Animated.View>
        ))}
      </View>
    </ImageBackground>
  );
};

export const Slider: React.FC<Props> = ({data, width, height}) => {
  return (
    <View style={style.container}>
      <FlatList
        style={{width, height: 0, marginTop: 30}}
        contentContainerStyle={{justifyContent: 'center'}}
        data={data}
        renderItem={({item, index}) => (
          <SliderContent
            image={item}
            width={width}
            height={height}
            index={index}
            data={data}
          />
        )}
        keyExtractor={(_, index) => `slider${index}`}
        horizontal
        pagingEnabled
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 160,
    width: width,
    alignItems: 'center',
  },
  imageBackground: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
});
