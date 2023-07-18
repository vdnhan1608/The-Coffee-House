import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import OrderScreen from '../screens/Order';
import ShopScreen from '../screens/Shop';
import DiscountScreen from '../screens/Discount';
import OtherScreen from '../screens/Other';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="Trang chủ"
      component={HomeScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const OrderNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Đặt hàng"
      component={OrderScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
const ShopNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Cửa hàng"
      component={ShopScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
const DiscountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Ưu đãi"
      component={HomeScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
const OtherNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Khác"
      component={OtherScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trang chủ" component={HomeNavigator} />
      <Tab.Screen name="Đặt hàng" component={OrderNavigator} />
      <Tab.Screen name="Cửa hàng" component={ShopNavigator} />
      <Tab.Screen name="Ưu đãi" component={DiscountNavigator} />
      <Tab.Screen name="Khác" component={OtherNavigator} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
