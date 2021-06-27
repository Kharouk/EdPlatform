import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import VideoList from './components/VideoList';
import SearchInput from './components/SearchInput';

import {
  getAllVideos,
  getTopRatedTutorialsForTags,
  searchForTutorials,
} from './utils/fetchData';

export default function App() {
  const [videos, setVideos] = useState();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTags, setSearchTags] = useState('');
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    getAllVideos()
      .then((data) => setVideos(data.slice(0, 5)))
      .finally(() => setLoading(false));
  }, []);

  const showFilteredVideos = () => {
    if (searchData) {
      return searchForTutorials(videos, searchData);
    } else if (searchTags) {
      return getTopRatedTutorialsForTags(videos, searchTags);
    } else {
      return videos;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meet the new you.</Text>
      <Image source={'../assets/onlineLearning.svg'} />
      <SearchInput
        searchData={searchData}
        searchTags={searchTags}
        setSearchTags={setSearchTags}
        setSearchData={setSearchData}
      />
      <View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <VideoList
            isRefreshing={refreshing}
            refresh={getAllVideos}
            videos={showFilteredVideos()}
          />
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    paddingTop: '5%',
    paddingBottom: '5%',
  },
});
