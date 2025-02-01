import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
});

const AfterSplashScreen = () => {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
<Text>hi</Text>
    </SafeAreaView>
  </SafeAreaProvider>
  );
};

export default AfterSplashScreen;
