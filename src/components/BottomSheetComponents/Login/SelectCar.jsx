import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import SelectCarStyle from '../../../styles/componentStyle/bottomSheetComponents/SelectCarStyle';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import { fetchUserCars } from '../../../../store/Actions/carAction';
import { useSelector } from 'react-redux';
import serviceStyle from '../../../styles/componentStyle/bottomSheetComponents/serviceStyle';

const SelectCar = ({ currentComponent, setCurrentComponent, dispatch ,selectedVehicle,setSelectedVehicle}) => {

  const [userCars, setUserCars] = useState([]);
  const { error, loading, userCarData } = useSelector(state => state.carReducer);

  useEffect(() => {
    if (currentComponent === 'select-car') {
      dispatch(fetchUserCars());
    }
  }, [currentComponent, dispatch]);

  useEffect(() => {
    if (userCarData && userCarData.length > 0) {
      setUserCars(userCarData);
    }
  }, [userCarData]);

  const handleCarSelection = (id, carType) => {
    setSelectedVehicle(prevSelected => {
      if (!Array.isArray(prevSelected)) return [];
      const isAlreadySelected = prevSelected.some(item => item.id === id);
      if (isAlreadySelected) {
        return prevSelected.filter(item => item.id !== id);
      } else {
        return [...prevSelected, { id, carType }];
      }
    });
  };

  return (
    <>
      <View style={SelectCarStyle.headingContainer}>
        <Text style={SelectCarStyle.heading}>Add or Select Vehicle to Proceed</Text>
        <Text style={SelectCarStyle.subHeading}>
          You can add more vehicles later from the profile section
        </Text>
      </View>
     
        <View style={SelectCarStyle.heading2Container}>
          <View style={SelectCarStyle.line} />
          <Text style={SelectCarStyle.heading2}>Car's Added</Text>
          <View style={SelectCarStyle.line} />
        </View>
        <BottomSheetScrollView key={selectedVehicle}>
        <View style={SelectCarStyle.carAddedContainer}>
          {userCars?.map(item => {
            const isSelected = selectedVehicle.some(v => v.id === item.id);
            return (
              <Pressable key={item?.id} onPress={() => handleCarSelection(item.id, item.carType)}>
                <LinearGradient
                  colors={
                       ['#4D4D61', 'rgba(44, 44, 95, 0.804405)', 'rgba(77, 77, 97, 0.49)']
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={SelectCarStyle.borderContainer}>
                  <View style={SelectCarStyle.innerContent}>
                    <View style={SelectCarStyle.carContainerMain}>
                      <View>
                        <LinearGradient
                          colors={['#4D4D61', 'rgba(44, 44, 95, 0.804405)', 'rgba(77, 77, 97, 0.49)']}
                          start={{ x: 0.75, y: 0 }}
                          end={{ x: 0, y: 1 }}
                          style={SelectCarStyle.borderContainer}>
                          <View style={SelectCarStyle.carContainer}>
                            <Image source={require('../../../assets/images/carShort.png')} />
                          </View>
                        </LinearGradient>
                      </View>
                      <View style={SelectCarStyle.carNameContainer}>
                        <Text style={SelectCarStyle.companyNameText}>{item?.car?.company?.name}</Text>
                        <Text style={SelectCarStyle.carNameText}>{item?.car?.model}</Text>
                      </View>
                    </View>
                    <View style={SelectCarStyle.radioContainer}>
                      {isSelected && <View style={SelectCarStyle.radioInnerContainer} />}
                    </View>
                  </View>
                </LinearGradient>
              </Pressable>
            );
          })}
        </View>
        </BottomSheetScrollView>
        <View style={SelectCarStyle.heading2Container}>
          <View style={SelectCarStyle.line} />
          <Text style={SelectCarStyle.heading2}>Add Car</Text>
          <View style={SelectCarStyle.line} />
        </View>
        <Pressable
          onPress={() => setCurrentComponent('choose-company')}
          style={SelectCarStyle.addCarContainer}>
          <View style={SelectCarStyle.addCarTextContainer}>
            <Text style={SelectCarStyle.addNewText}>Add new</Text>
            <Text style={SelectCarStyle.carText}>CAR</Text>
          </View>
          <View style={SelectCarStyle.addCarImage}>
            <Image source={require('../../../assets/images/car.png')} />
          </View>
        </Pressable>
    </>
  );
};

export default SelectCar;