import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { convertDecimalToPercentage } from '../utils/helpers.js';

const Item = ({ item }) => (
  <View style={styles.item}>
    {console.log(item)}
    <Text>
      {item.videoTitle} by {item.teacherName}
    </Text>
    <Text>{convertDecimalToPercentage(item.averageUserRating)} loved it!</Text>
    <View>
      <Text>{item.tags.join(', ')}</Text>
    </View>
  </View>
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
  },
});
