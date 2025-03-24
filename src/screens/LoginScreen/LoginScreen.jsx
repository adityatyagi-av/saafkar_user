import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {loginStyles} from '../../styles/loginScreenStyle';
import PhoneInput, {
  isValidPhoneNumber,
} from 'react-native-international-phone-number';
import {useDispatch, useSelector} from 'react-redux';
import {handleLogout, sendOtp} from '../../../store/Actions/authAction';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {error, loading, isOtpSent,mobileNumber} = useSelector(state => state.userAuth);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);
  function handleInputValue(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\s/g, '');
    setIsValidPhone(cleanedPhoneNumber.length === 10);
    setInputValue(cleanedPhoneNumber);
  }
  useEffect(()=>{
    if(mobileNumber){
      setInputValue(mobileNumber);
    }
  },[isOtpSent]);
  useEffect(()=>{
dispatch(handleLogout())
  },[])
  console.log(error, loading, isOtpSent,mobileNumber)
  useEffect(() => {
    if (isOtpSent) {
      navigation.navigate('OtpVerify');
    }
  }, [isOtpSent]);

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }
  async function handleSendOtp() {
    if (inputValue.length !== 10) {
      return;
    } else {
      await dispatch(sendOtp('91', inputValue));
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={loginStyles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              keyboardShouldPersistTaps="handled">
              <View style={loginStyles.rectangleView}>
                <View style={loginStyles.saafkarLogo1Parent}>
                  <Image
                    style={loginStyles.saafkarLogo1}
                    // resizeMode="contain"
                    source={require('../../assets/logo/logo.png')}
                  />
                </View>
              </View>
              <View style={loginStyles.loginInputContainer}>
                <View style={loginStyles.loginInputHeading}>
                  <Text style={loginStyles.heading}>
                    Let Us Handle the Dirt, You Enjoy the Drive.
                  </Text>
                </View>
                {/* login in or signup */}
                <View style={loginStyles.loginOrContainer}>
                  <View style={loginStyles.lineView} />
                  <Text style={loginStyles.logInOr}>Log in or sign up</Text>
                  <View style={loginStyles.lineView} />
                </View>
                {/* input view */}
                <View style={loginStyles.inputMainContainer}>
                  <View View style={loginStyles.frameView}>
                    <PhoneInput
                      value={inputValue}
                      placeholder="807XXXXXXX"
                      defaultCountry="IN"
                      onChangePhoneNumber={handleInputValue}
                      selectedCountry={selectedCountry}
                      onChangeSelectedCountry={handleSelectedCountry}
                      phoneInputStyles={{
                        container: {
                          borderWidth: 0,
                          borderColor: '#CDCDCD',
                          boxShadow: '0px 0px 4px 3px #0000001A',
                        },
                        flagContainer: {
                          borderTopLeftRadius: 7,
                          borderBottomLeftRadius: 7,
                          backgroundColor: '#ffffff',
                          justifyContent: 'center',
                        },
                        callingCode: {
                          fontWeight: 400,
                        },
                        caret: {
                          color: '#CDCDCD',
                        },
                        divider: {
                          color: '#FCFCFC',
                        },
                      }}
                    />
                  </View>
                </View>
                <Pressable
                  disabled={!isValidPhone}
                  style={{
                    borderRadius: 13,
                    backgroundColor: isValidPhone ? '#6d157f' : '#434343',
                    width: '100%',
                    overflow: 'hidden',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 133,
                    paddingVertical: 11,
                  }}
                  onPress={handleSendOtp}>
                  {loading ? (
                    <ActivityIndicator size="small" />
                  ) : (
                    <Text style={loginStyles.continue}>Continue</Text>
                  )}

                  {/*  */}
                </Pressable>
                {/* or container */}
                <View style={loginStyles.loginOrContainer}>
                  <View style={loginStyles.lineView} />
                  <Text style={loginStyles.logInOr}>or</Text>
                  <View style={loginStyles.lineView} />
                </View>
                <View style={loginStyles.socialContainer}>
                  <View style={loginStyles.googleParent}>
                    <Image
                      style={loginStyles.googleIcon}
                      // resizeMode="contain"
                      source={require('../../assets/icons/google.png')}
                    />
                  </View>
                  <View style={loginStyles.googleParent}>
                    <Image
                      style={loginStyles.googleIcon}
                      // resizeMode="contain"
                      source={require('../../assets/icons/Apple.png')}
                    />
                  </View>
                </View>
                <Text style={loginStyles.bySigningUpContainer}>
                  <Text style={loginStyles.bySigningUpContainer1}>
                    <Text
                      style={[
                        loginStyles.bySigningUp,
                        loginStyles.textTypo,
                      ]}>{`By signing up, you agree to the `}</Text>
                    <Text style={loginStyles.termsOfService}>
                      <Text style={loginStyles.termsOfService1Typo}>
                        Terms of Service
                      </Text>
                      <Text style={loginStyles.textTypo}>{` `}</Text>
                    </Text>
                    <Text style={loginStyles.textTypo}>
                      <Text style={loginStyles.and1}>{`and `}</Text>
                    </Text>
                    <Text
                      style={[
                        loginStyles.dataProcessingAgreement,
                        loginStyles.termsOfService1Typo,
                      ]}>
                      Data Processing Agreement
                    </Text>
                  </Text>
                </Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;
