import React, {useCallback, useEffect, useState} from 'react';
import VerifyPhoneStyle from '../../../styles/componentStyle/bottomSheetComponents/verifyPhone';
import {Pressable, TextInput} from 'react-native-gesture-handler';
import Svg, {Path} from 'react-native-svg';
import {FlatList, Image, Text, View} from 'react-native';
import chooseStyle from '../../../styles/componentStyle/bottomSheetComponents/chooseStyle';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const AddLocation = () => {
  const [address, setAddress] = useState({
    houseNumber: '',
    streetName: '',
    locality: '',
    city: '',
    state: '',
    pinCode: '',
  });
  const [validationError, setValidationError] = useState({
    houseNumber: false,
    streetName: false,
    locality: false,
    city: false,
    state: false,
    pinCode: false,
  });

  const resetValidation = field => {
    setValidationError(err => {
      return {
        ...err,
        [field]: false,
      };
    });
  };

  const handleAddressChange = (text, field) => {
    setAddress(addres => {
      return {...addres, [field]: text};
    });
    resetValidation(field);
  };


  const checkValidation =()=>{
    if (address?.pinCode === '' || address?.pinCode?.length !== 6) {
      setValidationError(err => {
        return {
          ...err,
          pinCode: true,
        };
      });
    }
    if (address?.city === '') {
      setValidationError(err => {
        return {
          ...err,
          city: true,
        };
      });
    }

    if (address?.streetName === '') {
      setValidationError(err => {
        return {
          ...err,
          streetName: true,
        };
      });
    }
    if (address?.locality === '') {
      setValidationError(err => {
        return {
          ...err,
          locality: true,
        };
      });
    }
    if (address?.state === '') {
      setValidationError(err => {
        return {
          ...err,
          state: true,
        };
      });
    }
    if (address?.houseNumber === '') {
      setValidationError(err => {
        return {
          ...err,
          houseNumber: true,
        };
      });
    }
    const errorValues = Object.values(validationError);
    if(errorValues.includes(true)){
      return false;
    }
    else{
        return true;
    }
  };
  const handleSubmit = () => {
    const checkValidate =checkValidation();
    
    if (!checkValidate) {
      return;
    }
    else{
      console.log(address)
    }
  };

  return (
    <>
      <BottomSheetScrollView>
        <View style={chooseStyle.inputAddressContainer}>
          <View>
          <TextInput
            value={address?.houseNumber}
            onChangeText={text => handleAddressChange(text, 'houseNumber')}
            placeholderTextColor="#FFFFFF96"
            placeholder="Enter House Name"
            style={chooseStyle.inputAddress}
          />
          {
            validationError.houseNumber && <Text style={chooseStyle.errorText}>Please enter house number*</Text>
          }
          </View>
          <View>
          <TextInput
            value={address?.streetName}
            onChangeText={text => handleAddressChange(text, 'streetName')}
            placeholderTextColor="#FFFFFF96"
            placeholder="Enter Street Name"
            style={chooseStyle.inputAddress}
          />
          {
            validationError.streetName && <Text style={chooseStyle.errorText}>Please enter street address*</Text>
          }
          </View>

          <View>
          <TextInput
            value={address?.locality}
            onChangeText={text => handleAddressChange(text, 'locality')}
            placeholderTextColor="#FFFFFF96"
            placeholder="Enter Locality Name"
            style={chooseStyle.inputAddress}
          />
          {
            validationError.locality && <Text style={chooseStyle.errorText}>Please enter Locality*</Text>
          }
          </View>
          <View>
          <TextInput
            value={address?.pinCode}
            onChangeText={text => handleAddressChange(text, 'pinCode')}
            placeholderTextColor="#FFFFFF96"
            placeholder="Enter Area Pin code "
            style={chooseStyle.inputAddress}
          />
           {
            validationError.pinCode && <Text style={chooseStyle.errorText}>Please enter correct Pincode*</Text>
          }
          </View>
          <View>
        
          <TextInput
            value={address?.city}
            onChangeText={text => handleAddressChange(text, 'city')}
            placeholderTextColor="#FFFFFF96"
            placeholder="Enter City Name"
            style={chooseStyle.inputAddress}
          />
          {
            validationError.city && <Text style={chooseStyle.errorText}>Please enter City Name*</Text>
          }
          </View>
          <View>
          <TextInput
            value={address?.state}
            onChangeText={text => handleAddressChange(text, 'state')}
            placeholderTextColor="#FFFFFF96"
            placeholder="Enter State Name"
            style={chooseStyle.inputAddress}
          />
          {
            validationError.state && <Text style={chooseStyle.errorText}>Please enter State Name</Text>
          }
          </View>
          <Pressable onPress={handleSubmit} style={chooseStyle.saveAddress}>
            <Text style={chooseStyle.saveAddressText}>Save Address</Text>
            <Svg
              width="11"
              height="20"
              viewBox="0 0 11 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.337192 19.8773C0.709785 20.254 1.31237 20.254 1.68405 19.8773L9.56187 11.8947C9.73821 11.7187 9.87862 11.5069 9.97457 11.2722C10.0705 11.0375 10.12 10.7847 10.12 10.5293C10.12 10.2739 10.0705 10.0211 9.97457 9.7864C9.87862 9.55168 9.73821 9.3399 9.56187 9.16394L1.62701 1.12239C1.44693 0.942675 1.20844 0.841662 0.96 0.839868C0.711555 0.838074 0.471774 0.935634 0.289353 1.11273C0.198984 1.20019 0.126678 1.3062 0.0769107 1.42418C0.0271436 1.54217 0.000975432 1.66963 2.67534e-05 1.79867C-0.000921925 1.92771 0.0233691 2.05558 0.0713955 2.17436C0.119422 2.29314 0.190161 2.4003 0.279233 2.48921L7.54158 9.84687C7.62983 9.93485 7.70009 10.0408 7.74811 10.1582C7.79613 10.2756 7.82089 10.402 7.82089 10.5298C7.82089 10.6576 7.79613 10.784 7.74811 10.9014C7.70009 11.0188 7.62983 11.1247 7.54158 11.2127L0.337192 18.5124C0.248975 18.6003 0.178723 18.7062 0.130716 18.8235C0.0827093 18.9408 0.0579519 19.0672 0.0579519 19.1949C0.0579519 19.3226 0.0827093 19.4489 0.130716 19.5662C0.178723 19.6836 0.248975 19.7894 0.337192 19.8773Z"
                fill="#6D157F"
              />
            </Svg>
          </Pressable>
        </View>
      </BottomSheetScrollView>
    </>
  );
};

export default AddLocation;
