import React from 'react';
import {Dimensions, Image, ScrollView, View} from 'react-native';

const images = [
  'https://file.hstatic.net/1000075078/file/banner_web_moi_-_mobile_3f817feca1514a09912db4458b06f9f7.jpg',
  'https://file.hstatic.net/1000075078/file/mobile_ver_3a24c72a918f4df992d74c3f52b9dc0f.jpg',
  'https://file.hstatic.net/1000075078/file/banner_web_moi_-_mobile_c7098573a5194a33b6da5ddfc5173caa.jpg',
  'https://file.hstatic.net/1000075078/file/desktop_c372f0d12f214011806143bb0efb8257.jpg',
  'https://file.hstatic.net/1000075078/file/banner_web_moi_-_mobile_a51bf3dda753456aa15b86c45e2e1099.jpg',
];

const {width} = Dimensions.get('window');
const height = width * 0.6;

const Thumbnail = () => {
  return (
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
  );
};

export default Thumbnail;
