import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
const recommendedProducts = [
  {
    image:
      'https://product.hstatic.net/1000075078/product/1675357918_cloudfee-hanh-nhan-nuong-min_8517e079ecbb4af3ac50b8bd3970869c_large.png',
    name: 'CloudFee Hạnh Nhân nướng',
    price: '49.000 đ',
  },
  {
    image:
      'https://product.hstatic.net/1000075078/product/1675355354_bg-tch-sua-da-no_97e95101711d4f87a20c385f2f6bf63c_large.jpg',
    name: 'The CoffeeHouse sữa đá',
    price: '39.000 đ',
  },
  {
    image:
      'https://product.hstatic.net/1000075078/product/1669736893_hi-tea-vai_941d8005b1a148068a224655beb92c7c_large.png',
    name: 'Hi-Tea Vải',
    price: '49.000 đ',
  },
  {
    image:
      'https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_8ec3ec80029f446b84abf3676f545076_large.png',
    name: 'Cà phê sữa đá',
    price: '29.000 đ',
  },
  {
    image:
      'https://product.hstatic.net/1000075078/product/1638440015_banh-mi-vietnam_f886eb0463bc487284f4e515cbd1bea6_large.jpg',
    name: 'Bánh mì VN Thịt Nguội',
    price: '35.000 đ',
  },
  {
    image:
      'https://product.hstatic.net/1000075078/product/1655348107_mochi-choco_b79e6739ca36468a893ccb016e34c906_large.jpg',
    name: 'Mochi Kem Chocolate',
    price: '19.000 đ',
  },
];

const Recommendation = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginTop: 20}}>
      {recommendedProducts.map((item, index) => (
        <View
          key={index}
          style={{marginHorizontal: 15, width: 120, height: 220}}>
          <Image
            source={{
              uri: item.image,
            }}
            style={{width: 120, height: 120, borderRadius: 10}}
          />
          <Text
            style={{
              fontFamily: 'SourceSerif4-SemiBold',
              marginTop: 5,
              color: '#000000',
            }}>
            {item.name}
          </Text>
          <Text style={{fontFamily: 'SourceSerif4-Light'}}>{item.price}</Text>
          <View
            style={{
              width: '100%',
              height: 30,
              bottom: 0,
              backgroundColor: '#FBF3E0',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{
                alignContent: 'center',
                fontFamily: 'SourceSerif4-Medium',
                color: '#C68045',
              }}>
              Chọn
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Recommendation;
