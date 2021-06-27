import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const headImage = require('../assets/onlineLearning.png');

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>
        Learn everything,{' '}
        <span style={{ borderBottom: '1px solid black' }}>seriously.</span>
      </Text>
      <Text style={styles.subheader}>
        Built for Love and{' '}
        <span style={{ color: '#5DCBFF', fontStyle: 'italic' }}>Lingumi</span>.
      </Text>
      <Text style={{ paddingBottom: '10px', textAlign: 'center' }}>
        By{' '}
        <a
          style={{
            color: '#5DCBFF',
            fontWeight: 'bold',
          }}
          href="https://github.com/kharouk"
        >
          Alex Kharouk
        </a>
      </Text>
      <Image source={headImage} style={{ width: 300, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 28,
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  subheader: {
    textAlign: 'center',
  },
});
