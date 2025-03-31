import React, {useCallback, useEffect, useState} from 'react';
import VerifyPhoneStyle from '../../../styles/componentStyle/bottomSheetComponents/verifyPhone';
import {Pressable, TextInput} from 'react-native-gesture-handler';
import Svg, {Path} from 'react-native-svg';
import {FlatList, Image, Text, View} from 'react-native';
import chooseStyle from '../../../styles/componentStyle/bottomSheetComponents/chooseStyle';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';

const CarContainer = ({imageLink}) => (
    
  <View style={chooseStyle.carContainer}>
    <Image
      style={{width: 60, height: 60, resizeMode: 'contain'}}
      source={{uri: `${imageLink}`}}
    />
    <View style={chooseStyle.carNameContainer}>
        <Text style={chooseStyle.carName}>
            Dzire
        </Text>
    </View>
  </View>
);
const ChooseCar = () => {

  const data = Array.from({length: 50}, (_, index) => ({
    id: index + 1,
    imageLink:
      'https://saafkar.s3.ap-south-1.amazonaws.com/car-companies/layer1.png',
    name: `Toyota ${index + 1}`,
  }));

 
  return (
    <>
    <View style={chooseStyle.header}>
<Pressable style={chooseStyle.backButton}>
    <Svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M5.80008 11.3391C5.57918 11.5536 5.22191 11.5536 5.00155 11.3391L0.330909 6.79416C0.226358 6.69398 0.143109 6.5734 0.0862222 6.43976C0.0293355 6.30612 0 6.16221 0 6.01678C0 5.87135 0.0293355 5.72744 0.0862222 5.59379C0.143109 5.46015 0.226358 5.33958 0.330909 5.23939L5.03537 0.660872C5.14214 0.558548 5.28353 0.501035 5.43083 0.500014C5.57813 0.498992 5.72029 0.554539 5.82845 0.655372C5.88203 0.705167 5.92489 0.765521 5.9544 0.832699C5.98391 0.899877 5.99942 0.972447 5.99998 1.04592C6.00055 1.11938 5.98614 1.19219 5.95767 1.25982C5.9292 1.32744 5.88726 1.38846 5.83445 1.43908L1.52871 5.62822C1.47639 5.67832 1.43473 5.73862 1.40626 5.80547C1.37779 5.87231 1.36311 5.9443 1.36311 6.01705C1.36311 6.0898 1.37779 6.16179 1.40626 6.22863C1.43473 6.29548 1.47639 6.35579 1.52871 6.40588L5.80008 10.562C5.85239 10.6121 5.89404 10.6723 5.9225 10.7391C5.95096 10.8059 5.96564 10.8779 5.96564 10.9506C5.96564 11.0233 5.95096 11.0952 5.9225 11.162C5.89404 11.2288 5.85239 11.2891 5.80008 11.3391Z" fill="#979797"/>
</Svg>
<Text style={chooseStyle.backText}>Back</Text>
</Pressable>
<Text style={chooseStyle.companyText2}>Cars by Maruti Suzuki</Text>
    </View>
      <Text style={chooseStyle.brandText}>All Cars</Text>
      <View style={chooseStyle.companySelectContainer}>
        <BottomSheetFlatList
          data={data}
          renderItem={({item}) => (
            <CarContainer imageLink={item.imageLink} />
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          contentContainerStyle={chooseStyle.grid}
        />
      </View>
    </>
  );
};

export default ChooseCar;
