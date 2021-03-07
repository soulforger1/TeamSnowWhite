import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BackIcon, CloseIcon} from '../assets';
import {Button, Separator} from '../components';
const {width, height} = Dimensions.get('window');

const Content = ({title, text, handler}: any) => {
  return (
    <View style={styles.content}>
      <Text style={{fontSize: 20, fontWeight: '600', color: '#7C7C7C'}}>
        {title}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>{text}</Text>
        <View style={{transform: [{rotate: '180deg'}], marginLeft: 20}}>
          <BackIcon />
        </View>
      </View>
    </View>
  );
};

export const CheckoutModal: React.FC<any> = (props) => {
  const {cost} = props.route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{fontSize: 24, fontWeight: '600'}}>Checkout</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CloseIcon color="black" width={18} height={24} />
          </TouchableOpacity>
        </View>
        <Separator width={width} />
        <Content title="Delivery" text="Select Method" />
        <Separator />
        <Content title="Payment" text="flag" />
        <Separator />
        <Content title="Promo Code" text="Pick discount" />
        <Separator />
        <Content title="Total Cost" text={`$${cost}`} />
        <Separator />
        <View style={styles.termsContainer}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              lineHeight: 22,
              color: '#7C7C7C',
            }}>
            By placing an order you agree to our
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: '600', lineHeight: 22}}>
              Terms And Conditions
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          width={364}
          height={67}
          borderRadius={19}
          text="Place Order"
          handler={() => navigation.navigate('orderAccepted')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  container: {
    width: width,
    height: height * 0.65,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  title: {
    width: width * 0.85,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    width: width * 0.85,
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  termsContainer: {
    marginTop: 16,
    marginBottom: 20,
    width: width * 0.85,
  },
});
