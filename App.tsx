import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Navigation from './src/navigation';
import {COLORS} from './src/constants';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: COLORS.white,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
