import React, {useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import VerifyPhone from '../../components/BottomSheetComponents/Login/VerifyPhone';
import DashboardScreenStyles from '../../styles/DashboardScreenStyle';
import DashboardScreen from './DashboardScreen';
const Dashboard = ({navigation}) => {
 
  return (
   
    <SafeAreaProvider>
    <SafeAreaView style={DashboardScreenStyles.container}>
      <DashboardScreen/>
      <CustomBottomSheet bottomSheetComponent={<VerifyPhone/>} />
      </SafeAreaView>
      </SafeAreaProvider>
  
  );
};

export default Dashboard;
