/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import MainPage from './comp/MainPage/MainPage';
import React from 'react';
import styles from './styles/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './comp/LoginPage/Splash';
import Login from './comp/LoginPage/Login';

// import Register from './comp/LoginPage/Register';

const Stack = createNativeStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      /> */}
    </Stack.Navigator>
  );
};
const Main= () => {
  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Main2"
      component={MainPage}
      options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <MainPage /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          {/* SplashScreen which will come once for 5 Seconds */}
          <Stack.Screen
            name="Splash"
            component={Splash}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
          />
          {/* Auth Navigator: Include Login and Signup */}
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Main" 
            component={Main} 
            options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
