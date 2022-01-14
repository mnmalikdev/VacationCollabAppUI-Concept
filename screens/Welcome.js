import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const Welcome = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.imgContainer}
      source={require('./../assets/background.jpg')}>
      <View style={styles.Container}>
        <View style={styles.topContainer}>
          <Text style={styles.logoText}>VacayCollab</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.introText}>Plan your dream vacation</Text>
          <Text style={styles.introText}>Take your friends with you !</Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)"
            style={styles.startBtn}
            onPress={() => {
              navigation.push('Signup');
            }}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableRipple>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    resizeMode: 'cover',
  },
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 50,
    fontWeight: '900',
    color: 'white',
  },
  introText: {
    fontSize: 23,
    fontWeight: '400',
    color: 'white',
  },
  startBtn: {
    backgroundColor: '#FEA82F',
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 13,
    paddingBottom: 13,
    borderWidth: 1,
    borderColor: '#FEA82F',
    borderRadius: 100,
    margin: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
export default Welcome;
