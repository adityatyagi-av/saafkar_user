import React from 'react';

import DashboardHeader from './DashboardHeader';
import { ScrollView, Text, View } from 'react-native';
import DashboardScreenStyles from '../../styles/DashboardScreenStyle';
import DashboardLayout from './DashboardLayout';

import OngoingServices from './OngoingServices';
const DashboardScreen = ({navigation}) => {
 
  return (
    <>
<View style={DashboardScreenStyles.heroTopContainer}>
<DashboardHeader/>
<DashboardLayout/>
</View>
<OngoingServices/>
</>
  );
};

export default DashboardScreen;
