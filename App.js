import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Components

import NavigationMenu from './components/Navigation';
//import Map from './components/Map';
import TitleBar from './components/TitleBar'

export default App = () => {
  return (
    <View style={styles.container}>
      <TitleBar title="Mindervalide"/>
      <NavigationMenu/>
      <StatusBar style="auto" translucent={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  }
});
