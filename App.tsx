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
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Deauthorizing" component={DeauthorizingScreen} />
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


/*
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

 */
