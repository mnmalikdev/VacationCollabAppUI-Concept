import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';
const EventSingle = ({navigation}) => {
  return (
    <View>
      <Image
        style={styles.imgContainer}
        source={{
          uri: 'https://images.pexels.com/photos/8241135/pexels-photo-8241135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Card Title</Text>
          <Text style={styles.location}>Event Location Address</Text>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
        <Text style={styles.subText}>People going</Text>
        <View style={styles.avatarContainer}>
          <Avatar.Image
            style={styles.avatar}
            size={50}
            source={{
              uri: 'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
          />
          <Avatar.Image
            style={styles.avatar}
            size={50}
            source={{
              uri: 'https://images.pexels.com/photos/7881527/pexels-photo-7881527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
          <Avatar.Image
            style={styles.avatar}
            size={50}
            source={{
              uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            }}
          />
          <Avatar.Image
            style={styles.avatar}
            size={50}
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
          />
          <Avatar.Image
            style={styles.avatar}
            size={50}
            source={{
              uri: 'https://images.pexels.com/photos/3754194/pexels-photo-3754194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert('Join Request Sent !');
          }}>
          <Text style={styles.btnText}>Join Event</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: '190%',
    height: '60%',
  },
  title: {
    fontSize: 27,
    color: 'black',
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    lineHeight: 20,
  },
  textContainer: {
    padding: 5,
  },
  scrollView: {
    height: '40%',
  },
  subText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 5,
    color: 'black',
  },
  avatarContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatar: {
    margin: 5,
  },
  button: {
    backgroundColor: '#FFA500',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    padding: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  location: {
    fontSize: 15,
    marginTop: 10,
    color: 'black',
  },
});
export default EventSingle;
