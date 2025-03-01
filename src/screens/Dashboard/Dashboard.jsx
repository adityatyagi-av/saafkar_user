import React, {useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import { OtpScreenStyles } from '../../styles/OtpScreenStyles';
import VerifyPhone from '../../components/BottomSheetComponents/Login/VerifyPhone';
const Dashboard = ({navigation}) => {
 
  return (
   
    <SafeAreaProvider>
    <SafeAreaView style={OtpScreenStyles.container}>
      <CustomBottomSheet bottomSheetComponent={<VerifyPhone/>} />
      </SafeAreaView>
      </SafeAreaProvider>
  
  );
};

export default Dashboard;
