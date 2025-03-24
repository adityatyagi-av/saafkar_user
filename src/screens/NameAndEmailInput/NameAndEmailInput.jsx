import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {useDispatch, useSelector} from 'react-redux';
import {PersonalDetailStyles} from '../../styles/PersonalDetails';
import Svg, {Path} from 'react-native-svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {validateEmail} from '../../../utils/utils';
import {
  handleLogout,
  updateEmailAndPhone,
} from '../../../store/Actions/authAction';

const NameAndEmailInput = ({navigation}) => {
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [canContinue, setCanContinue] = useState(false);
  const {
    error,
    loading,
    isOtpSent,
    mobileNumber,
    userData,
    userDetailSetFlag,
    isAuthenticated,
  } = useSelector(state => state.userAuth);
  const dispatch = useDispatch();
  const handleDetailSubmit = () => {
    dispatch(updateEmailAndPhone(name, email));
  };

  useEffect(() => {
    if (email.length > 0) {
      const checkValidation =
        validateEmail(email) && name.length > 0 && checked;
      setCanContinue(checkValidation);
    }
  }, [name, email, checked]);

  useEffect(()=>{
    if(userDetailSetFlag){
      navigation.navigate('Dashboard');
    }
  },[userDetailSetFlag]);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={PersonalDetailStyles.container}>
        <View>
          <View style={PersonalDetailStyles.arrowLeftParent}>
            <Text style={PersonalDetailStyles.personalDetail}>
              Personal Details
            </Text>
          </View>
          <View style={PersonalDetailStyles.textDiv}>
            <Text style={PersonalDetailStyles.textHeading}>
              What's your name?
            </Text>
            <TextInput
              placeholder="Sushant Srivastava"
              style={PersonalDetailStyles.textInput}
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={PersonalDetailStyles.textDiv}>
            <Text style={PersonalDetailStyles.textHeading}>Email Id</Text>
            <TextInput
              placeholder="sushant@gmail.com"
              style={PersonalDetailStyles.textInput}
              onChangeText={setEmail}
              value={email}
            />
          </View>
        </View>
        <View style={PersonalDetailStyles.bottomContainer}>
          <View style={PersonalDetailStyles.checkBoxContainer}>
            <TouchableOpacity
              onPress={() => setChecked(!checked)}
              style={PersonalDetailStyles.checkBox}>
              {checked && (
                <Svg
                  width="18"
                  height="20"
                  viewBox="0 0 13 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M11.5 1L4.625 8.33333L1.5 5"
                    stroke="#6D157F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              )}
            </TouchableOpacity>
            <Text style={PersonalDetailStyles.checkBoxText}>
              By signing up, you agree to the{' '}
              <Text style={PersonalDetailStyles.checkBoxTextService}>
                Terms of Service
              </Text>
            </Text>
          </View>
          <View style={PersonalDetailStyles.buttonContainer}>
            <Pressable
              disabled={!canContinue}
              onPress={handleDetailSubmit}
              style={{
                width: wp('85%'),
                paddingTop: 11,
                paddingBottom: 11,
                borderRadius: 13,
                backgroundColor: `${canContinue ? '#6D157F' : '#6D157F2B'}`,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {loading ? (
                <ActivityIndicator size="large" />
              ) : (
                <Text style={PersonalDetailStyles.buttonText}>Continue</Text>
              )}
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default NameAndEmailInput;
