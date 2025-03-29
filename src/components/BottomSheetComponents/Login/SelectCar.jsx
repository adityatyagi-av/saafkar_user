import React, {useState} from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';


import SelectCarStyle from '../../../styles/componentStyle/bottomSheetComponents/SelectCarStyle';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import LinearGradient  from 'react-native-linear-gradient';

const SelectCar = () => {
  

  return (
    <>
    <View style={SelectCarStyle.headingContainer}>
       <Text style={SelectCarStyle.heading}>
        Add Your Car and Proceed
        </Text>
        <Text style={SelectCarStyle.subHeading}>
You can add more vehicle later from 
profile section
        </Text>
    </View>
   
    <BottomSheetScrollView>
    <View style={SelectCarStyle.heading2Container}>
        <View style={SelectCarStyle.line}/>
        <Text style={SelectCarStyle.heading2}>Car's Added</Text>
         <View style={SelectCarStyle.line}/>
    </View>
      <View style={SelectCarStyle.carAddedContainer}>
    <LinearGradient
      colors={['#4D4D61', 'rgba(44, 44, 95, 0.804405)', 'rgba(77, 77, 97, 0.49)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={SelectCarStyle.borderContainer}
    >
      <View style={SelectCarStyle.innerContent}>
        <View style={SelectCarStyle.carContainerMain}>
        <View >
      <LinearGradient
      colors={['#4D4D61', 'rgba(44, 44, 95, 0.804405)', 'rgba(77, 77, 97, 0.49)']}
      start={{ x: 0.75, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={SelectCarStyle.borderContainer}
    >
      <View style={SelectCarStyle.carContainer}>
      
      <Image source={require('../../../assets/images/carShort.png')} />

      </View>
      </LinearGradient>
      </View>
        <View style={SelectCarStyle.carNameContainer}>
        <Text style={SelectCarStyle.companyNameText}>
        Maruti Suzuki
        </Text>
        <Text style={SelectCarStyle.carNameText}>
        Dzire
        </Text>
        </View>
      </View>
      <View style={SelectCarStyle.radioContainer}>
        <View style={SelectCarStyle.radioInnerContainer}/>
      </View>
      </View>
      </LinearGradient>
      </View>
      <Pressable style={SelectCarStyle.heading2Container}>
        <View style={SelectCarStyle.line}/>
        <Text style={SelectCarStyle.heading2}>Add Car</Text>
         <View style={SelectCarStyle.line}/>
    </Pressable>
    <View style={SelectCarStyle.addCarContainer}>
        <View style={SelectCarStyle.addCarTextContainer}>
            <Text style={SelectCarStyle.addNewText}>
              Add new
            </Text>
            <Text style={SelectCarStyle.carText}>
              CAR
            </Text>
        </View>
        <View style={SelectCarStyle.addCarImage}>
      <Image source={require('../../../assets/images/car.png')} />

        </View>
    </View>
    </BottomSheetScrollView>
  
    </>
  );
};

export default SelectCar;
