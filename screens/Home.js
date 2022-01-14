import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import EventCard from '../components/EventCard';
const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        Search events and invite your friend !
      </Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <View>
        <Text style={styles.subText}>Most Popular</Text>
        <TouchableOpacity>
          <EventCard screenName="EventSingle"></EventCard>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  mainText: {
    fontSize: 30,
    color: 'black',
    paddingBottom: 12,
  },
  subText: {
    marginTop: 30,
    fontSize: 21,
    color: 'black',
  },
  searchBar: {
    width: '95%',
  },
});
export default Home;
