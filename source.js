import * as Sentry from '@sentry/react-native';

import {Alert, Button} from 'react-native';

import React from 'react';

const Source: () => React$Node = () => {
  React.useEffect(() => {
    (async () => {
      await crashTry();
      // await Location.getCurrentPositionAsync({});
    })();
  });
  const crashTry = () => {
    throw new Error('My first adnan error!');
  };
  return <Button title="Crash App" color="green" onPress={crashTry} />;
};

export default Source;
//# sourceMappingURL=source.js.map
