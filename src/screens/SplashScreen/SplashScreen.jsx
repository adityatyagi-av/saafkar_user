import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
});

const SplashScreen = ({navigation}) => {
const [loggedIn,setLoggedIn] = useState(false);
  useEffect(()=>{
    if(loggedIn){

    }
    else{
      setTimeout(()=>{
        navigation.navigate('After-Splash');
      },3000);
    }
    
  },[navigation]);
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/logo/logo.png')}
      />
    </SafeAreaView>
  </SafeAreaProvider>
  );
};

export default SplashScreen;
