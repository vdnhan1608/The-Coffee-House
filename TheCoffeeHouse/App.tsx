/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import BottomNavigation from './navigation/Tabs';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
  // return <></>;
}

export default App;
