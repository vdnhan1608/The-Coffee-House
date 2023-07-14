import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePageHeader = () => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#F6F6F6',
          justifyContent: 'space-between',
          height: 70,
        },
      ]}>
      <View
        style={[
          styles.container,
          {
            marginStart: 10,
          },
        ]}>
        <Icon name="coffee" size={20} style={{marginEnd: 10}} />
        <Text>duynhan ơi, CloudTea nhé!</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={[
            styles.container,
            styles.shadowOptions,
            styles.card,
            {
              width: 70,
              justifyContent: 'space-around',
            },
          ]}>
          <Icon name="ticket" size={20} />
          <Text>12</Text>
        </View>

        <View
          style={[
            styles.container,
            styles.shadowOptions,
            styles.card,
            {
              width: 35,
            },
          ]}>
          <Icon name="bell" size={20} />
        </View>
      </View>
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
});

export default HomePageHeader;
