import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
import VideoList from './components/VideoList';
import SearchInput from './components/SearchInput';

import {
  getAllVideos,
  getTopRatedTutorialsForTags,
  searchForTutorials,
} from './utils/fetchData';

import { wait } from './utils/helpers';

export default function App() {
  const [videos, setVideos] = useState();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTags, setSearchTags] = useState('');
  const [searchData, setSearchData] = useState('');

  const callApi = () =>
    getAllVideos()
      .then((data) => setVideos(data))
      .finally(() => setLoading(false));

  useEffect(() => {
    callApi();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    wait(1000).then(() => {
      callApi();
      setRefreshing(false);
    });
  });

  const showFilteredVideos = () => {
    if (searchData) {
      return searchForTutorials(videos, searchData);
    } else if (searchTags) {
      return getTopRatedTutorialsForTags(videos, searchTags);
    } else {
      // show only the first 100 videos
      return videos.slice(0, 100);
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Header />
        <SearchInput
          searchData={searchData}
          searchTags={searchTags}
          setSearchTags={setSearchTags}
          setSearchData={setSearchData}
        />
        <View>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <VideoList videos={showFilteredVideos()} />
          )}
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
