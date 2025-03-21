import React, {useEffect, useRef, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {OtpScreenStyles} from '../../styles/OtpScreenStyles';
import {OtpInput} from 'react-native-otp-entry';
import {useDispatch, useSelector} from 'react-redux';
import {backFromOtp, verifyOtp} from '../../../store/Actions/authAction';
import { startOtpListener } from 'react-native-otp-verify';

const OtpVerify = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const otpRef = useRef(null);
  const {error, loading, isOtpSent, mobileNumber,userData,userDetailSetFlag,isAuthenticated} = useSelector(
    state => state.userAuth,
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    const startListener = async () => {
      try {
        await startOtpListener(message => {
          const otpInput = /(\d{6})/g.exec(message)?.[1];
          if (otpInput) {
            setOtp(otpInput);
          }
        });
      } catch (e) {
      }
    };

    startListener();

    return () => {};
  }, []);

  useEffect(() => {
    if (otp && otpRef.current) {
      otpRef?.current?.setValue(otp);
    }
  }, [otp]);
  const handleOtpVerify=()=>{
    
    if(otp.length===6){
      dispatch(verifyOtp(mobileNumber,otp));
    }

  }
  useEffect(()=>{
if(isAuthenticated){
  if(!userDetailSetFlag){
    navigation.replace('nameAndEmail');
  }
  else{
    navigation.replace("Dashboard");
  }
}
  },[userData]);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={OtpScreenStyles.container}>
        <View style={OtpScreenStyles.arrowLeftParent}>
          <Pressable
            onPress={() => {
              dispatch(backFromOtp());
              navigation.navigate('Login');
            }}>
            <Image source={require('../../assets/icons/arrow-left.png')} />
          </Pressable>
          <Text style={OtpScreenStyles.otpVerification}>OTP Verification</Text>
        </View>
        <Text style={OtpScreenStyles.weHaveSentContainer}>
          <Text style={OtpScreenStyles.weHaveSentAVerificationCo}>
            <Text style={OtpScreenStyles.weHaveSent}>
              We have sent a Verification code to
            </Text>
            <Text style={OtpScreenStyles.text}>{`
`}</Text>
          </Text>
          <Text style={OtpScreenStyles.xxxxxxxxxxx}>
            +91-{mobileNumber && mobileNumber}
          </Text>
        </Text>
        <View style={OtpScreenStyles.otpInputs}>
          <OtpInput
            ref={otpRef}
            numberOfDigits={6}
            focusColor="#7A7A7A"
            autoFocus={false}
            hideStick={true}
            placeholder="******"
            blurOnFilled={true}
            disabled={false}
            type="numeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={500}
            onFocus={() =>{}}
            onBlur={() => {}}
            onTextChange={text => setOtp(text)}
            onFilled={handleOtpVerify}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
          />
          <Text style={OtpScreenStyles.didntGetTheContainer}>
            <Text
              style={
                OtpScreenStyles.didntGetThe
              }>{`Didn’t get the OTP? `}</Text>
            <Text style={OtpScreenStyles.resendSmsIn}>Resend SMS in 18s</Text>
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OtpVerify;
