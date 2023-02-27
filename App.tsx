import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Navigation from './src/navigation';
import {COLORS} from './src/constants';

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
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
