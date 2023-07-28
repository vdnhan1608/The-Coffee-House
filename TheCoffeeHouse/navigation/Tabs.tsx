import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import HomeScreen from '../screens/Home';
import OrderScreen from '../screens/Order';
import ShopScreen from '../screens/Shop';
import DiscountScreen from '../screens/Discount';
import OtherScreen from '../screens/Other';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {View} from 'react-native';

const TabBarIcon = ({routeName, focused, color, size}: any) => {
  console.log({routeName, focused, color, size});
  let iconName: any;

  if (routeName === 'Trang chủ') {
    iconName = focused ? faHome : faHome;
  } else if (routeName === 'Đặt hàng') {
    iconName = focused ? faUser : faUser;
  } else if (routeName === 'Cửa hàng') {
    iconName = focused ? faCog : faCog;
  } else if (routeName === 'Ưu đãi') {
    iconName = focused ? faCog : faCog;
  } else if (routeName === 'Khác') {
    iconName = focused ? faCog : faCog;
  }

  return (
    <View>
      <FontAwesomeIcon icon={iconName} size="3x" color={color} />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'SourceSerif4-Regular',
        },
      }}>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Đặt hàng" component={OrderScreen} />
      <Tab.Screen name="Cửa hàng" component={ShopScreen} />
      <Tab.Screen name="Ưu đãi" component={DiscountScreen} />
      <Tab.Screen name="Khác" component={OtherScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
