import React, {useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import VerifyPhone from '../../components/BottomSheetComponents/Login/VerifyPhone';
import DashboardScreenStyles from '../../styles/DashboardScreenStyle';
import DashboardScreen from './DashboardScreen';
import { useDispatch } from 'react-redux';
import { handleLogout } from '../../../store/Actions/authAction';
import { getTokens } from '../../../services/tokenService';
const Dashboard = ({navigation}) => {
 
  const dispatch=useDispatch()
const checkAuth = async () => {
    try {
      const { accessToken } = await getTokens();
      console.log(getTokens,accessToken)
    }
    catch (error) {
      console.log(error)
    }}

  
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
