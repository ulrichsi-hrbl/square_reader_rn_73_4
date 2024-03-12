import Reactotron from 'reactotron-react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';

const scriptURL = NativeModules.SourceCode.scriptURL;
let scriptHostname = scriptURL.split('://')[1].split(':')[0];

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({host: scriptHostname})
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
