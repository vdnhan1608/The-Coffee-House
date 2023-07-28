import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../components/Order/Header';
import Menu from '../components/Order/Menu';
import DrinkList from '../components/Order/DrinkList';

const OrderScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <Menu />
        <DrinkList />
      </ScrollView>
    </View>
  );
};

export default OrderScreen;
