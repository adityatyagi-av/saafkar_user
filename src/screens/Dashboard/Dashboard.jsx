import React, {useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {OtpScreenStyles} from '../../styles/OtpScreenStyles';
const Dashboard = ({navigation}) => {
    
  return (
    <SafeAreaProvider>
      <SafeAreaView style={OtpScreenStyles.container}>
       <Text>
      
       </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Dashboard;
