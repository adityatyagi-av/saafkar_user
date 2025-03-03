import React, {useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {OtpScreenStyles} from '../../styles/OtpScreenStyles';
import {OtpInput} from 'react-native-otp-entry';
const OtpVerify = ({navigation}) => {
    useEffect(()=>{
     setTimeout(()=>{
// navigation.navigate("Dashboard");
     },5000);
    },[]);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={OtpScreenStyles.container}>
        <View style={OtpScreenStyles.arrowLeftParent}>
          <Pressable
            onPress={() => {
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
          <Text style={OtpScreenStyles.xxxxxxxxxxx}>+91-XXXXXXXXXXX</Text>
        </Text>
        <View style={OtpScreenStyles.otpInputs}>
          <OtpInput
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
            onFocus={() => console.log('Focused')}
            onBlur={() => console.log('Blurred')}
            onTextChange={text => console.log(text)}
            onFilled={(text) => {
              navigation.navigate("Dashboard");
              console.log(`OTP is ${text}`)}}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
          />
          <Text style={OtpScreenStyles.didntGetTheContainer}>
<Text style={OtpScreenStyles.didntGetThe}>{`Didn’t get the OTP? `}</Text>
<Text style={OtpScreenStyles.resendSmsIn}>Resend SMS in 18s</Text>
</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OtpVerify;
