import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Paragraph, TextInput} from 'react-native-paper';

const Login = ({navigation}) => {
  return (
    <View style={styles.formContainer}>
      <TextInput
        theme={{
          colors: {
            primary: '#FFA500',
            accent: '#FFA500',
            text: '#FFA500',
            surface: '#FFA500',
          },
        }}
        mode="outlined"
        label="username"
        style={styles.txtInput}></TextInput>
      <TextInput
        theme={{
          colors: {
            primary: '#FFA500',
            accent: 'white',
            text: '#FFA500',
            surface: '#FFA500',
          },
        }}
        mode="outlined"
        label="password"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
        style={styles.txtInput}></TextInput>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.push('Home');
        }}
        theme={{
          colors: {
            primary: '#FFA500',
            accent: '#FFA500',
            text: '#FFA500',
            surface: '#FFA500',
          },
        }}>
        Login !
      </Button>
      <TouchableOpacity>
        <Paragraph style={styles.text}>
          Dont have an account?{' '}
          <Text
            onPress={() => {
              navigation.push('Signup');
            }}
            style={styles.link}>
            Signup
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
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 90,
    margin: 5,
    padding: 5,
  },
  link: {
    color: 'blue',
  },
});

export default Login;
