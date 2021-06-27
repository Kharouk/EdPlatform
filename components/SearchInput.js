import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function SearchInput({
  searchTags,
  setSearchTags,
  searchData,
  setSearchData,
}) {
  return (
    <View style={styles.searchSection}>
      <View>
        <Text>Search based on tag:</Text>
        <TextInput
          style={styles.input}
          text={searchTags}
          onChangeText={setSearchTags}
          placeholder="ex: Hard, Exciting, etc."
        />
      </View>
      <View>
        <Text>Search by Teacher or Lesson Name:</Text>
        <TextInput
          style={styles.input}
          text={searchData}
          onChangeText={setSearchData}
          placeholder="ex: Trevor, Vehicles, etc"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  searchSection: {
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'center',
    paddingBottom: 10,
    alignItems: 'center',
  },
});
