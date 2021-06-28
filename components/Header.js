import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const headImage = require('../assets/onlineLearning.png');

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>
        Learn everything, <Text style={styles.underline}>seriously.</Text>
      </Text>
      <Text style={styles.subheader}>
        Built for Love and <Text style={styles.links}>Lingumi</Text>.
      </Text>
      <Text style={{ paddingBottom: 10, textAlign: 'center' }}>
        By <Text style={styles.links}>Alex Kharouk</Text>
      </Text>
      <Image source={headImage} style={{ width: 300, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 28,
    paddingTop: '10%',
    paddingBottom: '5%',
  },
  subheader: {
    textAlign: 'center',
  },
  underline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 2,
    fontStyle: 'italic',
  },
  links: {
    color: '#5DCBFF',
    fontWeight: 'bold',
  },
});
