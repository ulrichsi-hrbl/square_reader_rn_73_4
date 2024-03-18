import React, {useEffect, useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {defaultStyles} from '../styles/common';

export default function AfterCheckoutScreen({navigation, route}: any) {
  const [checkoutDescription, setCheckoutDescription] =
    useState('no description');
  const getCheckoutResult = () => {
    try {
      const checkoutResult = route.params?.checkoutResult;
      return checkoutResult.toString();
    } catch (e) {
      return '';
    }
  };

  useEffect(() => {
    let checkoutResult = 'no checkout result';
    if (route.params?.checkoutResult) {
      try {
        checkoutResult = route.params?.checkoutResult?.toString();
      } catch (e) {
        //r
      }
      setCheckoutDescription(checkoutResult);
    }
  }, [route]);
  return (
    <View style={defaultStyles.pageContainer}>
      <Button title={'Back to Start'} onPress={navigation.navigate('Splash')} />
      <ScrollView>
        <Text style={[defaultStyles.title, {fontSize: 16}]}>
          {checkoutDescription}
        </Text>
      </ScrollView>
    </View>
  );
}
