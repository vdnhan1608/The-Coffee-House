import React, {useState} from 'react';
import {
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
import Recommendation from '../components/Home/Recommendation';
import Thumbnail from '../components/Home/Thumbnail';

const {width} = Dimensions.get('window');

const tabs = [
  {
    topic: 'Ưu đãi đặc biệt',
  },
  {
    topic: 'Cập nhật từ nhà',
  },
  {
    topic: '#CoffeeLover',
  },
];

const data = [
  // Ưu đãi đặc biệt
  {
    image:
      'https://file.hstatic.net/1000075078/article/3__1__2b67342f4db64bb082944cf078afd910_grande.jpg',
    title:
      'SIGNATURE - BIỂU TƯỢNG VĂN HOÁ CÀ PHÊ CỦA THE COFFEE HOUSE ĐÃ QUAY TRỞ LẠI',
    date: '01/07',
    topic: 'Ưu đãi đặc biệt',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/_dsc2358_5075c84b1b114f72b968dad9e9e9ceaa_grande.jpg',
    title: 'UỐNG GÌ KHI TỚI SIGNATURE BY THE COFFEE HOUSE?',
    date: '01/07',
    topic: 'Ưu đãi đặc biệt',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/1__3__ec2969cff66c462d8d29959f1456bc08_grande.jpg',
    title: 'CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON',
    date: '01/07',
    topic: 'Ưu đãi đặc biệt',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/3__1__2b67342f4db64bb082944cf078afd910_grande.jpg',
    title:
      'SIGNATURE - BIỂU TƯỢNG VĂN HOÁ CÀ PHÊ CỦA THE COFFEE HOUSE ĐÃ QUAY TRỞ LẠI',
    date: '01/07',
    topic: 'Ưu đãi đặc biệt',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg',
    title: 'CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT',
    date: '01/07',
    topic: 'Ưu đãi đặc biệt',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_7_db8def55acbf426ea725921529f6f01e_grande.jpg',
    title: 'BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ',
    date: '01/07',
    topic: 'Ưu đãi đặc biệt',
  },
  // Cập nhật từ nhà
  {
    image:
      'https://file.hstatic.net/1000075078/article/cautoankeothom_thecoffeehouse_03_29cd435c9a574e1a867ac36f2c863bb6_grande.jpg',
    title: 'BỘ SƯU TẬP CẦU TOÀN KÈO THƠM:',
    date: '01/07',
    topic: 'Cập nhật từ nhà',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/dscf0216_2890bcca44ae49aaaf843d5fa3db2fc6_grande.jpg',
    title: 'KHUẤY ĐỂ THẤY TRĂNG - KHUẤY  LÊN NIỀM HẠNH PHÚC',
    date: '01/07',
    topic: 'Cập nhật từ nhà',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/hinh_cover_hero_c7bbff15ef674270ae8390da9c2be2ab_grande.jpg',
    title: 'KHUẤY ĐỂ THẤY TRĂNG - HOT TREND MỞ MÀN TRUNG THU',
    date: '01/07',
    topic: 'Cập nhật từ nhà',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/pr-cover_41de066c6f654ee9b318dbffe7e5e5f0_grande.jpg',
    title: '10 LỢI ÍCH KHÔNG NGỜ CỦA TRÀ HOA HIBISCUS',
    date: '01/07',
    topic: 'Cập nhật từ nhà',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/thecoffeehouse_atiso_xanh_01_ac85a05481ae4756a24f48b6bdb139de_grande.jpg',
    title: 'BẠN CÓ ĐANG NHẦM LẪN GIỮA ATISO ĐỎ VÀ ATISO XANH?',
    date: '01/07',
    topic: 'Cập nhật từ nhà',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/thecoffeehouse_nuoc_pha_tra_07_4aff69297bfa4bbab42f18b27c2c11f0_grande.jpg',
    title: 'CHỌN NHIỆT ĐỘ NƯỚC ĐỂ PHA TRÀ ĐÚNG CHUẨN CHUYÊN GIA',
    date: '01/07',
    topic: 'Cập nhật từ nhà',
  },
  // #CoffeeLover
  {
    image:
      'https://file.hstatic.net/1000075078/article/7_tam_focus_ly_69c0bd5016024cba868e270d8ccbe696_grande.jpg',
    title: 'ĐI VAY LẠNH - TỪ VỰNG HẸN HÒ MỚI NỔI',
    date: '01/07',
    topic: '#CoffeeLover',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/5_goi_mat_lanh_84dd2c3ae41f4bedae449acf8a38b348_grande.jpg',
    title: 'NGHE NHÀ MÁCH NHỎ BÍ KÍP HEALTHY GỌN NHẸ, AI CŨNG ÁP DỤNG ĐƯỢC',
    date: '01/07',
    topic: '#CoffeeLover',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/signaturebythecoffeehouse_03_16b2ab7101e14d62835a4b231e73b65d_grande.jpg',
    title: 'SIGNATURE BY THE COFFEE HOUSE  - "DẤU ẤN" MỚI CỦA NHÀ CÀ PHÊ',
    date: '01/07',
    topic: '#CoffeeLover',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/dscf6292_d784e8350a0942c1965127ecf57587ee_grande.jpg',
    title: 'CHIẾC LY ĐỔI MÀU',
    date: '01/07',
    topic: '#CoffeeLover',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/z3663478710700_0f36930c9ad300ade688f7ed1ddbd4f8_ceb536831696441fa7e8d9a2ad990c44_grande.jpg',
    title:
      'CŨNG LÀ ĂN BÁNH, THƯỞNG TRÀ, NGẮM TRĂNG - GEN Z LÀM GÌ CHO BỚT NHẠT?',
    date: '01/07',
    topic: '#CoffeeLover',
  },
  {
    image:
      'https://file.hstatic.net/1000075078/article/123232891_2820303564910318_4578047210373311456_n_699bea2973ec4087886ab888d5434de4_grande.jpg',
    title: 'LỄ TÌNH NHÂN, CÙNG CRUSH ĐI ĐÂU?',
    date: '01/07',
    topic: '#CoffeeLover',
  },
];

const HomeScreen = () => {
  const [tab, setTab] = useState('Ưu đãi đặc biệt');
  const [dataList, setDataList] = useState([
    ...data.filter(item => item.topic === 'Ưu đãi đặc biệt'),
  ]);

  const renderItem = ({item, index}: any) => {
    return (
      <View key={index} style={styles.column}>
        <Image
          source={{uri: item.image}}
          style={{
            width: '100%',
            height: width / 2,
            borderRadius: 10,
          }}
        />
        <Text style={{fontFamily: 'SourceSerif4-SemiBold'}}>{item.title}</Text>
        <Text style={{fontFamily: 'SourceSerif4-Regular'}}>{item.date}</Text>
      </View>
    );
  };

  const setTabFilter = (topic: string) => {
    if (topic === 'Ưu đãi đặc biệt') {
      setDataList([...data.filter(item => item.topic === 'Ưu đãi đặc biệt')]);
    } else if (topic === 'Cập nhật từ nhà') {
      setDataList([...data.filter(item => item.topic === 'Cập nhật từ nhà')]);
    } else {
      setDataList([...data.filter(item => item.topic === '#CoffeeLover')]);
    }
    setTab(topic);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <HomePageHeader />
      <ScrollView>
        <DeliveryMethod />
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

        <Recommendation />

        {/*Exploration Section */}
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
              style={item.topic === tab ? styles.btnTabActive : styles.btnTab}
              onPress={() => setTabFilter(item.topic)}>
              <Text
                style={
                  item.topic === tab ? styles.textTabActive : styles.textTab
                }>
                {item.topic}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={dataList}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
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

  columnWrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    display: 'flex',
  },
  column: {
    width: '45%', // Adjust this value as needed to create the desired gap between columns
    height: 300,
    marginTop: 10,
  },
});

export default HomeScreen;
