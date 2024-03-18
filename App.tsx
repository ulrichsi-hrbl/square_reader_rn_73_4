/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/*
Copyright 2022 Square Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {GlobalizeProvider, loadCldr} from 'react-native-globalize';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ChooseAuthorizeScreen} from './app/screens/ChooseAuthorizeScreen';
import {ManualAuthorizeScreen} from './app/screens/ManualAuthorizeScreen';
import CheckoutScreen from './app/screens/CheckoutScreen';
import {SettingScreen} from './app/screens/SettingScreen';
import SplashScreen from './app/screens/SplashScreen';
import {PermissionScreenIOS} from './app/screens/PermissionScreenIOS';
import {QRAuthorizationScreen} from './app/screens/QRAuthorizationScreen';
import AuthorizingScreen from './app/screens/AuthorizingScreen';
import DeauthorizingScreen from './app/screens/DeauthorizingScreen';
import AfterCheckoutScreen from './app/screens/AfterCheckoutScreen';

if (__DEV__) {
  const isPhysicalIphone = true;
  if (isPhysicalIphone) {
    import('./Physical_iphone_ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );
  } else {
    import('./ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );
  }
}

loadCldr(
  // Load the locales you actually need
  require('react-native-globalize/locale-data/en'),
);

const App: FC = () => {
  const Stack = createStackNavigator();
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Authorize" component={ChooseAuthorizeScreen} />
        <Stack.Screen name="QRAuthorize" component={QRAuthorizationScreen} />
        <Stack.Screen
          name="ManualAuthorize"
          component={ManualAuthorizeScreen}
        />
        <Stack.Screen name="Authorizing" component={AuthorizingScreen} />
      </Stack.Navigator>
    );
  };

  const PaymentStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Deauthorizing" component={DeauthorizingScreen} />
        <Stack.Screen
          name="AfterCheckoutSuccess"
          component={AfterCheckoutScreen}
        />
      </Stack.Navigator>
    );
  };

  return (
    <GlobalizeProvider locale="en">
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen
            name="PermissionSettings"
            component={PermissionScreenIOS}
          />
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Checkout" component={PaymentStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalizeProvider>
  );
};

export default App;
