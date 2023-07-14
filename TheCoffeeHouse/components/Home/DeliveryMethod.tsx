import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const DeliveryMethod = () => {
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: 10,
          height: 120,
          borderColor: '#F2F2F2',
          borderWidth: 2,
          marginHorizontal: 15,
          borderRadius: 15,
          justifyContent: 'space-evenly',
        },
      ]}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={require('../../icons/Coffee_Delivery_VectorForFree.png')}
        />
        <Text>Giao hàng</Text>
      </View>
      <View style={styles.verticleLine} />
      <View>
        <Image
          style={styles.tinyLogo}
          source={require('../../icons/hand-holding-coffee.jpg')}
        />
        <Text>Mang đi</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  verticleLine: {
    height: '80%',
    width: 1,
    backgroundColor: '#F2F2F2',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DeliveryMethod;
