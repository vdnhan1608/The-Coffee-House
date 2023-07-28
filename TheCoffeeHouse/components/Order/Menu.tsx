import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const menus1 = [
  {
    image: 'https://hrv.hstatic.net/s_1000266602/_creamy.png',
    name: 'Món mới phải thử',
  },
  {
    image:
      'https://product.hstatic.net/1000075078/product/1686021305_banh-kem-dau-new_4e262f211dac4efd9d4b3a9bb17d5bdc_large.jpg',
    name: 'Đá xay Frosty',
  },
  {
    image:
      'https://product.hstatic.net/1000075078/product/1639377770_cfsua-nong_d9cb7313ec5246f8a1b1b05f8a5320de_large.jpg',
    name: 'Cà phê',
  },
  {
    image:
      'https://product.hstatic.net/1000075078/product/1675329314_bg-cloudfee-caramel_3757db8b6be24d3d9a45ea71e4f4d9ea_large.jpg',
    name: 'CloudFee',
  },
];

const menus2 = [
  {
    image:
      'https://product.hstatic.net/1000075078/product/1675329651_bg-cloudtea-daxay_11ad0ffe4ec344079f0d97999e5d8822_large.jpg',
    name: 'CloudTea',
  },
  {
    image:
      'https://product.hstatic.net/1000075078/product/1650529463_hi-tea-vai_a9cfafdab16c4db8bade329040e4186c.jpg',
    name: 'Hi-Tea Healthy',
  },
  {
    image:
      'https://product.hstatic.net/1000075078/product/tra-sen_905594_9b4a106ee40247ff85ae2a4a6d73497c_large.jpg',
    name: 'Trà trái cây - Trà sữa',
  },
  {
    image:
      'https://static.vecteezy.com/system/resources/previews/021/190/076/original/more-three-dots-settings-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg',
    name: 'Xem thêm',
  },
];
const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {menus1.map((item, index) => (
          <View style={styles.item} key={index}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {menus2.map((item, index) => (
          <View style={styles.item} key={index}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 400,
  },
  item: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  text: {
    fontFamily: 'SourceSerif4-Regular',
    textAlign: 'center',
  },
});

export default Menu;
