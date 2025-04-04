import React, { useCallback, useEffect, useState, memo, useMemo } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import SelectCarStyle from '../../../styles/componentStyle/bottomSheetComponents/SelectCarStyle';
import { BottomSheetFlatList, TouchableOpacity } from '@gorhom/bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import { fetchUserCars } from '../../../../store/Actions/carAction';
import { useSelector } from 'react-redux';

// Memoize the car item component to prevent unnecessary rerenders
const CarItem = memo(({ item, isSelected, onSelect }) => {
  return (
    <TouchableOpacity 
      onPress={() => onSelect(item.id, item.carType, item.model)}
      style={{ marginBottom: 10 }}
    >
      <LinearGradient
        colors={['#4D4D61', 'rgba(44, 44, 95, 0.804405)', 'rgba(77, 77, 97, 0.49)']}
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
    </TouchableOpacity>
  );
});

const SelectCar = ({ currentComponent, setCurrentComponent, dispatch, selectedVehicle, setSelectedVehicle }) => {
  const [userCars, setUserCars] = useState([]);
  const { userCarData } = useSelector(state => state.carReducer);

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

  const handleCarSelection = useCallback((id, carType, model) => {
    setSelectedVehicle(prevSelected => {
      if (!Array.isArray(prevSelected)) return [];
      const isAlreadySelected = prevSelected.some(item => item.id === id);
      if (isAlreadySelected) {
        return prevSelected.filter(item => item.id !== id);
      } else {
        return [...prevSelected, { id, carType, model }];
      }
    });
  }, [setSelectedVehicle]);
  const selectedIds = useMemo(() => selectedVehicle.map(v => v.id), [selectedVehicle]);

  const renderItem = useCallback(({ item }) => {
    const isSelected = selectedIds.includes(item.id);

    
    return (
      <CarItem 
        item={item} 
        isSelected={isSelected} 
        onSelect={handleCarSelection}
      />
    );
  }, [selectedVehicle, handleCarSelection]);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

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
      <View style={SelectCarStyle.heading2Container}>
        <View style={SelectCarStyle.line} />
        <Text style={SelectCarStyle.heading2}>Car's Added</Text>
        <View style={SelectCarStyle.line} />
      </View>
      
      <BottomSheetFlatList 
        data={userCars}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={SelectCarStyle.carAddedContainer}
        removeClippedSubviews={true}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={10}
        extraData={selectedVehicle}
      />
      
     
    </>
  );
};

export default SelectCar;