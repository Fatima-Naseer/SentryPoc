import * as Sentry from '@sentry/react-native';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {Alert, Button, StatusBar, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PermissionsAndroid} from 'react-native';
import React from 'react';
import Source from './source';

// import WifiManager from 'react-native-wifi-reborn';

Sentry.init({
  dsn:
    'https://2c56364e2b1b46599cf7590950b1cb93@o460512.ingest.sentry.io/5460868',
});

const App: () => React$Node = () => {
  const granted = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission is required for WiFi connections',
        message:
          'This app needs location permission as this is required  ' +
          'to scan for wifi networks.',
        buttonNegative: 'DENY',
        buttonPositive: 'ALLOW',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // You can now use react-native-wifi-reborn
      Alert.alert(JSON.stringify('fghjk'));
    } else {
      // Permission denied
    }
  };
  React.useEffect(() => {
    (async () => {
      await granted();
      // await Location.getCurrentPositionAsync({});
    })();
  });
  // const connectToBlueEast = async () => {
  //   try {
  //     await WifiManager.connectToProtectedSSID('BlueEast', 'Orient@Ogc', false);
  //   } catch (e) {
  //     Alert.alert(JSON.stringify(e));
  //   }
  // };
  // const connectToOrient = async (data, type) => {
  //   await WifiManager.connectToProtectedSSID(data, type, false);
  // };
  //'ORIENT-807D3A6432C0',
  //'9#216$46',
  const handleFetchApi = async () => {
    fetch('https://www.google.com/')
      .then((res) => {
        Alert.alert(JSON.stringify(res));
      })
      .catch((err) => {
        Alert.alert(JSON.stringify(err));
      });
  };

  const throwException = () => {
    throw new Error('My first Sssssssentry error!');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Source />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  btnStyle: {
    height: 50,
    width: 100,
  },
});

export default App;
