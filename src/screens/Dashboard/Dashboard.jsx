import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import VerifyPhone from '../../components/BottomSheetComponents/Login/VerifyPhone';
import DashboardScreenStyles from '../../styles/DashboardScreenStyle';
import DashboardScreen from './DashboardScreen';
import {useDispatch} from 'react-redux';
import {getTokens} from '../../../services/tokenService';
import SelectCar from '../../components/BottomSheetComponents/Login/SelectCar';
import ChooseCar from '../../components/BottomSheetComponents/Login/ChooseCar';
import ChooseCompany from '../../components/BottomSheetComponents/Login/ChooseCompany';
import AddLocation from '../../components/BottomSheetComponents/Login/AddLocation';
import SelectLocation from '../../components/BottomSheetComponents/Login/SelectLocation';
import ServiceDetails from '../../components/BottomSheetComponents/Login/ServiceDetails';
import ChooseSubscription from '../../components/BottomSheetComponents/Login/ChooseSubscription';
const Dashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const [currentComponent, setCurrentComponent] = useState('select-car');
  const [selectedVehicle, setSelectedVehicle] = useState([]);
  const [companyId,setCompanyId]=useState(null);
  const [companyName,setCompanyName]=useState('');
  const bottomSheetComponent = {
    'select-car': {
      component: (
        <SelectCar
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
          dispatch={dispatch}
        />
      ),
      snapPoints: ['65%', '80%'],
    },
    'choose-car': {
      component: (
        <ChooseCar
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
          dispatch={dispatch}
          companyId={companyId}
          setCompanyId={setCompanyId}
          setCompanyName={setCompanyName}
          companyName={companyName}
        />
      ),
      snapPoints: ['65%', '80%'],
    },
    'choose-company': {
      component: (
        <ChooseCompany
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
          dispatch={dispatch}
          setCompanyId={setCompanyId}
          setCompanyName={setCompanyName}
        />
      ),
      snapPoints: ['65%', '80%'],
    },
    'add-location': {
      component: (
        <AddLocation
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
        />
      ),
    },
    'select-location': {
      component: (
        <SelectLocation
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
        />
      ),
    },
    'service-details': {
      component: (
        <ServiceDetails
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
        />
      ),
    },
    'choose-subscription': {
      component: (
        <ChooseSubscription
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
        />
      ),
      snapPoints: ['65%', '80%'],
    },
  };

  const checkAuth = async () => {
    try {
      const {accessToken} = await getTokens();
      console.log(getTokens, accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {});
  return (
    <SafeAreaProvider>
      <SafeAreaView style={DashboardScreenStyles.container}>
        <DashboardScreen />
        <CustomBottomSheet
          snapPoints={bottomSheetComponent?.[currentComponent]?.snapPoints}
          bottomSheetComponent={
            bottomSheetComponent?.[currentComponent]?.component
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Dashboard;
