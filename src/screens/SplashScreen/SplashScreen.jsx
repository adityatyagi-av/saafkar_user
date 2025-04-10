import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {clearTokens, getTokens} from '../../../services/tokenService';
import axios from 'axios';
import api from '../../../services/api';
import {BASE_URL} from '../../ApiBaseUrl/ApiBaseUrl';
import {USER_PROFILE} from '../../ApiEndPoints/ApiEndPoints';
import {useDispatch} from 'react-redux';
import {handleLogout, updateUserProfile} from '../../../store/Actions/authAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const checkAuth = async () => {
    try {
      const {accessToken} = await getTokens();
      console.log(accessToken);
      if (!accessToken) throw new Error('No access token');
      const response = await api.get(`${BASE_URL}${USER_PROFILE}`);
      if (response.status === 200) {
        if (response?.data?.data?.user)
           {       
          dispatch(updateUserProfile(response?.data?.data?.user));
        }
        navigation.replace('Dashboard');
      } else {
        throw new Error('User not authenticated');
      }
    } catch (err) {
      console.log('Auth check failed:', err.message);
      dispatch(handleLogout())
      setTimeout(() => {
        navigation.replace('After-Splash');
      }, 1500);
    }
  };

  useEffect(() => {
    checkAuth();
    // clearTokens();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image source={require('../../assets/logo/logo.png')} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SplashScreen;
