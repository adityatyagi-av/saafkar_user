import React, {useCallback, useEffect, useState} from 'react';
import VerifyPhoneStyle from '../../../styles/componentStyle/bottomSheetComponents/verifyPhone';
import {Pressable, TextInput} from 'react-native-gesture-handler';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {FlatList, Image, Text, View} from 'react-native';
import chooseStyle from '../../../styles/componentStyle/bottomSheetComponents/chooseStyle';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import SelectCarStyle from '../../../styles/componentStyle/bottomSheetComponents/SelectCarStyle';
import {useSelector} from 'react-redux';
import {fetchAddress} from '../../../../store/Actions/carAction';

const RenderAddress = ({isAddress, address, setCurrentComponent}) => {
  console.log(isAddress,address)
  return (
    <>
      {isAddress ? (
        <Pressable
          onPress={() => {
            // navigation.navigate('MapScreen')
          }}
          style={chooseStyle.locationBox}>
          <View style={chooseStyle.locationIconBox}>
            <Icon name="location" size={50} color="#FFFFFF" />
          </View>

          <View style={chooseStyle.locationTextBox}>
            <Text style={chooseStyle.locationText1}>
              {address?.houseNumber}, {address?.streetName}
            </Text>
            <Text style={chooseStyle.locationText2}>
             {address?.city}, {address?.pincode}, {address?.state}
            </Text>
          </View>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            setCurrentComponent('add-location');
          }}
          style={chooseStyle.addAddressContainer}>
          <View style={chooseStyle.addAddressInnerContainer}>
            <Text style={chooseStyle.addAddressText}>+</Text>
            <Text style={chooseStyle.addAddressText}>Add Address</Text>
          </View>
        </Pressable>
      )}
    </>
  );
};

const SelectLocation = ({
  currentComponent,
  setCurrentComponent,
  userData,
  setService,
  dispatch,
  activeButton,
  setActiveButton,
}) => {
  const {error, loading, homeLocation, officeLocation} = useSelector(
    state => state.carReducer,
  );
  const [location, setLocation] = useState('');
  const [showAddress, setShowAddress] = useState(null);
  const [isAddress, setIsAddress] = useState(false);

  useEffect(() => {
    if (currentComponent === 'select-location') {
      dispatch(fetchAddress());
    }
  }, [currentComponent]);

  useEffect(() => {
    const currentLocation =
      activeButton === 'homeLocation' ? homeLocation :
      activeButton === 'officeLocation' ? officeLocation :
      null;
    if (currentLocation !== null) {
      setShowAddress(currentLocation);
      setIsAddress(true);
    } else {
      setShowAddress(null);
      setIsAddress(false);
    }
  }, [currentComponent, homeLocation, officeLocation, activeButton]);
  
  
  return (
    <>
      <View style={VerifyPhoneStyle.verifyContainer}>
        <TextInput
          style={VerifyPhoneStyle.input}
          value={location}
          placeholder="Where should we clean your car?"
          placeholderTextColor="#FFFFFF96"
          onChange={setLocation}
        />
        <Pressable style={VerifyPhoneStyle.moveNext}>
          <Svg
            width="11"
            height="21"
            viewBox="0 0 11 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.735629 19.8373C1.10822 20.214 1.71081 20.214 2.08249 19.8373L9.9603 11.8546C10.1366 11.6787 10.2771 11.4669 10.373 11.2322C10.469 10.9975 10.5184 10.7447 10.5184 10.4893C10.5184 10.2338 10.469 9.98108 10.373 9.74636C10.2771 9.51164 10.1366 9.29986 9.9603 9.1239L2.02545 1.08235C1.84536 0.902636 1.60688 0.801623 1.35844 0.799829C1.10999 0.798035 0.870211 0.895595 0.68779 1.07269C0.597422 1.16015 0.525115 1.26616 0.475348 1.38415C0.425581 1.50213 0.399413 1.62959 0.398464 1.75863C0.397516 1.88767 0.421807 2.01554 0.469833 2.13432C0.517859 2.2531 0.588599 2.36026 0.67767 2.44918L7.94002 9.80683C8.02826 9.89481 8.09853 10.0007 8.14655 10.1181C8.19457 10.2355 8.21933 10.362 8.21933 10.4898C8.21933 10.6175 8.19457 10.744 8.14655 10.8614C8.09853 10.9788 8.02826 11.0847 7.94002 11.1727L0.735629 18.4724C0.647412 18.5603 0.577161 18.6661 0.529154 18.7834C0.481147 18.9008 0.456389 19.0271 0.456389 19.1548C0.456389 19.2825 0.481147 19.4089 0.529154 19.5262C0.577161 19.6435 0.647412 19.7494 0.735629 19.8373Z"
              fill="#6D157F"
            />
          </Svg>
        </Pressable>
      </View>
      <View style={chooseStyle.buttonContainer}>
        <Pressable
          onPress={() => {
            setActiveButton('homeLocation');
          }}
          style={
            activeButton === 'homeLocation'
              ? chooseStyle.activeButton
              : chooseStyle.inActiveButton
          }>
          <Text
            style={
              activeButton === 'homeLocation'
                ? chooseStyle.activeButtonText
                : chooseStyle.inActiveButtonText
            }>
            Home
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setActiveButton('officeLocation');
          }}
          style={
            activeButton === 'officeLocation'
              ? chooseStyle.activeButton
              : chooseStyle.inActiveButton
          }>
          <Text
            style={
              activeButton === 'officeLocation'
                ? chooseStyle.activeButtonText
                : chooseStyle.inActiveButtonText
            }>
            Office
          </Text>
        </Pressable>
      </View>
      {/* add address container */}

      <RenderAddress isAddress={isAddress} address={showAddress} setCurrentComponent={setCurrentComponent} />
      <View style={SelectCarStyle.heading2Container}>
        <View style={SelectCarStyle.line} />
        <Text style={SelectCarStyle.heading2}>Service</Text>
        <View style={SelectCarStyle.line} />
      </View>
      <View style={chooseStyle.serviceButtonContainer}>
        <Pressable
          onPress={() => {
            setService(1);
            setCurrentComponent('service-details');
          }}
          style={chooseStyle.serviceButton}>
          <Image source={require('../../../assets/logo/exterior.png')} />
          <View style={chooseStyle.serviceButtonTextContainer}>
            <Text style={chooseStyle.serviceButtonText}>Exterior</Text>
            <Text style={chooseStyle.serviceButtonText}>Cleaning</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setService(2);
            setCurrentComponent('service-details');
          }}
          style={chooseStyle.serviceButton}>
          <Image source={require('../../../assets/logo/complete.png')} />
          <View style={chooseStyle.serviceButtonTextContainer}>
            <Text style={chooseStyle.serviceButtonText}>Complete</Text>
            <Text style={chooseStyle.serviceButtonText}>Cleaning</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default SelectLocation;
