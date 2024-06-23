import 'react-native-gesture-handler';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { Navigator } from './src/navigation/Navigator';
import { store } from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
