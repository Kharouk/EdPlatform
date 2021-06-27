import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { convertDecimalToPercentage } from '../utils/helpers.js';
import Card from './Card.js';

const Item = ({ item }) => (
  <Card>
    <View style={styles.item}>
      {console.log(item)}
      <Text style={{ fontSize: 22, color: 'white' }}>
        {item.videoTitle} by Teacher {item.teacherName}
      </Text>
      <Text>
        {convertDecimalToPercentage(item.averageUserRating)} loved it!
      </Text>
      <View>
        <Text>{item.tags.join(', ')}</Text>
      </View>
    </View>
  </Card>
);

export default function VideoList({ videos, refresh, isRefreshing }) {
  return (
    <View style={styles.container}>
      <Text>The latest and greatest</Text>
      <FlatList
        data={videos}
        renderItem={({ item }) => <Item item={item} />}
        onRefresh={refresh}
        refreshing={isRefreshing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  item: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    marginVertical: 30,
    color: '#fff',
    paddingVertical: 10,
  },
});
