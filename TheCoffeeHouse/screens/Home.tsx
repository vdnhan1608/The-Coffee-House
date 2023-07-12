import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePageHeader from '../components/HomepageHeader';
const HomeScreen = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <HomePageHeader />
      <ScrollView>
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
              source={require('../icons/Coffee_Delivery_VectorForFree.png')}
            />
            <Text>Giao hàng</Text>
          </View>
          <View style={styles.verticleLine} />
          <View>
            <Image
              style={styles.tinyLogo}
              source={require('../icons/hand-holding-coffee.jpg')}
            />
            <Text>Mang đi</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FBFBFB',
    marginEnd: 10,
    height: 35,
    borderRadius: 35,
  },
  shadowOptions: {
    elevation: 5,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
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
});
export default HomeScreen;
