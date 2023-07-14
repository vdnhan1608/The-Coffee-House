import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DeliveryMethod from '../components/Home/DeliveryMethod';
import HomePageHeader from '../components/Home/HomepageHeader';

const images = [
  'https://file.hstatic.net/1000075078/file/banner_web_moi_-_mobile_3f817feca1514a09912db4458b06f9f7.jpg',
  'https://file.hstatic.net/1000075078/file/mobile_ver_3a24c72a918f4df992d74c3f52b9dc0f.jpg',
  'https://file.hstatic.net/1000075078/file/banner_web_moi_-_mobile_c7098573a5194a33b6da5ddfc5173caa.jpg',
  'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg',
  'https://file.hstatic.net/1000075078/file/banner_web_moi_-_mobile_a51bf3dda753456aa15b86c45e2e1099.jpg',
];

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
const {width} = Dimensions.get('window');
const height = width * 0.6;
const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <HomePageHeader />
      <ScrollView>
        <DeliveryMethod />
        <View
          style={{
            marginTop: 10,
            width,
            height,
          }}>
          <ScrollView
            pagingEnabled
            horizontal
            // style={{width, height}}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                source={{
                  uri: image,
                }}
                style={{
                  width,
                  height,
                  resizeMode: 'cover',
                  borderRadius: 30,
                }}
              />
            ))}
          </ScrollView>
        </View>

        {/*Recommendation Section */}
        <Text
          style={{
            marginTop: 30,
            marginStart: 10,
            fontSize: 17,
            fontFamily: 'SourceSerif4-SemiBold',
            color: '#000000',
          }}>
          Gợi ý riêng cho duynhan:
        </Text>

        <ScrollView horizontal style={{marginTop: 20}}>
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
              <Text style={{fontFamily: 'SourceSerif4-Light'}}>
                {item.price}
              </Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default HomeScreen;
