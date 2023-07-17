import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DeliveryMethod from '../components/Home/DeliveryMethod';
import HomePageHeader from '../components/Home/HomepageHeader';
import Thumbnail from '../components/Home/Thumbnail';

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

const tabs = [
  {
    title: 'Ưu đãi đặc biệt',
  },
  {
    title: 'Cập nhật từ nhà',
  },
  {
    title: '#CoffeeLover',
  },
];

const data = [
  {
    name: 'Ronaldo',
  },
  {
    name: 'Ronaldo',
  },
  {
    name: 'Ronaldo',
  },
  {
    name: 'Ronaldo',
  },
];
const renderItem = e => {
  console.log(e);
};
const HomeScreen = () => {
  const [tab, setTab] = useState('Ưu đãi đặc biệt');

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <HomePageHeader />
      <ScrollView>
        <DeliveryMethod />
        {/* <View
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
        </View> */}
        <Thumbnail />

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

        {/*Recommendation Section */}
        <Text
          style={{
            marginTop: 40,
            marginStart: 10,
            fontSize: 17,
            fontFamily: 'SourceSerif4-SemiBold',
            color: '#000000',
          }}>
          Khám phá thêm
        </Text>
        {/* List tab */}
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          {tabs.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={item.title === tab ? styles.btnTabActive : styles.btnTab}
              onPress={() => setTab(item.title)}>
              <Text
                style={
                  item.title === tab ? styles.textTabActive : styles.textTab
                }>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={data}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  listTab: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  btnTab: {
    backgroundColor: '#FEFEFE',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTabActive: {
    backgroundColor: '#FEF7E7',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  textTab: {
    paddingHorizontal: 10,
    fontFamily: 'SourceSerif4-Medium',
    color: '#717171',
  },
  textTabActive: {
    paddingHorizontal: 10,
    fontFamily: 'SourceSerif4-Medium',
    color: '#CA7E28',
  },
});

export default HomeScreen;
