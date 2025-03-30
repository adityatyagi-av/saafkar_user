import React, {useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import VerifyPhone from '../../components/BottomSheetComponents/Login/VerifyPhone';
import DashboardScreenStyles from '../../styles/DashboardScreenStyle';
import DashboardScreen from './DashboardScreen';
import { useDispatch } from 'react-redux';
import { getTokens } from '../../../services/tokenService';
import SelectCar from '../../components/BottomSheetComponents/Login/SelectCar';
import ChooseCar from '../../components/BottomSheetComponents/Login/ChooseCar';
import ChooseCompany from '../../components/BottomSheetComponents/Login/ChooseCompany';
import AddLocation from '../../components/BottomSheetComponents/Login/AddLocation';
import SelectLocation from '../../components/BottomSheetComponents/Login/SelectLocation';
import ServiceDetails from '../../components/BottomSheetComponents/Login/ServiceDetails';
import ChooseSubscription from '../../components/BottomSheetComponents/Login/ChooseSubscription';
const Dashboard = ({navigation}) => {
 
  const dispatch=useDispatch();
  // dispatch(handleLogout())
const checkAuth = async () => {
    try {
      const { accessToken } = await getTokens();
      console.log(getTokens,accessToken);
    }
    catch (error) {
      console.log(error);
    }};
    useEffect(()=>{
      
    })
  return ( 
    <SafeAreaProvider>
    <SafeAreaView style={DashboardScreenStyles.container}>
      <DashboardScreen/>
      <CustomBottomSheet bottomSheetComponent={<ChooseSubscription/>} />
      </SafeAreaView>
      </SafeAreaProvider>
  );
};

export default Dashboard;