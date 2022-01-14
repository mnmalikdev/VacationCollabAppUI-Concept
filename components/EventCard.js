import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const EventCard = ({screenName}) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight onPress={() => navigation.navigate(screenName)}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/8241135/pexels-photo-8241135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
        />
        <Text style={styles.cardTitle}>Card Title</Text>
        <Text style={styles.cardDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    marginLeft: 1,
    marginRight: 10,
    marginTop: 17,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderColor: '#DCDCDC',
    borderWidth: 1,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardTitle: {
    fontSize: 20,
    color: 'black',
  },
  cardDescription: {
    fontSize: 15,
    color: 'black',
    lineHeight: 20,
    paddingBottom: 10,
  },
});
export default EventCard;
