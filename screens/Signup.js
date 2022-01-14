import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Headline, Paragraph, TextInput} from 'react-native-paper';

const Signup = ({navigation}) => {
  return (
    <View style={styles.formContainer}>
      <Headline style={styles.text}>Create an Account to get started</Headline>
      <TextInput
        mode="outlined"
        label="email"
        style={styles.txtInput}
        theme={{colors: {primary: '#FFA500'}}}></TextInput>
      <TextInput
        mode="outlined"
        label="password"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
        style={styles.txtInput}
        theme={{colors: {primary: '#FFA500'}}}></TextInput>
      <TextInput
        mode="outlined"
        label="username"
        style={styles.txtInput}
        theme={{colors: {primary: '#FFA500'}}}></TextInput>
      <Button
        style={styles.button}
        icon="camera"
        mode="contained"
        theme={{
          colors: {
            primary: '#FFA500',
            accent: '#FFA500',
            text: '#FFA500',
            surface: '#FFA500',
          },
        }}
        onPress={() => console.log('Pressed')}>
        Create Account
      </Button>
      <TouchableOpacity>
        <Paragraph style={styles.text}>
          Already have an account?{' '}
          <Text
            onPress={() => {
              navigation.push('Login');
            }}
            style={styles.link}>
            Login
          </Text>
        </Paragraph>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    width: '85%',
    borderColor: 'orange',
    borderRadius: 5,
    margin: 5,
  },
  button: {
    width: '85%',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 90,
    margin: 5,
    padding: 5,
  },
  link: {
    color: 'blue',
  },
});

export default Signup;
