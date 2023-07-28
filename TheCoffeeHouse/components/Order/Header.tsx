import {faHeart, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={}/> */}
      <Text style={styles.text}>Danh mục</Text>
      <View style={styles.icons}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faHeart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: 2,
  },
  icons: {
    display: 'flex',
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginEnd: 10,
  },
  text: {
    fontFamily: 'SourceSerif4-SemiBold',
    fontSize: 18,
    marginStart: 10,
    color: '#000000',
  },
});
export default Header;
