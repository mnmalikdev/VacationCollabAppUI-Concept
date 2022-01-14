import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import EventSingle from './screens/EventSingle';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="EventSingle" component={EventSingle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
